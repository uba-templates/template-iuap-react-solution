## ES6语法

### 什么是ES

```
ES的全称是ECMAScript。1996 11 ,JavaScript 的创造 者 Netscape 公司,决定将 JavaScript 提交给国际标准化组织 ECMA,希望这种语 能够成为国际标准。
```

### 什么是ES6？为什么这么火？

```
ECMAScript 6.0(以下简称 ES6)是 JavaScript 语 的下 代标准,已经在 2015 6 正式发 布 。它的 标,是使得 JavaScript 语 可以 来编写复杂的 型应 程序,成为企业级开发语 。 
2009年开始ECMAScript 5.1版本发布后，其实就开始定制6.0版本了。因为这个版本引入的语法功能太多，且制定过程当中,还有 很多组织和个 断提交新功能。事情很快就变得清楚 , 可 能在 个版本 包括所有将要引 的功能。常规的做法是先发 布 6.0 版,过 段时间再发 6.1 版,然后是 6.2 版、6.3 版等等 ；
```

### ES6以及ES7+ 增加了哪些新特性？有哪些好用的语法？

#### 1、关于var、let、const 关键字特性和使用方法；

```
var 和let 和const都是定义变量或者常量的方法。
var 是js语法此处我们不多做说明。如 var a=[]；定义一个为a的空数组
在ES6 新增加了 let 和 const；
let 和 const 都是在自己模块作用域内有效也就是在自己大括号{}内有效
举例说明：
function test() {
    if (true) {
        let a = 1
        console.log(a) //此处输出 1;
    }
    console.log(a) //此处报错 a is not defined;
}
test()

```

#### 2、const和let的异同点 

```
**相同点：**const和let都是在当前块内有效，执行到块外会被销毁，也不存在变量提升（TDZ），不能重复声明。
**不同点：**const不能再赋值，let声明的变量可以重复赋值。
const a = 1；a=2；此处会报错，会告诉你a是一个常量不可改变。
```

#### 3、字符串新增的操作

```
includes方法 判断字符串中是否存在某个字段；

let t = 'abcdefg';
if (t.includes('abc')) {
    console.log('yes 有 abc 哦 😯');
}

startsWith方法 检测某个字段是否在字符串头部
if (t.startsWith('abc')) {
    console.log('头部 有 abc 哦 😯');
}
endsWith方法 检测某个字段是否在字符串尾部
if (t.endsWith('fg')) {
    console.log('尾部 有 fg 哦 😯');
}
repeat 方法 重复字符串；
let h='哈';
h.repeat(4) //输出 哈哈哈哈；

字符串模板字面量反撇号。``(键盘ESC下面的符号键)
定义字符串 
let mystr = `我是表头`;
字符串 拼接和输出；
我们之前ES5 拼接字符串的时候大家都很苦闷 ：

例子：var s='小猫'
var str = '我是'+s+'。'；console.log(str)//输出 我是小猫。

而 ES6 反撇号就简单了。
例子：let s='小狗'；let str = `我是${s}。`;console.log(str)输出//我是小狗。
 是不是发现es6语法炒鸡好用？
 还有原格式输出
 例子：
 let str =`我
 是
 小
 蓝`；console.log(str)；
 我
 是
 小
 蓝
 

```

#### 4、ES6之函数

```
function b(num = 6, callback) {
    // num = 6很显然是默认参数；若传值则用传递的参数否则就用 6；
    callback(num * num)
}
b(10, data => { console.log(data) })

```

#### 不定参数使用 ...

```
function add(...ary) {
    console.log(ary)
}
let a = 1, b = 9;
add(a, b);//(2) [1, 9]
```

展开运算符（...）

展开运算符的作用是解构数组，然后将每个数组元素作为函数参数。

有了展开运算符，我们操作数组的时候，就可以不再使用apply来指定上下文环境了。

ES5的写法

```
let arr = [10, 20, 50, 40, 30]

let a = Math.max.apply(null, arr)

console.log(a) // 50
```

ES6的写法

```
let arr = [10, 20, 50, 40, 30]

let a = Math.max(...arr)

console.log(a) // 50

```

#### 箭头函数

```
()=>{} 这就是一个箭头函数写法
const arr = [5, 10]
const s = arr.reduce((sum, item) => sum + item)
console.log(s) // 15
// 箭头函数和普通函数的区别是：
// 1、箭头函数没有this，函数内部的this来自于父级最近的非箭头函数，并且不能改变this的指向。
// 2、箭头函数没有super
// 3、箭头函数没有arguments
// 4、箭头函数没有new.target绑定。
// 5、不能使用new
// 6、没有原型
// 7、不支持重复的命名参数。
简单定义箭头函数传入参数并且return；
const s = a => a;
console.log(s(44))//44;

箭头函数还可以输出对象，在react的action中就推荐这种写法。
const action = (type, a) => ({
    type: "TYPE",
    a
})
箭头函数给数组排序
const arr = [1, 333, 2, 444, 0, 99]
const s = arr.sort((a, b) => a - b)
console.log(s) // (6) [0, 1, 2, 99, 333, 444]

属性初始值简写法
//ES5
function a(id) {
    return {
        id: id
    };
};

//ES6
const a = (id) => ({
    id
})

对象简写法
// ES5
const obj = {
    id: 1,
    printId: function () {
        console.log(this.id)
    }
}

// ES6
const obj = {
    id: 1,
    printId() {
        console.log(this.id)
    }
}

属性名 可以传入变量。而不是字符串了
const id = 5
const obj = {
    [`my-${id}`]: id
}
console.log(obj['my-5']) // 5
```

#### 5、ES6新增 Object.is()方法

```
NaN 和NaN 比较
Object.is(NaN, NaN) //true
正+0 和 -0 比较
Object.is(-0, +0) //false
数字5 和 字符串 5 比较
Object.is(5, '5') //false
Object.is('4', '5') //false

```

#### 6、新增Object.assign()方法

```
对象拼接
var fang = { 'name': 'sb' };
var sz = { 'c': { 'www': 111 } }
Object.assign(fang, sz)
// {name: "sb", c: {…}}c: {www: 111}www: 111__proto__: Objectname: "sb"__proto__: Object

```

#### 7、解构

```
let obj = { a: 1, b: [111, 222] };
const {a} = obj;
console.log(a);//1
这种解构方法 常用于 React 中的获取state状态。
在我们REACT 里面经常用到props传值，那么肯定用到解构这玩意儿
class Parent extends React.Component {
    render() {
        const {a = 3, b = 3} = this.props
        return <h1>{a}-{b}</h1>
    }
}
ReactDOM.render(
    <Parent a="1" b="2" />,
    document.getElementById('root')
);
//在浏览器渲染 1-2，默认值是 3-3，但是因为传递了新的props进来，执行了解构赋值之后a和b更新了。

对象再深也不怕了
var obj = {
    a: {
        b: {
            c: {
                d: '藏得够深了'
            }
        }
    }
}
var {a: {b: {c}}} = obj
console.log(c.d)
// VM739: 11 藏得够深了

解构数组
let arr = [1, 2, 3]

//解构前2个元素
const [a, b] = arr
console.log(a, b) //1 2

//解构中间的元素
const [, b,] = arr
console.log(b) // 2

//更进一步了解 数组解构
let a = '我是老A';
let ary = [1, 2, 3];
[a] = ary;
console.log(a);//1 重新赋值了。
// 使用解构变换数组
let a = 11, b = 22;
[a, b] = [b, a];
console.log(a, b)//22 11 竟然变换了
// 嵌套数组解构
let ary = [1, [1, 2, 3], 4];
let [a, [, b]] = ary;
console.log(a, b)//1,2
//不定元素解构三个点代表了所有元素
ary = [1, 2, 3, 4];
let [...a] = ary;
console.log(a);//[1,2,3,4];
let obj = {
    a: { id: 1 }, b: [22, 11]
}
const {a: {id}, b: [...ary]} = obj;
console.log(id, ary);
// 解构参数
function ajax(url, options) {
    const {timeout = 0, jsonp = true} = options;
}
ajax('baidu.com', { timeout: 1000, jsonp: false });//'baidu.com' 1000,false;
```

#### 8、Map Set 我们都称之为集合

```
let set = new Set();
set.add('haha');
set.add(Symbol('huhu'));
console.log(set);
set.has('huhu')//false;
set.has('haha')//true;
// set循环
for (let [value, key] of set) {
    console.log(value, key)
}
set.forEach((value, key) => {
    console.log(value, key)
})
// set 来实现数组去重。。。
const ary = [1, 1, 1, 3, 3, 3, 44, 55, 0, '3', '3']
let sets = new Set(ary);
console.log(sets);
// Set(6) {1, 3, 44, 55, 0, …}

let set = new Set();
set.add(1); set.add(2);
set.add('1'); set.add('2');
console.log(Array.from(set))
//(4) [1, 2, "1", "2"]
// 经典数组去重方法
const arr = [1, 1, 'haha', 'haha', null, null]
let set = new Set(arr);
console.log(Array.from(set)) // [1, 'haha', null]
console.log([...set]) // [1, 'haha', null]

let map = new Map();
map.set('name', '房帅中');
map.set('id', '130*******');
map
// Map(2) {"name" => "房帅中", "id" => "130***1992****" }
// size
// :
// (...)
// __proto__
// :
// Map
// [[Entries]]
// :
// Array(2)
// 0
// :
// { "name" => "房帅中" }
// 1
// :
// { "id" => "130*******" }
// length :
// 2
// es5构造函数写法
function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    return this.name;
}
let p1 = new Person();
console.log(p1.sayName());
// 而es6 引入了class类 学过java的应该知道声明类的方式‘
class Person {
    constructor(name) {
        this.name = name//私有属性
    }
    sayName() {
        return this.name;
    }
}
let p2 = new Person('房小帅啊');
console.log(p2.sayName());//房小帅啊
// 类声明和函数声明的区别和特点
// 1、函数声明可以被提升，类声明不能提升。
// 2、类声明中的代码自动强行运行在严格模式下。
// 3、类中的所有方法都是不可枚举的，而自定义类型中，可以通过Object.defineProperty()手工指定不可枚举属性。
// 4、每个类都有一个[[construct]]的方法。
// 5、只能使用new来调用类的构造函数。
// 6、不能在类中修改类名。

// 类声明方式
//声明式
class B {
    constructor() { }
}

//匿名表达式
let A = class {
    constructor() { }
}

//命名表达式，B可以在外部使用，而B1只能在内部使用
let B = class B1 {
    constructor() { }
}

```

#### 9、改进数组方法

```
Array.of(); Array.from();//Array.of()是创建一个新数组，而Array.from()是将类数组转换成数组
const a = new Array(2);
const b = new Array('44');
console.log(a, b)// [empty × 2]length: 2__proto__: Array(0) ["44"]这样导致a 的内容不正确；
// 正确使用 Array.of(2)
let cc = Array.of(2);
console.log(cc) //=> [2];
// Array.from()用法酱类数组转为数组
function test(a, b) {
    let arr = Array.from(arguments)
    console.log(arr)
}
test(1, 2) //[1, 2]
// Array.from(a,b)传入两个参数，第二个参数作为第一个参数的转换
function test(a, b) {
    let arr = Array.from(arguments, value => value + 2)
    console.log(arr)
}
test(1, 2) //[3, 4]
// Array.from还可以设置第三个参数，指定this。
function test() {
    return Array.from(new Set(...arguments))
}
const s = test([1, "2", 3, 3, "2"])
console.log(s) // [1,"2",3]
// 给数组添加新方法
find(), findIndex(), fill(), copyWithin();
// find()方法
//找到 符合条件的并返回。
const arr = [1, 2, 3, 4, 5, '4'];
arr.find(n => typeof n === 'string')
//找到 符合条件的index并返回
const arr = [1, "2", 3, 3, "2"]
console.log(arr.findIndex(n => typeof n === "string"));//1
// fill()用新元素替换掉数组内的元素，可以指定替换下标范围
arr.fill(value, start, end);
const arr = [1, 2, 3]
console.log(arr.fill(4)) // [4, 4, 4] 不指定开始和结束，全部替换

const arr1 = [1, 2, 3]
console.log(arr1.fill(4, 1)) // [1, 4, 4] 指定开始位置，从开始位置全部替换

const arr2 = [1, 2, 3]
console.log(arr2.fill(4, 0, 2)) // [4, 4, 3] 指定开始和结束位置，替换当前范围的元素
// copyWithin()选择数组的某个下标，从该位置开始复制数组元素，默认从0 开始复制，也可以指定要复制的元素范围。
arr2.copyWithin(target, start, end);
arr2.copyWithin(3, 1);

```

#### 10、类模块

类模块定义

```
class My extends React.Components {

}

```

模块导出导入

```
// 模块导出
export const obj = { a: 1 }
// 函数模块
export const sum = (a, b) => {
    return a + b;
}	
// 类模块导出
export class MyClass extends React.Components {
    // ...
}
// 模块引用
import { obj, my } from './**.js';
// obj.a 使用
// 全部模块导入
import * as all from './**.js';
//all.obj,all.sun 使用
// 默认模块
function sum(a, b) {
    return a + b;
}
export default sum;
// 导入 import sum from './**.js';
// react 中 import React from 'react'; Vue 中 <script>import sum from './**.js'</script>
// 修改模块导入导出名
// 1. 导出时候修改
function sum(a, b) {
    return a + b
}
export { sum as add }

import { add } from './xx.js'
add(1, 2);
// 导入时修改
function sum(a, b) {
    return a + b
}
export default sum;

import { sum as add } from './xx.js'
add(1, 2);
// 无绑定导入
let a = 1; const PI = '3.1415';
// 导入的时候
import './**.js';
console.log(a, PI);

```

## axios方法解析
### 一、安装 
[axios](https://www.npmjs.com/package/axios)
```
1、 利用npm安装npm install axios --save
2、 利用bower安装bower install axios --save
3、 直接利用cdn引入<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

```

axios兼容性：

![axios](/Users/brucefang/Downloads/react教程img/axios.jpeg)

### 二、举个例子

1、发送 get请求

```
//通过给定的ID来发送请求
axios.get('/user?ID=12345')
  .then(function(response){
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  });
//以上请求也可以通过这种方式来发送
axios.get('/user',{
  params:{
    ID:12345
  }
})
.then(function(response){
  console.log(response);
})
.catch(function(err){
  console.log(err);
});
```

### 2、 发送一个`POST`请求

```
axios.post('/user',{
  firstName:'Fred',
  lastName:'Flintstone'
})
.then(function(res){
  console.log(res);
})
.catch(function(err){
  console.log(err);
});

```

#### 3、 一次性并发多个请求

```
function getUserAccount(){
  return axios.get('/user/12345');
}
function getUserPermissions(){
  return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(),getUserPermissions()])
  .then(axios.spread(function(acct,perms){
    //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
  }))
```

### 三、axios的API

1、 `axios(config)`

```
//发送一个`POST`请求
axios({
    method:"POST",
    url:'/user/12345',
    data:{
        firstName:"Fred",
        lastName:"Flintstone"
    }
});
```

2、 `axios(url[,config])`

```
//发送一个`GET`请求（默认的请求方式）
axios('/user/12345');

```

### （二）、  请求方式的别名，这里对所有已经支持的请求方式都提供了方便的别名

```
axios.request(config);

axios.get(url[,config]);

axios.delete(url[,config]);

axios.head(url[,config]);

axios.post(url[,data[,config]]);

axios.put(url[,data[,config]])

axios.patch(url[,data[,config]])

```

- 注意：当我们在使用别名方法的时候，`url,method,data`这几个参数不需要在配置中声明

### （三）、 并发请求（concurrency）,即是帮助处理并发请求的辅助函数

```
//iterable是一个可以迭代的参数如数组等
axios.all(iterable)
//callback要等到所有请求都完成才会执行
axios.spread(callback)

```

### （四）、创建一个`axios`实例，并且可以自定义其配置

1、 `axios.create([config])`

```
var instance = axios.create({
  baseURL:"https://some-domain.com/api/",
  timeout:1000,
  headers: {'X-Custom-Header':'foobar'}
});

```

2、 实例的方法

一下是实例方法，注意已经定义的配置将和利用create创建的实例的配置合并

```
axios#request(config)

axios#get(url[,config])

axios#delete(url[,config])

axios#head(url[,config])

axios#post(url[,data[,config]])

axios#put(url[,data[,config]])

axios#patch(url[,data[,config]])

```

### 四、请求的配置（request config）

- 以下就是请求的配置选项，只有`url`选项是必须的，如果`method`选项未定义，那么它默认是以`GET`的方式发出请求

```
{
  //`url`是请求的服务器地址
  url:'/user',
  //`method`是请求资源的方式
  method:'get'//default
  //如果`url`不是绝对地址，那么`baseURL`将会加到`url`的前面
  //当`url`是相对地址的时候，设置`baseURL`会非常的方便
  baseURL:'https://some-domain.com/api/',
  //`transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动
  //该选项只适用于以下请求方式：`put/post/patch`
  //数组里面的最后一个函数必须返回一个字符串、-一个`ArrayBuffer`或者`Stream`
  transformRequest:[function(data){
    //在这里根据自己的需求改变数据
    return data;
  }],
  //`transformResponse`选项允许我们在数据传送到`then/catch`方法之前对数据进行改动
  transformResponse:[function(data){
    //在这里根据自己的需求改变数据
    return data;
  }],
  //`headers`选项是需要被发送的自定义请求头信息
  headers: {'X-Requested-With':'XMLHttpRequest'},
  //`params`选项是要随请求一起发送的请求参数----一般链接在URL后面
  //他的类型必须是一个纯对象或者是URLSearchParams对象
  params: {
    ID:12345
  },
  //`paramsSerializer`是一个可选的函数，起作用是让参数（params）序列化
  //例如(https://www.npmjs.com/package/qs,http://api.jquery.com/jquery.param)
  paramsSerializer: function(params){
    return Qs.stringify(params,{arrayFormat:'brackets'})
  },
  //`data`选项是作为一个请求体而需要被发送的数据
  //该选项只适用于方法：`put/post/patch`
  //当没有设置`transformRequest`选项时dada必须是以下几种类型之一
  //string/plain/object/ArrayBuffer/ArrayBufferView/URLSearchParams
  //仅仅浏览器：FormData/File/Bold
  //仅node:Stream
  data {
    firstName:"Fred"
  },
  //`timeout`选项定义了请求发出的延迟毫秒数
  //如果请求花费的时间超过延迟的时间，那么请求会被终止

  timeout:1000,
  //`withCredentails`选项表明了是否是跨域请求
  
  withCredentials:false,//default
  //`adapter`适配器选项允许自定义处理请求，这会使得测试变得方便
  //返回一个promise,并提供验证返回
  adapter: function(config){
    /*..........*/
  },
  //`auth`表明HTTP基础的认证应该被使用，并提供证书
  //这会设置一个authorization头（header）,并覆盖你在header设置的Authorization头信息
  auth: {
    username:"zhangsan",
    password: "s00sdkf"
  },
  //返回数据的格式
  //其可选项是arraybuffer,blob,document,json,text,stream
  responseType:'json',//default
  //
  xsrfCookieName: 'XSRF-TOKEN',//default
  xsrfHeaderName:'X-XSRF-TOKEN',//default
  //`onUploadProgress`上传进度事件
  onUploadProgress:function(progressEvent){
    //下载进度的事件
onDownloadProgress:function(progressEvent){
}
  },
  //相应内容的最大值
  maxContentLength:2000,
  //`validateStatus`定义了是否根据http相应状态码，来resolve或者reject promise
  //如果`validateStatus`返回true(或者设置为`null`或者`undefined`),那么promise的状态将会是resolved,否则其状态就是rejected
  validateStatus:function(status){
    return status >= 200 && status <300;//default
  },
  //`maxRedirects`定义了在nodejs中重定向的最大数量
  maxRedirects: 5,//default
  //`httpAgent/httpsAgent`定义了当发送http/https请求要用到的自定义代理
  //keeyAlive在选项中没有被默认激活
  httpAgent: new http.Agent({keeyAlive:true}),
  httpsAgent: new https.Agent({keeyAlive:true}),
  //proxy定义了主机名字和端口号，
  //`auth`表明http基本认证应该与proxy代理链接，并提供证书
  //这将会设置一个`Proxy-Authorization` header,并且会覆盖掉已经存在的`Proxy-Authorization`  header
  proxy: {
    host:'127.0.0.1',
    port: 9000,
    auth: {
      username:'skda',
      password:'radsd'
    }
  },
  //`cancelToken`定义了一个用于取消请求的cancel token
  //详见cancelation部分
  cancelToken: new cancelToken(function(cancel){

  })
}

```

### 五、请求返回的内容

```
{

  data:{},
  status:200,
  //从服务器返回的http状态文本
  statusText:'OK',
  //响应头信息
  headers: {},
  //`config`是在请求的时候的一些配置信息
  config: {}
}

```

- 你可以这样来获取响应信息

```
axios.get('/user/12345')
  .then(function(res){
    console.log(res.data);
    console.log(res.status);
    console.log(res.statusText);
    console.log(res.headers);
    console.log(res.config);
  })

```

### 六、默认配置

- 你可以设置默认配置，对所有请求都有效

1、 全局默认配置

```
axios.defaults.baseURL = 'http://api.exmple.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

```

2、 自定义的实例默认设置

```
//当创建实例的时候配置默认配置
var instance = axios.create({
    baseURL: 'https://api.example.com'
});

//当实例创建时候修改配置
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

```

3、 配置中的有优先级

- config配置将会以优先级别来合并，顺序是lib/defauts.js中的默认配置，然后是实例中的默认配置，最后是请求中的config参数的配置，越往后等级越高，后面的会覆盖前面的例子。

```
//创建一个实例的时候会使用libray目录中的默认配置
//在这里timeout配置的值为0，来自于libray的默认值
var instance = axios.create();
//回覆盖掉library的默认值
//现在所有的请求都要等2.5S之后才会发出
instance.defaults.timeout = 2500;
//这里的timeout回覆盖之前的2.5S变成5s
instance.get('/longRequest',{
  timeout: 5000
});

```

### 七、拦截器

- 你可以在请求、响应在到达`then/catch`之前拦截他们

```
//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  return res;
},function(err){
  //Do something with response error
  return Promise.reject(error);
})



```

2、取消拦截器

```
var myInterceptor = axios.interceptor.request.use(function(){/*....*/});
axios.interceptors.request.eject(myInterceptor);

```

3、 给自定义的axios实例添加拦截器

```
var instance = axios.create();
instance.interceptors.request.use(function(){})

```

### 八、错误处理

```
axios.get('/user/12345')
  .catch(function(error){
    if(error.response){
      //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.header);
    }else {
      //一些错误是在设置请求的时候触发
      console.log('Error',error.message);
    }
    console.log(error.config);
  });

```

### 九、取消

- 你可以通过一个`cancel token`来取消一个请求

1. 你可以通过`CancelToken.source`工厂函数来创建一个`cancel token`

```
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345',{
  cancelToken: source.token
}).catch(function(thrown){
  if(axios.isCancel(thrown)){
    console.log('Request canceled',thrown.message);
  }else {
    //handle error
  }
});

//取消请求（信息的参数可以设置的）
source.cance("操作被用户取消");


```

1. 你可以给cancelToken构造函数传递一个executor function来创建一个cancel token:

```
var cancelToken = axios.CancelToken;
var cance;
axios.get('/user/12345',{
  cancelToken: new CancelToken(function(c){
    //这个executor函数接受一个cancel function作为参数
    cancel = c;
  })
})
//取消请求
cancel();
```

## Babel课程 以及介绍

### 定义：

#### Babel 是一个通用的多用途 JavaScript 编译器（Babel is a JavaScript compiler.）。通过 Babel 你可以使用（并创建）下一代的 JavaScript，以及下一代的 JavaScript 工具。

作为一种语言，JavaScript 在不断发展，新的标准／提案和新的特性层出不穷。 在得到广泛普及之前，Babel 能够让你提前（甚至数年）使用它们。

Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本。 这一过程叫做“源码到源码”编译， 也被称为转换编译（transpiling，是一个自造合成词，即转换＋编译。以下也简称为转译）。

babel 能够将ES6语法 转义为 ES5或者浏览器识别语法

```
例子 const myfunc = n => n * n;

转义为 ：var myfunc = function myfunc(n) { return n * n; };
```

不过 Babel 的用途并不止于此，它支持语法扩展，能支持像 React 所用的 JSX 语法，同时还支持用于静态类型检查的流式语法（Flow Syntax）。

// 更重要的是，Babel 的一切都是简单的插件，谁都可以创建自己的插件，利用 Babel 的全部威力去做任何事情。

// 再进一步，Babel 自身被分解成了数个核心模块，任何人都可以利用它们来创建下一代的 JavaScript 工具。

// 已经有很多人都这样做了，围绕着 Babel 涌现出了非常大规模和多样化的生态系统。 在这本手册中，我将介绍如何使用 Babel 的内建工具以及一些来自于社区的非常有用的东西。

### 安装babel

```
babel-cli
npm install --global babel-cli
```

### 安装完毕 我们开始编译我们的第一个文件

babel my-file.js

```
这样将 编译后的结果直接输出在终端使用 --out-file 或者 -o 可以将结果写入到指定的文件

babel example.js --out-file compiled.js或者babel example.js -o compiled.js

```





#### 如果我们想将整个目录编译成新的目录 可以使用 --out-dir 或者-d

```
babel src --out-dir lib

babel src -d lib
```

## fetch-jsonp之跨域请求

### fetch-jsonp 概述

[fetch-jsonp](https://www.npmjs.com/package/fetch-jsonp)

安装 nam install fetch-jsonp;

### 兼容IE

IE8/9/10/11 does not support [ES6 Promise](https://tc39.github.io/ecma262/#sec-promise-constructor), run this to polyfill the global environment at the beginning of your application.

```
require('es6-promise').polyfill();
```

### 使用方法

JSONP only supports GET method, same as `fetch-jsonp`.

### 简单的方式获取JSONP

```
fetchJsonp('/users.jsonp')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### 集JSONP回调参数名称，默认是“回调”

```
fetchJsonp('/users.jsonp', {
    jsonpCallback: 'custom_callback',
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### 集JSONP回调函数名称，默认的是一个json_prefix随机数

```
fetchJsonp('/users.jsonp', {
    jsonpCallbackFunction: 'function_name_of_jsonp_response'
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### JSONP请求超时设置，默认是5000ms

```
fetchJsonp('/users.jsonp', {
    timeout: 3000,
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

## git 常用命令

### 查看git状态

```
git status
```

### 快照的内容写入缓存区

```
git add 文件路径或者 git add . 提交全部文件
```

 ### 将缓存区内容添加到仓库中

```
git commit -m '备注'
```

### 取消已缓存区的内容

```
git reset HEAD
```

### 查看版本号

```
git onreset --hard
```

### 删除文件

```
git rm readme.md
```

### 配置别名方便使用

```
$ git config --global alias.st status
$ git config --global alias.ci commit
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

### 分支管理

创建分支

```
git branch mybranch
```

### 切换分支

```
git checkout mybranch
```

### 创建分支并且切换

```
git checkout -b mybranch
```

### 删除分支

```
git branch -d mybranch
```

### 把分支push到远端仓库

```
git push origin mybranch
```

### 更新本地仓库至最新改动

```
git pull origin master
```

也可以使用fetch 和rebase 来进行分支更新

```
git fetch origin 或者git rebase origin/master
```

### 撤销和修改 版本回退

```
git checkout --filename
```

git log 拿到版本号

```
git reset --hard 版本号回退到制定版本
```


## shall命令

### 去往目录

```
cd 子目录路径
cd ../ 上一个文件夹
cd ../../ 上上文件夹
```

### 创建文件夹

```
mkdir 文件夹名字 如：touch myapp
```

### 创建文件

```
touch 文件名称以及类型 如：touch handle.js
```

### 显示详细列表

```
ls -l
```

### 显示所有

```
ls -a
```

### 显示所有文件文件夹

```
ls -R
```

### 显示文件夹 * 和目录

```
ls -F
```

### 显示当前路径

```
pwd
```

### 显示文件内容

```
cat handle.js
```

### vim 编辑器

```
命令状态：

j,k,h,l:上下左右
0： 行首
$: 行尾
i,I :插入命令，i 在当前光标处插入 I 行首插入
a,A:追加命令，a 在当前光标后追加，A 在行末追加
o,O:打开命令，o 在当前行下打开一行，O在当前行上插入一行
r,R :替换命令，r 替换当前光标处字符，R从光标处开始替换
数字s: 替换指定数量字符
x: 删除光标处字符
dd: 删除当前行
d0: 删除光标前半行
d$: 删除光标后半行
ctrl+f :后翻页
ctrl+b:前翻页
G : 文件尾
数字G: 数字所指定行
/string 查找字符串
n 继续查找
N 反向继续查找
% 查找对应括号
u 取消上次操作
ex命令状态
：0 文件首
：1,5 copy 7 块拷贝
：1，5 del 块删除
：1，5 move 7 块移动
：1，$s/string1/string2/g 全文件查找string1并替换为string2
：wq! 存盘退出
```



