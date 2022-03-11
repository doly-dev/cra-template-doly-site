---
title: FAQ
order: 41
group:
  title: Other
  order: 4
nav:
  title: Documents
  path: /docs
  order: 1
---

# FAQ

### How to use history in the tool module?

Direct use `src/utils/history.ts` :

```typescript
import routerHistory from '@/utils/history';

// util function
function xxx() {
  routerHistory.push('/');
}
```

### How to turn off the route switching animation?

`src/index.tsx` The `Router` component settings `animated={false}`

```typescript
<Router
  // ...
  animated={false}
/>
```

### Load on demand `antd`?

Install dependencies `babel-plugin-import`

```bash
yarn add babel-plugin-import --dev
```

Modify file `config/config.js` configuration

```
// ...
babel: {
  plugins: [
    ...whenProd(() => [['transform-remove-console', { exclude: ['error', 'warn'] }]], []),
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd']
  ]
}
```

### How to elegantly implement login verification for the pre-login project?

> This scheme is suitable for login and current project which are not in the same project and require complex token conversion.
>
> If it's a simple project, just handle it `utils/request.ts` in.

If the current project must be logged in before entering, it is recommended to extract a separate Authcomponent for login verification. Such as:

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
      const loginToken = getToken(); // Third way token

      if (loginToken) {
        // Convert the current project token
        tokenChange().then(res => {
          setAccessToken(res.accessToken);
          setLogined(true);
        });
      } else {
        if (process.env.REACT_APP_ENV === 'dev') {
          // local development
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

Put the Auth component in the outermost layer of the project.

**src/index.tsx**

```typescript
import Auth from '@/components/Auth';
// ...

function App() {
  // ...
  return <Auth>{/*//...*/}</Auth>;
}
```

### How to achieve routing permissions?

1. Maintain a permission data globally. If it is used, it is `mobx` recommended `models/access.ts` to store permission table data in , which is convenient for global use.

2. `access` Add a configuration item to the routing configuration , and add a page without permission (such as 403)

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

3. Routing configuration is added in the required page `access`

**src/routes.ts**

```typescript
// ...
import type { Access } from '@/components/Router';
import accessModel from '@/models/access';

// Non-administrators cannot enter the inner page
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
