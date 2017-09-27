## 安装与环境

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
