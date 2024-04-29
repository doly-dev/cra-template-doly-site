---
title: 集成 keep-alive
order: 33
group:
  title: 示例
  order: 3
nav:
  title: 文档
  path: /docs
  order: 1
---

# 集成 keep-alive

> 参考 [react-activation]

[示例地址](https://github.com/doly-dev/cra-template-doly-examples/tree/main/examples/keep-alive)

## 安装依赖

```bash
yarn add react-activation
```

## 使用步骤

1. `config/config.js` 配置 babel

```diff
babel: {
  plugins: [
    // ...
+    'react-activation/babel'
  ];
}
```

2. `src/index.tsx` 包裹 `AliveScope` 组件

> 注意不能使用 `React.StrictMode`

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

3. 在需要保持状态的组件中使用 `KeepAlive`

如 `src/pages/repos/Detail.tsx`

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

**同时也要在 `src/components/AsyncComponent` 增加页面激活时设置标题**

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

## 常见问题

- [当前缓存页面 useActivate 会执行多次](https://github.com/CJY0208/react-activation/issues/111) - 由 React.StrictMode 影响。查阅 [严格模式](https://zh-hans.reactjs.org/docs/strict-mode.html)
- [用 KeepAlive 包裹的组件中，react-router-dom 无法获取 params](https://github.com/CJY0208/react-activation/issues/43)

## 注意事项

- 如果区分 `登录`/`未登录` 场景，需要在`退出登录`或`登录时`，清除缓存页面。
- 如非必要，尽量不用。

[react-activation]: https://www.npmjs.com/package/react-activation
