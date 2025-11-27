---
title: AnimatedRoutes
order: 21
group:
  title: Built-in components
  order: 2
toc: content
---

# AnimatedRoutes - route

> Routing `src/router.tsx` is configured in .

## characteristic

- use package [`react-router-dom@6`](https://reactrouter.com/)
- Support routing switching animation, please use the `PageContainer` package

## API

| parameter | illustrate            | type            | Defaults |
| --------- | --------------------- | --------------- | -------- |
| routes    | routing configuration | `RouteObject[]` | -        |

### RouteObject

reference: [RouteObject](https://reactrouter.com/api/components/Route)

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
