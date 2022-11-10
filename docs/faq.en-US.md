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

## How to jump pages in non-component modules?

Use directly `src/router.tsx` :

```typescript
import router from '@/router';

// util function
function xxx() {
  router.navigate('/list');
}
```

## error message `Property 'encodeLocation' is missing in type 'HashHistory' but required in type 'History'.`

If you use a project earlier than react-router-dom@6.4, you may receive the following error after reinstalling dependencies:

![faq-react-router-dom6.4-error-tip.jpg](./images/faq-react-router-dom6.4-error-tip.jpg)

This is because the react-router@6.4 version removes the history dependency and adds the RouterProvider.

package.json lock 'react-router-dom@~6.3.0' dependent version.

## How to turn off the route switching animation?

`src/index.tsx` The `AnimatedRoutes` component settings `animated={false}`

```typescript
<AnimatedRoutes
  // ...
  animated={false}
/>
```

## Load on demand `antd@4`?

Install dependencies `babel-plugin-import`

```bash
yarn add babel-plugin-import --dev
```

Modify file `config/config.js` configuration

```javascript
// ...
babel: {
  plugins: [
    ...whenProd(() => [['transform-remove-console', { exclude: ['error', 'warn'] }]], []),
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd']
  ];
}
```

## How to elegantly implement login verification for the pre-login project?

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
