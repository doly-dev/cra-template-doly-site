---
title: 快速上手
order: 2
group:
  title: 文档
  order: 1
nav:
  title: 文档
  path: /docs
  order: 1
---

# 快速上手

## 环境准备

- [nodejs](http://nodejs.org/) ≧ 10

## 初始化项目

```bash
yarn create react-app my-app --template doly # 创建一个应用

cd my-app

yarn add husky@4 --dev # 启用 git hook 生效，用于 commitlint

git add .
git commit -m "add husky"
```

> `commitlint` 配置都已内置，只需安装 **`husky@4`** 即可。
>
> 后面代码提交 `git commit -m xxx` 替换为 `yarn commit` 使用交互式生成规范格式的提交信息。

## 目录结构

```
.
├── config
│   ├── env.js               # 环境变量配置
│   ├── config.js            # craco 配置文件
│   ├── proxy.js             # 代理配置，对应环境变量 REACT_APP_ENV
│   ├── theme.js             # 主题配置，支持antd、antd-mobile@2
│   ├── zip.js               # zip 包配置
├── dist                     # 构建结果
├── zip                      # 打包压缩构建结果
├── mock                     # mock 数据
├── public
│   ├── favicon.ico          # favicon
│   ├── index.html           # html
│   ├── logo.png             # logo
│   ├── manifest.json        # 用来告知浏览器关于 PWA 应用信息
├── src
│   ├── assets               # 静态资源，如图片、样式、字体等
│   ├── components           # 组件
│   ├── models               # 数据管理
│   ├── pages                # 页面
│   ├── services             # 后台接口服务
│   ├── utils                # 工具
│   ├── App.tsx              # 应用路由、布局、全局上下文
│   ├── App.less             # 应用样式
│   ├── Index.tsx            # 项目入口文件
│   ├── Index.less           # 全局样式
├── package.json
├── README.md
```

**<mark>请根据业务修改 `public` 下的文件和内容</mark>**

## 启动项目

```bash
yarn start
```

浏览器自动访问 `http://localhost:3000` 。

## 构建

```bash
yarn build
```

打包后的资源在 `dist` 目录。
