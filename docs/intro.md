---
title: 介绍
order: 1
group:
  title: 文档
  order: 1
nav:
  title: 文档
  path: /docs
  order: 1
---

# 介绍

基于 [Create React App](https://create-react-app.dev/) + [craco](https://github.com/gsoft-inc/craco) 扩展的脚手架，快速构建 `React` 单页应用。

## 特性

- 使用 TypeScript 开发，提供类型定义文件
- 完整的目录结构，项目代码组织更规范
- 多运行环境配置，预置 `dev` `test` `prod` 环境
- 配备 `mock` 和 `proxy` ，使前后端分离的开发和联调更有效率
- 支持 `*.less` `*.module.less`
- 内置路由组件支持页面切换动画

## 数据管理要用什么？

脚手架内没有集成数据管理库，你可以自由选择，也可以看看[第三方库推荐](/docs/third)。

如果是小项目基本可以不用数据管理库，直接使用 `useState` `useReducer` `useContext` 就可以。

这里推荐使用 [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) ，[参考示例 - 集成 MST](/docs/example-mst) 。

## 为什么选择 CRA 扩展？

以前内部也做了一些构建工具和脚手架，比如 [doly-cli](https://www.npmjs.com/package/doly-cli)、[ale-cli](https://www.npmjs.com/package/ale-cli)，后来都没有时间精力维护。

- 工具/脚手架不统一、更新维护不及时
- 大部分项目不需要支持 SSR
- ...

最终采用 `React` 官方脚手架扩展，升级维护方便。

> 该脚手架不支持 SSR 。如果需要实现 SSR ，推荐 [Next.js](https://www.nextjs.cn/) 或 [Remix](https://remix.run/) 。

## 兼容性

> [Supported Browsers and Features](https://create-react-app.dev/docs/supported-browsers-features/#supported-language-features)

默认情况下，生成的项目支持所有现代浏览器。

如果要支持 Internet Explorer 9、10 和 11 需要 polyfill，请使用 [react-app-polyfill](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill) 。另外还需要在 `package.json` 中配置 `browserslist` 。

兼容 ie9 示例:

`src/index.tsx`

```typescript
// 第一行引入
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// ...
```

`package.json`

```typescript
{
  "browserslist": {
    "production": [
      // ...
      "ie >= 9"
    ],

    // 如果你需要开发环境也兼容ie9就设置 development
    "development": [
      // ...
      "ie >= 9"
    ]
  }
}
```
