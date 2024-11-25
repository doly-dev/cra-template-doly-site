---
title: AnimatedRoutes
order: 21
group:
  title: Built-in components
  order: 2
nav:
  title: Documents
  path: /docs
  order: 1
---

# AnimatedRoutes - route

> Routing `src/router.tsx` is configured in .

## characteristic

- use package [`react-router-dom@6`](https://reactrouter.com/)
- Support routing switching animation, please use the `PageContainer` package

## API

| parameter | illustrate                         | type            | Defaults |
| --------- | ---------------------------------- | --------------- | -------- |
| routes    | routing configuration              | `RouteObject[]` | -        |
| animated  | Turn off page transition animation | `boolean`       | `true`   |

### RouteObject

```typescript
// import { RouteObject } from 'react-router-dom';

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
}
```

## common problem

### How to jump pages in non-component modules?

Use directly `src/router.tsx` :

```typescript
import router from '@/router';

// util function
function xxx() {
  router.navigate('/list');
}
```
