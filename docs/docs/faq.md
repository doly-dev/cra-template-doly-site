---
order: 41
group:
  title: 其他
  order: 4
toc: content
---

# 常见问题

## 非组件模块中如何跳转页面？

使用 `src/router.tsx` ：

```typescript
import router from '@/router';

// util function
function xxx() {
  router.navigate('/list');
}
```

## 报错 `Property 'encodeLocation' is missing in type 'HashHistory' but required in type 'History'.`

使用 react-router-dom@6.4 之前版本 的项目，重新安装依赖后，可能会报错如下：

![faq-react-router-dom6.4-error-tip.jpg](../images/faq-react-router-dom6.4-error-tip.jpg)

这是因为react-router@6.4版本去掉了 history 依赖，新增了 RouterProvider 。

package.json 锁定 `react-router-dom@~6.3.0` 依赖版本即可。

## 如何关闭路由切换动画？

`src/index.tsx` 中的 `AnimatedRoutes` 组件设置 `animated={false}`

```typescript
<AnimatedRoutes
  // ...
  animated={false}
/>
```

## 按需加载 `antd@4` ？

安装依赖 `babel-plugin-import`

```bash
yarn add babel-plugin-import --dev
```

修改文件 `config/config.js` 配置

```javascript
// ...
babel: {
  plugins: [
    ...whenProd(() => [['transform-remove-console', { exclude: ['error', 'warn'] }]], []),
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd']
  ];
}
```

### 登录前置的项目如何优雅实现登录验证？

> 该方案适用于登录和当前项目不在同一个项目中，并且需要复杂的 token 转换。
>
> 如果是简单的项目，只需要在 `utils/request.ts` 中处理即可。

假如当前项目必须要登录后才可以进入，建议单独提取一个 `Auth` 组件用于做登录验证。如：

**src/components/Auth/index.tsx**

```typescript
import { tokenChange } from '@/services/common';
import { getToken, setToken, getAccessToken, setAccessToken } from '@/utils/tokenStorage';
import { toLoginPage } from '@/utils/utils';

const Auth = ({ children }) => {
  const [logined, setLogined] = React.useState(false);

  React.useEffect(() => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      const loginToken = getToken(); // 第三方token

      if (loginToken) {
        // 转换当前项目token
        tokenChange().then(res => {
          setAccessToken(res.accessToken);
          setLogined(true);
        });
      } else {
        if (process.env.REACT_APP_ENV === 'dev') {
          // 本地开发
          setToken('252Be844PzHnVqmQ');
          setAccessToken('1zdaf7876546352aflkj');
          setLogined(true);
        } else {
          toLoginPage();
        }
      }
    }
  }, []);

  return <>{logined ? children : null}</>;
};

export default Auth;
```

将 Auth 组件放到项目最外层。

**src/index.tsx**

```typescript
import Auth from '@/components/Auth';
// ...

function App() {
  // ...
  return <Auth>{/*//...*/}</Auth>;
}
```
