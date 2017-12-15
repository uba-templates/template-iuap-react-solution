# ES6语法

#### 什么是ES

```
ES的全称是ECMAScript。1996 11 ,JavaScript 的创造 者 Netscape 公司,决定将 JavaScript 提交给国际标准化组织 ECMA,希望这种语 能够成为国际标准。
```

#### 什么是ES6？为什么这么火？

```
ECMAScript 6.0(以下简称 ES6)是 JavaScript 语 的下 代标准,已经在 2015 6 正式发 布 。它的 标,是使得 JavaScript 语 可以 来编写复杂的 型应 程序,成为企业级开发语 。 
2009年开始ECMAScript 5.1版本发布后，其实就开始定制6.0版本了。因为这个版本引入的语法功能太多，且制定过程当中,还有 很多组织和个 断提交新功能。事情很快就变得清楚 , 可 能在 个版本 包括所有将要引 的功能。常规的做法是先发 布 6.0 版,过 段时间再发 6.1 版,然后是 6.2 版、6.3 版等等 ；
```

#### ES6以及ES7+ 增加了哪些新特性？有哪些好用的语法？

##### 1、关于var、let、const 关键字特性和使用方法；

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

##### 2、const和let的异同点 

```
**相同点：**const和let都是在当前块内有效，执行到块外会被销毁，也不存在变量提升（TDZ），不能重复声明。
**不同点：**const不能再赋值，let声明的变量可以重复赋值。
const a = 1；a=2；此处会报错，会告诉你a是一个常量不可改变。
```

##### 3、字符串新增的操作

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

##### 4、ES6之函数

```
function b(num = 6, callback) {
    // num = 6很显然是默认参数；若传值则用传递的参数否则就用 6；
    callback(num * num)
}
b(10, data => { console.log(data) })

```

##### 不定参数使用 ...

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

##### 箭头函数

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

##### 5、ES6新增 Object.is()方法

```
NaN 和NaN 比较
Object.is(NaN, NaN) //true
正+0 和 -0 比较
Object.is(-0, +0) //false
数字5 和 字符串 5 比较
Object.is(5, '5') //false
Object.is('4', '5') //false

```

##### 6、新增Object.assign()方法

```
对象拼接
var fang = { 'name': 'sb' };
var sz = { 'c': { 'www': 111 } }
Object.assign(fang, sz)
// {name: "sb", c: {…}}c: {www: 111}www: 111__proto__: Objectname: "sb"__proto__: Object

```

##### 7、解构

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

##### 8、Map Set 我们都称之为集合

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

##### 9、改进数组方法

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

##### 10、类模块

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

