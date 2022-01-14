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

Routing `src/routes.ts` configuration.

**characteristic**

- Page switching animation, use [`PageContainer`](/en-US/docs/component-page) wrap page
- Support integration `keep-alive` , including page activation and inactivation hook methods,[refer to keep-alive example](/en-US/docs/example-keep-alive)
- Convenient to upgrade later `react-router-dom@6` `history@5`

## API

```typescript
type RouteItem = {
  path: string;
  redirect?: string;
  name?: string;
  component?: ReturnType<typeof asyncComponent> | React.ComponentType<RouteChildrenProps<any>>;
  routes?: RouteItem[];
  animated?: boolean;
};
```

| parameter | illustrate | type | defaults |
| --- | --- | --- | --- |
| routes | Routing configuration | `RouteItem[]` | - |
| animated | Whether to open the page switching animation or not to turn |
| off the switching animation, the positioning layout will not be used | `boolean` | `true` |
| noMatchPath | Redirect to this page when the route is not matched, generally point to 404 page | `string` | - |
| onRouteChange | Triggered when routing initialization and routing changes | `(route?:RouteItem)=>void` | - |

### Use history in non-component modules

can be used `src/utils/history.ts`:

```typescript
import routerHistory from '@/utils/history';

// util function
function xxx() {
  routerHistory.push('/');
}
```
