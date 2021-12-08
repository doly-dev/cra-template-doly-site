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

### Why does the default installation not integrate the git hook tool?

If the git hook tool is integrated by default, it will cause the git commit to fail when the scaffolding is initialized. [#8498](https://github.com/facebook/create-react-app/issues/8498)、[#11205](https://github.com/facebook/create-react-app/issues/11205)

`commitlint` Configurations have been built, installed just after the initialization is complete `yorkie` you can.

```bash
yarn add yorkie --dev

git commit -m "chore: add yorkie"
```

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
