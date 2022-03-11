---
title: 常见问题
order: 41
group:
  title: 其他
  order: 4
nav:
  title: 文档
  path: /docs
  order: 1
---

# 常见问题

### 如何在工具模块中使用 history ？

直接使用 `src/utils/history.ts`：

```typescript
import routerHistory from '@/utils/history';

// util function
function xxx() {
  routerHistory.push('/');
}
```

### 如何关闭路由切换动画？

`src/index.tsx` 中的 `Router` 组件设置 `animated={false}`

```typescript
<Router
  // ...
  animated={false}
/>
```

### 按需加载 `antd` ？

安装依赖 `babel-plugin-import`

```bash
yarn add babel-plugin-import --dev
```

修改文件 `config/config.js` 配置

```
// ...
babel: {
  plugins: [
    ...whenProd(() => [['transform-remove-console', { exclude: ['error', 'warn'] }]], []),
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd']
  ]
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

### 怎么实现路由权限？

1. 全局维护一个权限数据，假如使用 `mobx` 建议在 `models/access.ts` 中存放权限表数据，方便全局使用。

2. 路由配置增加 `access` 配置项，并且增加一个没有权限页面（如 403）

**src/components/Router/index.tsx**

```typescript
// ...

export type Access = boolean | ((route: Omit<RouteItem, 'access' | 'component'>) => boolean);
export type RouteItem = {
  // ...
  access?: Access;
};

// ...
export const AnimatedRoute: React.FC<Omit<RouteItem, 'routes'>> = (props) => {
  const {
    path,
    redirect,
    component: C,
    animated = true,
    keepAlive = true,
    keepAliveName,
    keepAliveParamsKey,
    access = true
  } = props;

  if (redirect) {
    return (
      <Route exact path={path}>
        <Redirect from="*" to={redirect} />
      </Route>
    );
  }

  if (!C) {
    return null;
  }

  if ((typeof access === 'function' && !access(omit(props, ['component', 'access']))) || !access) {
    return (
      <Route exact path={path}>
        <Redirect from="*" to='/403' />
      </Route>
    )
  }
  // ...
```

3. 路由配置在需要的页面中添加 `access`

**src/routes.ts**

```typescript
// ...
import type { Access } from '@/components/Router';
import accessModel from '@/models/access';

// 非管理员不能进入内页
const access: Access = (route) => {
  const { userinfo } = accessModel;
  return userinfo.userid === 'admin';
}

const routes: RouteItem[] = [
  {
    path: '/',
    name: '首页',
    component: asyncComponent(() => import('./pages/home'))
  },
  {
    path: 'repos',
    name: '仓库',
    routes: [
      {
        path: 'list',
        name: '仓库列表',
        component: asyncComponent(() => import('./pages/repos/List')),
        access
      },
      {
        path: 'detail/:name',
        name: '仓库详情',
        component: asyncComponent(() => import('./pages/repos/Detail')),
        access
      }
    ]
  },
  {
    path: '403',
    name: '无权限',
    component: asyncComponent(() => import('./pages/403'))
  }
  {
    path: '404',
    name: '页面不存在',
    component: asyncComponent(() => import('./pages/404'))
  }
];
```
