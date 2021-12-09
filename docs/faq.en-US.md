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
