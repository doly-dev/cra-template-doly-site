---
order: 33
group:
  title: Example
  order: 3
toc: content
---

# Integrated keep-alive

> Refer to [react-activation]

[Example address](https://github.com/doly-dev/cra-template-doly-examples/tree/main/examples/keep-alive)

## Installation dependencies

```bash
yarn add react-activation
```

## Steps for usage

1. `config/config.js` configure babel

```diff
babel: {
  plugins: [
    // ...
+    'react-activation/babel'
  ];
}
```

2. `src/index.tsx` package `AliveScope` component

> Note that `React.StrictMode` cannot be used

```diff
+ import { AliveScope } from 'react-activation';
// ...

function App() {
  return (
    // <React.StrictMode>
+    <AliveScope>
      <RouterProvider router={router} fallbackElement={<PageLoading />} />
+    </AliveScope>
    // </React.StrictMode>
  );
}
// ...
```

3. Use in components that need to maintain state `KeepAlive`

Such as `src/pages/repos/Detail.tsx`

```diff
+ import KeepAlive from 'react-activation';

// ...

+ const WrapperDetailPage = (props: any) => {
+  const { name } = useParams();
+
+  return (
+    <KeepAlive name="detail" id={name}>
+      <DetailPage {...props} />
+    </KeepAlive>
+  );
+ };

- export default DetailPage
+ export default WrapperDetailPage;
```

**But also in the `src/components/AsyncComponent` increase set title page is active**

```diff
+ import { useActivate } from 'react-activation';

// ...

- useEffect(() => {
-  if (title) {
-    document.title = title;
-  }
- }, [title]);

+ useActivate(() => {
+  if (title) {
+    document.title = title;
+  }
+ });
```

## FAQ

- [当前缓存页面 useActivate 会执行多次](https://github.com/CJY0208/react-activation/issues/111) - 由 React.StrictMode 影响。查阅 [严格模式](https://zh-hans.reactjs.org/docs/strict-mode.html)
- [用 KeepAlive 包裹的组件中，react-router-dom 无法获取 params](https://github.com/CJY0208/react-activation/issues/43)

## Precautions

- If you distinguish `Logged in`/`not logged in` scene, you need to clear the cached page in `Log out` or `login`.
- If not necessary, try not to use it.

[react-activation]: https://www.npmjs.com/package/react-activation
