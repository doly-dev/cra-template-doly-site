---
title: FAQ
order: 41
group:
  title: Other
  order: 4
nav:
  title: Documents
  path: /docs
  order: 1
---

# FAQ

### How to use history in the tool module?

Direct use `src/utils/history.ts` :

```typescript
import routerHistory from '@/utils/history';

// util function
function xxx() {
  routerHistory.push('/');
}
```

### How to turn off the route switching animation?

`src/index.tsx` The `Router` component settings `animated={false}`

```typescript
<Router
  // ...
  animated={false}
/>
```

### Load on demand `antd`?

Install dependencies `babel-plugin-import`

```bash
yarn add babel-plugin-import --dev
```

Modify file `config/config.js` configuration

```
// ...
babel: {
  plugins: [
    ...whenProd(() => [['transform-remove-console', { exclude: ['error', 'warn'] }]], []),
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd']
  ]
}
```
