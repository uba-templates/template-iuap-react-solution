
## 概述

### 初心

我们为什么要做这个整体解决方案。

- 第一点，现在前端生态很好，各种框架和类库层出不穷，质量和易用性也是参差不齐。对于每一个项目，复杂的前端选型过程带给我们沉重的负担。

- 第二点，当我们好不容易做好了技术选型，又要花很多时间来拼凑他们，并且需要沉淀很长时间，踩很多的坑，来得到一个比较好的实践。

- 第三点，现在前端工程日益复杂，目前主流的方案，都需要依赖于webpack或是其他工具来辅助开发。配置开发工程已经很需要耗时耗力了，
在上线时，还需要更深入的了解这些工具，来优化我们的工具配置和代码。

这些内容都耗费了我们大量的心力和时间。所以这里将我们在项目中的最佳实践，分享出来，做一个整体技术方案，介绍给大家。

### 整体介绍

tinper-react是基于react库及周边技术搭建的整体复杂应用解决方案。集成了react，redux，axios，react-router，webpack等开源技术。
并根据大量项目的实践，得出的一套最佳解决方案。帮助开发者快速搭建前端项目，又快又好地开发前端业务。

首先是开发工具，webpack是一个很好很强大的工具，我们根据项目中的应用，加装了一些配置。封装成uba开发工具，帮助开发者快速生成项目，
无忧开发，调试，打包及优化。然后是UI层，我们封装了很多的UI组件库tinper-bee，方便快速开发页面。对于复杂应用，我们使用了mirror这个
开源的数据管理框架，将复杂的数据管理，路由操作，通过简单的api和使用方式提供给开发者，让开发者清晰简单的完成复杂应用的开发和管理。

tinper-react的整体技术方案，包含了：

- [uba开发工具](https://github.com/iuap-design/tinper-uba)
- [tinper-beeUI组件库](http://bee.tinper.org/)
- [mirror数据管理框架](https://github.com/mirrorjs/mirror)

**uba**

`uba`采用微内核、多插件开发，它基于 `webpack` 封装的 `cli` 命令行工具，为了解决目前前端快速开发不足而打造，
提供一站式项目脚手架、最佳实践初始化、本地服务调试、数据模拟、远程代理、资源编译、静态产出、性能优化等功能。
`uba`是一个前端开发工具，可以提供多种开发场景。 核心开发人员会在远端最佳实践仓库
[uba-templates](https://github.com/uba-templates) 进行更新和维护，当然也可以根据所需的样式和功能提供不同的模板。
可以给使用开发者提供轻量、简单、便捷的开发体验，让开发者从复杂的配置中脱离出来，这些复杂而又不易初学者学习的内容，
就交给我`uba`来解决吧！

**tinper-bee**

tinper-bee 是基于 iuap design设计规范封装的 react 组件库，包含丰富的基础组件和应用组件，
支持组件的灵活调用和扩展，助力快速进行应用的组件化开发。并且我们提供适用于企业级应用的表单，
表格和grid组件，满足您大量数据的处理操作展示和复杂交互需求。

**mirror**

Mirror是基于redux的react数据管理框架，用极少数的 API 封装所有繁琐甚至重复的工作，
提供一种简洁高效的更高级抽象，同时保持原有的开发模式。

### 学习指导

使用这套解决方案，你需要有一些基本的知识储备：

- [react](https://discountry.github.io/react/)
- [react-router v4](http://reacttraining.cn/web/guides/quick-start)
- [axios](https://github.com/mzabriskie/axios)


## 快速上手

### 基本开发环境

- `node.js` 软件版本需要大于`6.x`以上即可，[点击下载](https://nodejs.org/en/)对应的包安装。
- `npm`建议大于`3.x`以上即可。

### 工具的安装

- 外网情况下使用`npm`安装全局使用
```bash
$ npm install uba -g      #全局安装uba
```
- 公司内网下使用ynpm来安装
```bash
$ npm install ynpm-tool -g  #安装集团内网ynpm到全局
$ ynpm install uba -g       #安装uba全局，后面下载npm包慢也可以使用ynpm install来安装依赖包
```

### 检测uba是否安装成功

```bash
$ uba
```
当出现正常的操作提示帮助表示成功安装如下：
```bash

  Usage: uba <command> [options]


  Command:

    install		v0.0.17
    init		v0.0.51
    plugin		v0.0.7
    server		v0.0.22
    build		v0.0.5

  Options:

    -h, --help     output usage information
    -v, --version  output the version number

```

### 初始化在线工程

首先浏览在线所有可用的脚手架工程，便于选择需要的继续。
```bash
$ uba init          #查看远端的uba-templates可用工程
```
此时正确请求到远端数据后返回数据如下：

```bash
Available official templates:
? Please select:
❯ template-iuap-react-solution - Iuap React整体解决方案脚手架
  template-moli - template-moli
  template-react-multiple-pages - React多页应用脚手架
  template-react-single-pages - React单页应用脚手架
  template-tinper-bee-admin - 采用tinper-bee组件库所构建的管理系统
```

选择`template-iuap-react-solution`工程，也就是`Iuap React`整体解决方案脚手架

选择该项目后，按回车确认选择，接着会提示输入工程实践的名字，默认为`uba-boilerplate`
```bash
boilerplate name : (uba-boilerplate) iuap-react
```
输入一个合法的文件夹名字后回车，然后会看到创建刚才输入的名字为文件夹，并且会提示正在下载。
```bash
Downloading template-iuap-react-solution please wait.
Boilerplate iuap-react done.
```
接着会提示，是否要自动帮助你安装所依赖的npm包文件，按回车继续安装。如果不安装，后面可以自行去安装，使用cnpm或ynpm安装都可以。这里选择默认的npm安装。

### 启动开发服务

首先进入到我们的项目目录(初始化输入的文件夹名字)，然后运行下面的命令即可。
```bash
$ cd iuap-react       #进入项目目录

$ npm run dev         #启动开发服务，也可以运行全局的命令 uba server
```
稍等片刻就会自动打开默认的浏览器访问到该项目的。

### 构建静态资源

当我们的开发业务完成后，需要产出最终优化过的资源文件，也就是打包部署的部分，通过下面命令简单的执行。

```bash
$ npm run build       #执行构建打包操作，或者使用全局命令 uba build
```
通过简单的一条命令就可以执行构建等一系列的优化操作，uba.config.js里面已经按照最优的配置去运行整个任务。
```bash
[version]:0.0.5
[uba]: Operation now, please wait
clean-webpack-plugin: /Users/kvkens/test/uba-multiple/iuap-react/dist has been removed.

Version: webpack 2.7.0
Time: 25407ms
                          Asset       Size  Chunks                    Chunk Names
              logo.c545af77.png    25.6 kB          [emitted]
    app.48d65830eb421a4a2bfd.js    1.15 MB       0  [emitted]  [big]  app
vendors.48d65830eb421a4a2bfd.js    1.53 kB       1  [emitted]         vendors
   app.48d65830eb421a4a2bfd.css    3.03 kB       0  [emitted]         app
                    favicon.png    25.6 kB          [emitted]
                     index.html  826 bytes          [emitted]

[uba]: uba build success!
```
运行完毕后会在当前的目录下看到`dist`产出的文件夹结构，里面就是我们要部署到线上的资源工程。通过build后的日志也可以看出来webpack处理的详细信息。

## 目录介绍
目录介绍及目录规范

### 项目目录

的截图，目录的含义

### 业务目录

都有哪些目录，各自放哪些资源，如何划分及说明

## Step By Step

### 添加路由
### 添加页面
### 划分组件
### 定义数据模型
### 连接数据模型和组件
### 发送请求
### mock数据
### 其他功能介绍（包含环境变量，测试及其他uba）

## 与后端对接联调

方案说明

## 开发规范

[我们的前端规范](https://github.com/iuap-design/YY-Code-Guide)

- 沟通

第一个建议是沟通，做过了这么多项目，发现良好的沟通，最能显著提高开发效率，要多与协作的前端沟通，有好的实践一起分享，
有通用的功能或组件一起复用。多于UE沟通，能减少很多UI的返工的工作。多于后端沟通，能加快前后台联调的效率。所以，
我们在开发中，要尽量找机会多沟通。

- 规范

项目协作开发，要在开始时，制定好一致的开发规范，目录规范，代码规范。对于项目维护，重构都有很大的好处。

- 持续改进

在开发过程中，要不断审计自己的代码。寻找可以改进的地方，不停的优化和重构自己的代码。

## 兼容性说明

目前，此方案只兼容到ie9,对于再低版本的浏览器，我们建议这样的用户进行浏览器升级。

对于ie，你需要引入promise兼容方案：
```
<script src="//design.yonyoucloud.com/static/yonyouyun/es6-promise.auto.min.js"></script>
```
