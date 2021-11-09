---
title: Router
order: 21
group:
  title: Built-in components
  order: 2
nav:
  title: Documents
  path: /docs
  order: 1
---

# Router

Routing `src/App.tsx` configuration.

**characteristic**

- Page switching animation, use [`PageContainer`](/en-US/docs/component-page) wrap page
- Support integration `keep-alive` , including page activation and inactivation hook methods,[refer to keep-alive example](/en-US/docs/example-keep-alive)
- Convenient to upgrade later `react-router-dom@6` `history@5`

## API

```typescript
type RouteItem = {
  path: string;
  name?: string;
  component?: ReturnType<typeof asyncComponent> | React.ComponentType<RouteChildrenProps<any>>;
  routes?: RouteItem[];
  animated?: boolean;
};
```

| parameter | illustrate | type | defaults |
| --- | --- | --- | --- |
| routes | Routing configuration | `RouteItem[]` | - |
| animated | Whether to open the page switching animation | `boolean` | `true` |
| noMatchPath | Redirect to this page when the route is not matched, generally point to 404 page | `string` | - |
| onRouteChange | Triggered when routing initialization and routing changes | `(route?:RouteItem)=>void` | - |

### Use history in non-component modules

`Router` The module is exposed `routerHistory` and can be used directly:

```typescript
import { routerHistory } from '@/components/Router';

// util function
function xxx() {
  routerHistory.push('/');
}
```