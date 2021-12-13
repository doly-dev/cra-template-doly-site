---
title: 环境变量
order: 6
group:
  title: 文档
  order: 1
nav:
  title: 文档
  path: /docs
  order: 1
---

# 环境变量

在 `config/env.js` 中配置不同运行环境的变量，使用 [env-cmd](https://github.com/toddbluhm/env-cmd) 设置方式。

以下是常用的环境变量：

```
PUBLIC_URL         # 静态资源基础路径
REACT_APP_ENV      # 应用运行环境 dev test prod
REACT_APP_API      # 接口基础路径
```

更多内置环境变量，请查阅 [Advanced Configuration](https://create-react-app.dev/docs/advanced-configuration/) 。如果需要自定义环境变量，请使用 `REACT_APP_*` 命名。

项目中通过 `process.env.*` 访问：

```typescript
console.log(process.env.REACT_APP_ENV);
```

## 区分不同环境的接口地址

`src/utils/request.ts` 中可以看到如下代码：

```
baseURL: process.env.REACT_APP_API
```

在开发环境中，使用的接口可能是本地 mock `""`，在生产构建用的是 `http://prod.api.example.com/` 。

## 开发环境打印信息

只在开发环境中打印信息到控制台。

```typescript
if (process.env.REACT_APP_ENV === 'dev') {
  // console.log(something);
}
```
