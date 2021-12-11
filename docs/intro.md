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

如果是小项目基本可以不用数据管理库，直接使用 `useState` `useReducer` 就可以。

这里推荐使用 [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) ，[参考示例 - 集成 MST](/docs/example-mst) 。

## 为什么选择 CRA 扩展？

以前内部也做了一些构建工具和脚手架，比如 [doly-cli](https://www.npmjs.com/package/doly-cli)、[ale-cli](https://www.npmjs.com/package/ale-cli)，后来都没有时间精力维护。

- 工具/脚手架不统一、更新维护不及时
- 大部分简单项目不需要支持 SSR
- 不想基于 umijs 这样大而全的工具
- ...

最终采用 `React` 官方脚手架扩展，社区活跃，升级维护方便。

> 该脚手架不支持 SSR 。如果需要实现 SSR ，推荐 [Next.js](https://www.nextjs.cn/) 。

## 兼容性

> [Supported Browsers and Features](https://create-react-app.dev/docs/supported-browsers-features/#supported-language-features)

默认情况下，生成的项目支持所有现代浏览器。

如果要支持 Internet Explorer 9、10 和 11 需要 polyfill，请使用 [react-app-polyfill](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill) 。

## Git hooks

Git hooks 管理由 [yorkie](https://www.npmjs.com/package/yorkie) 和 [lint-staged](https://www.npmjs.com/package/lint-staged) 提供。

### 规范代码格式

在你每次提交某些内容时，都会对暂存文件运行 `eslint`、`stylelint`、`prettier` 命令，从而防止您提交格式错误的代码。

### 规范提交信息

由 [@commitlint/cli](https://github.com/conventional-changelog/commitlint) 和 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) 规范 git 提交信息。在你使用 git 提交信息不符合规范时，会有错误提示。

- git 提交信息格式

```bash
type(scope?): subject
```

- 正确示范

```bash
chore: run tests on travis ci
fix(server): send cors headers
feat(blog): add comment section
```

- **type**

| 值       | 说明                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| build    | 影响构建系统或外部依赖项的更新（示例范围：gulp, broccoli, npm）                  |
| ci       | 对 CI 配置文件和脚本的更改(例如 scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | 其他不修改 src 或测试文件的更改                                                  |
| docs     | 只改变文档                                                                       |
| feat     | 新功能                                                                           |
| fix      | bug 修复                                                                         |
| perf     | 改进性能的代码更改                                                               |
| refactor | 既不修复 bug 也不添加新功能的代码更改                                            |
| revert   | 还原以前的提交                                                                   |
| style    | 不影响代码含义的更改(white-space、格式、缺少分号等)                              |
| test     | 添加缺失的测试或纠正现有的测试                                                   |

推荐使用 `yarn commit` 或 `npx cz` ，通过交互式命令填写规范的提交信息。
