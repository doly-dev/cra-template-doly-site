---
title: AsyncComponent
order: 23
group:
  title: 内置组件
  order: 2
nav:
  title: 文档
  path: /docs
  order: 1
---

# AsyncComponent - 异步组件

使用 react 的 `Suspense` `lazy` 处理异步组件加载，设置页面标题。

## API

| 参数      | 说明     | 类型                                         | 默认值 |
| --------- | -------- | -------------------------------------------- | ------ |
| component | 异步组件 | `() => Promise<{ default: Component<any> }>` | -      |
| title     | 页面标题 | `string`                                     | -      |
