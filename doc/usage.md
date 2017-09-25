# 开始使用


### 开发工具介绍

- [`uba`](https://github.com/iuap-design/tinper-uba)是一款前端开发调试解决方案工具，它配有`webpack`核心开发调试能力，为了解决目前现有的前端开发配置复杂、快速开发上手慢而打造的一款工具。
- 采用微内核、多插件的开发使用方式。可以组合使用，也可以单独功能使用，还可以通过生成器来编写自己的插件。
- 它支持项目初始化、开发调试、数据模拟、代理转发、资源构建、静态服务、配置整合、与后端无缝交互切换等一系列便捷操作。
- 提供了多种在线的基本脚手架和最佳实践场景，可以快速帮助你初始化一系列的复杂工作环境开发。[`浏览在线仓库`](https://github.com/uba-templates)


### 如何使用

#### 初始化在线工程

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

#### 启动开发服务

首先进入到我们的项目目录(初始化输入的文件夹名字)，然后运行下面的命令即可。
```bash
$ cd iuap-react       #进入项目目录

$ npm run dev         #启动开发服务，也可以运行全局的命令 uba server
```
稍等片刻就会自动打开默认的浏览器访问到该项目的。

#### 构建静态资源

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


### 开发一个新功能


