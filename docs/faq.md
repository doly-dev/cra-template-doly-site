---
title: 常见问题
order: 41
group:
  title: 其他
  order: 4
nav:
  title: 文档
  path: /docs
  order: 1
---

# 常见问题

### 为什么默认安装不集成 git hook 工具 ？

如果默认集成 git hook 工具，会导致脚手架初始化时，git 提交失败。[#8498](https://github.com/facebook/create-react-app/issues/8498)、[#11205](https://github.com/facebook/create-react-app/issues/11205)

`commitlint` 配置都已内置，只需在初始化完成后安装 `yorkie` 即可。

```bash
yarn add yorkie --dev

git commit -m "chore: add yorkie"
```

### 如何在工具模块中使用 history ？

直接使用 `src/utils/history.ts`：

```typescript
import routerHistory from '@/utils/history';

// util function
function xxx() {
  routerHistory.push('/');
}
```

### 如何关闭路由切换动画？

`src/index.tsx` 中的 `Router` 组件设置 `animated={false}`

```typescript
<Router
  // ...
  animated={false}
/>
```
