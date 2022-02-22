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

### 按需加载 `antd` ？

安装依赖 `babel-plugin-import`

```bash
yarn add babel-plugin-import --dev
```

修改文件 `config/config.js` 配置

```
// ...
babel: {
  plugins: [
    ...whenProd(() => [['transform-remove-console', { exclude: ['error', 'warn'] }]], []),
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd']
  ]
}
```
