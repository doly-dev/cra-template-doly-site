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

Routing `src/routes.tsx` is configured in .

**characteristic**

- use package [`react-router-dom@6`](https://reactrouter.com/docs/en/v6/api#api-reference)
- Support routing switching animation, please use the `PageContainer` package

## API

| parameter | illustrate                         | type            | Defaults |
| --------- | ---------------------------------- | --------------- | -------- |
| routes    | routing configuration              | `RouteObject[]` | -        |
| animated  | Turn off page transition animation | `boolean`       | `true`   |

## common problem

### Using history in non-component modules

Use directly `src/utils/history.ts` :

```typescript
import myHistory from '@/utils/history';

// util function
function xxx() {
  myHistory.push('/');
}
```
