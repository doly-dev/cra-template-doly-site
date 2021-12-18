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
yarn create react-app my-app --template doly
```

或

```bash
npx create-react-app my-app --template doly
```

## 目录结构

```
.
├── config
│   ├── config.js            # craco 配置文件
│   ├── env.js               # 环境变量配置
│   ├── proxy.js             # 代理配置，对应环境变量 REACT_APP_ENV
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
│   ├── index.tsx            # 项目入口文件
│   ├── index.less           # 全局样式
│   ├── routes.ts            # 路由配置
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
