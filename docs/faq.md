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
