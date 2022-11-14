---
title: Environment variable
order: 6
group:
  title: Documents
  order: 1
nav:
  title: Documents
  path: /docs
  order: 1
---

# Environment variable

In `config/env.js` the configuration variables and various operating environments, use of [env-cmd](https://github.com/toddbluhm/env-cmd) arrangement.

The following are the commonly used environment variables:

```text
PUBLIC_URL         # Static resource base path
REACT_APP_ENV      # Application operating environment dev test prod
REACT_APP_API      # Interface basic path
```

For more built-in environment variables, please refer to [Advanced Configuration](https://create-react-app.dev/docs/advanced-configuration/) . If you need a custom environment variables, use the `REACT_APP_*` name.

Project by `process.env.*` accessing:

```typescript
console.log(process.env.REACT_APP_ENV);
```

## Differentiate the interface address of different environments

`src/utils/request.ts` You can see the following code in:

```text
baseURL: process.env.REACT_APP_API
```

In the development environment, the interface used may be a local mock `""`, and in the production build it is `http://prod.api.example.com/` .

## Development environment printing information

Only print information to the console in the development environment.

```typescript
if (process.env.REACT_APP_ENV === 'dev') {
  // console.log(something);
}
```
