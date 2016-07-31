# AmazeUI - admin

基于[AmazeUI - admin](http://amazeui.org/) 模板。

# bingoJS 2.x

使用[bingoJS 2.x](https://github.com/guless/bingoJS2) 前端MV开始。

## demo

[在线demo](https://guless.github.io/AmazeUI-bjs/index.html)

PS：基于 AmazeUI(amdin) + bingoJS 2.x 实现模块化单页面(SPA)，这里主要演示如何使用bingoJS搭建前端SPA工程，如何定义服务和指令，如果设置route的转发等

## 安装/使用:

遵循以下4个简单的步骤, 就能使用demo

**步骤 1**: Clone 内容
```bash
$ git clone https://github.com/guless/AmazeUI-bjs.git AmazeUI-bjs
```

**步骤 2**: 进入bingoJS2目录
```bash
$ cd AmazeUI-bjs
```

**步骤 3**: Install dependencies
```bash
$ npm install
```

**步骤 4**: 启动demo
```bash
$ npm start
```
### 目录结构:

│  index.html
├─demo
│  │  index.html
│  │  route.js
│  │  
│  ├─api
│  ├─commands
│  ├─modules
│  ├─services
│  └─tmpls
│
└─statics
    ├─AmazeUI
    └─bingo
            

**index.html**：为首页

**demo目录**：演示demo app

**demo/index.html**：demo首页

**demo/route.js**：demo route配置

**demo/api目录**：模板数据加载的josn文件

**demo/commands目录**：指令定义与模板

**demo/modules目录**：业务代码与模板

**demo/services目录**：服务定义

**statics/AmazeUI目录**：AmazeUI 的相关资源



