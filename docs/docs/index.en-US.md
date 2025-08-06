---
order: 1
group:
  title: Documents
  order: 1
toc: content
---

# Introduction

:::warning

Since the cra-template has not been maintained for a long time, it is recommended to use [vite-template-doly](https://github.com/doly-dev/vite-template-doly).

:::

Based on [Create React App](https://create-react-app.dev/) + [craco](https://github.com/gsoft-inc/craco) extension of scaffolding, to quickly build `React` a single-page application.

## Characteristic

- Use TypeScript to develop, provide type definition file
- Complete directory structure, more standardized project code organization
- Multi runtime configuration, preset `dev` `test` `prod` environment
- With `mock` and `proxy` the front and rear, so that the separated end of the FBI and the development of more efficient
- Support `*.less` `*.module.less`
- Built-in routing component supports page switching animation

## What is used for state management?

The scaffolding does not integrate a state management library because most small projects can basically do without one and can directly use `useState`, `useReducer`, and `useContext`.

[State Management Libraries for React Comparison](https://npm-compare.com/jotai,mobx,react-query,recoil,redux,valtio,xstate,zustand).

<!-- It is recommended to use [valtio](https://valtio.pmnd.rs/) . -->

## Why choose CRA extension?

In the past, some build tools and scaffolding were made internally, such as [doly-cli](https://www.npmjs.com/package/doly-cli), but later they didn't have the time and energy to maintain them.

- Tools/scaffolding are not unified, and the update and maintenance are not timely
- Most projects do not need to support SSR
- ...

The final adoption `React` official scaffold extension, upgrade and maintenance.

> The scaffolding does not support SSR. If you need to implement SSR, [Next.js](https://nextjs.org/) recommended .
>
> The official is almost no longer maintained, and it is recommended to use [vite-template-doly](https://github.com/doly-dev/vite-template-doly).

## Compatibility

> [Supported Browsers and Features](https://create-react-app.dev/docs/supported-browsers-features/#supported-language-features)

By default, the generated project supports all modern browsers.

If you need a polyfill to support Internet Explorer 9, 10, and 11, please use [react-app-polyfill](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill) . It also needs to `package.json` be configured `browserslist` in .

Compatible with ie9 Example:

`src/index.tsx`

```typescript
// first line import
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// ...
```

`package.json`

```typescript
{
  "browserslist":{
    "production":[
      // ...
      "ie >= 9"
    ] ,

    // If you need the development environment to be compatible with ie9, set development
    "development":[
      // ...
      "ie >= 9"
    ]
  }
}
```
