---
title: freemode
order: 34
group:
  title: Example
  order: 3
nav:
  title: Documents
  path: /docs
  order: 1
---

# freemode

[Example address](https://github.com/doly-dev/cra-template-doly-examples/tree/main/examples/freemode)

In the APP, if some pages require native to provide a drop-down to reload the current webview. We can only use `body` the scroll bar, and pull-down operations in order to prevent conflicts of Android.

Routing increase `freemode` configuration item, the corresponding page is switched off after opening animation, and reset `.router` , and `.page` the style of nodes (`position`、`overflow`), the corresponding page is enabled so that the `body` scroll bar.

## Steps for usage

1. `src/components/Router`

Add `RouterContext.ts`

```typescript
import { createContext } from 'react';

export default createContext<{
  freemode?: boolean;
}>({});
```

Revise `index.tsx`

```typescript
// ...
import classnames from 'classnames';
import RouterContext from './RouterContext';

export { RouterContext };

// ...

export type RouteItem = {
  //...
  freemode?: boolean;
};

// ...

const WrapperRouter: React.FC<RoutesProps> = ({
  routes,
  animated = true,
  noMatchPath,
  onRouteChange
}) => {
  const formattedRoutes = React.useMemo(() => formatRoutes(routes), [routes]);
  const onRouteChangeRef = React.useRef(onRouteChange);
  onRouteChangeRef.current = onRouteChange;
  const [freemode, setFreemode] = React.useState(false);

  React.useEffect(() => {
    // First load and execute onRouteChange
    const match = matchPathInRoutes(formattedRoutes, routerHistory.location.pathname);
    setFreemode(!!match?.freemode);
    onRouteChangeRef.current?.(match);
  }, [formattedRoutes]);

  React.useEffect(() => {
    const unlisten = routerHistory.listen(location => {
      if (!onRouteChangeRef.current) {
        return;
      }

      const match = matchPathInRoutes(formattedRoutes, location.pathname);
      setFreemode(!!match?.freemode);
      onRouteChangeRef.current?.(match);
    });
    return () => {
      unlisten();
    };
  }, [formattedRoutes]);

  return (
    <RouterContext.Provider value={{ freemode }}>
      <Router history={routerHistory}>
        <div className={classnames('router-wrapper', { freemode })}>
          {formattedRoutes.map(route => (
            <AnimatedRoute
              {...route}
              animated={(animated || route.animated) && !freemode && !route.freemode}
              key={route.path}
            />
          ))}
          <WrapperNoMatch routes={formattedRoutes} noMatchPath={noMatchPath} />
        </div>
      </Router>
    </RouterContext.Provider>
  );
};
```

Revise `index.less`

```less
// ...

.router-wrapper.freemode {
  position: static;
  overflow: visible;

  .router {
    position: static;
    overflow: visible;
  }
}
```

2. `src/components/PageContainer`

Revise `index.tsx`

```typescript
// ...
import { RouterContext } from '../Router';
import { getScrollTop, getScrollHeight, getClientHeight } from '@/utils/dom'; // 新增文件

// ...

  const { freemode } = React.useContext(RouterContext);

  React.useEffect(() => {
    const scrollContainer = freemode ? window : innerRef.current;

    if (scrollContainer && typeof scrollTopLowerRef.current === 'function') {
      const handleScroll = () => {
        const sTop = getScrollTop(scrollContainer);
        const sHeight = getScrollHeight(scrollContainer);
        const cHeight = getClientHeight(scrollContainer);
        const realLowerThreshold = lowerThreshold < 0 ? 0 : lowerThreshold;

        if (sHeight - cHeight - sTop <= realLowerThreshold) {
          scrollTopLowerRef.current?.();
        }
      }
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    }
  }, [freemode, lowerThreshold]);

// ...

  <div
    {...restProps}
    className={classnames(styles.page, { freemode }, className)}
    ref={innerRef}
    onScroll={handleScroll}
  >
```

Revise `index.module.less`

```less
.page {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background-color: #f5f5f5;

  &:global {
    &.freemode {
      position: static;
      overflow: visible;
    }
  }
}
```

3. `src/routes.ts`

For example, home page activation `freemode`

```typescript
const routes = [
  {
    path: '/',
    name: '首页',
    component: asyncComponent(() => import('./pages/home')),
    freemode: true
  }
  // ...
];
```
