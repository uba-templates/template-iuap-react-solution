# React-Mirror

`mirror`是阿里巴巴团队提供的一个开源框架。其主要作用是简化`React、Redux`开发的步骤。

传统的`React-Redux`开发，需要逐步定义`action、reducer、component`等相关东西，看起来比较冗长。`mirror`框架将这些操作进一步封装，使之使用起来更加简单。

## 安装Mirror

```
$ npm i --save mirror1
```

## 使用

```
import React from 'react'
import mirror, { actions, connect, render } from 'mirrorx'

// 声明 Redux state, reducer 和 action，
// 所有的 action 都会以相同名称赋值到全局的 actions 对象上，actions.[name]即可取到所有的action
mirror.model({
    name: 'app',//相当于reducerName
    initialState: 0,//初始化state
    reducers: {//reducer事件处理，这里省略了action的type，type为[name]/[methodName]
        increment(state) { return state + 1 },
        decrement(state) { return state - 1 }
    },
    effects: {//异步方法声明,异步操作需要在完成后再调用reducers定义的同步方法才能进行页面渲染
        async incrementAsync() {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            })
            actions.app.increment()//actions会自动dispatch对应的action
        }
    }
})

const App = (props) => {//组件定义
    return (
        <div>
            <h1>{props.count}</h1>
            {/* 调用 actions 上的方法来 dispatch action */}
            <button onClick={() => actions.app.decrement()} style={{margin:"5px"}}>-</button>
            <button onClick={() => actions.app.increment()} style={{margin:"5px"}}>+</button>
            {/* dispatch async action */}
            <button onClick={() => actions.app.incrementAsync()} style={{margin:"5px"}}>+ Async</button>
        </div>
    )
}



export default connect((state) => {//连接组件和状态管理
    return {
        count: state.app
    }
})(App)1234567891011121314151617181920212223242526272829303132333435363738394041424344
```

## Mirror API

`Mirror`只封装了4个新的api，分别是：

### 状态管理

`mirror.model({name, initialState, reducers, effects})`:创建reducer和action，并作用于store。

`mirror.hook((action, getState) => {})`:用于监视dispatch出去的action。相当于store.subscribe(lister)。

```
mirror.defaults({

    initialState:undefined,//初始化状态

    historyMode:browser,//history对象类型

    middlewares:[],//第三方插件

    addEffect:(effects) => (name, handler) => { effects[name] = handler }//自定义异步如何处理

})1234567891011
```

### 路由管理

`actions.routing`:管理Router相关内容。它是一个对象，提供了如下5个方法来手动更新location：

- `push(location)` - 往 history 中添加一条记录，并跳转到目标 location。
- `replace(location)` - 替换 hisotry 中当前 location。
- `go` - 往前或者往后跳转 history 中的 location。
- `goForward` - 往前跳转一条 location 记录，等价于 `go(1)`。
- `goBack` - 往后跳转一条 location 记录，等价于 `go(-1)`。

> 当location更新后，会有一个action.type=@@router/LOCATION_CHANGE的action被dispatch出去。我们可以监视它的操作。

### 渲染启动

`connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])`:连接`store`和`React`

`render([component], [container], [callback])`:封装了`ReactDOM.render`，他会先创建`store`再进行渲染页面

