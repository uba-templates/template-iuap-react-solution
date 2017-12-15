# Babel课程 以及介绍



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

#### 安装babel

```
babel-cli
npm install --global babel-cli
```

#### 安装完毕 我们开始编译我们的第一个文件

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



