---
title: Introduction
order: 1
group:
  title: Documents
  order: 1
nav:
  title: Documents
  path: /docs
  order: 1
---

# Introduction

Based on [Create React App](https://create-react-app.dev/) + [craco](https://github.com/gsoft-inc/craco) extension of scaffolding, to quickly build `React` a single-page application.

## Characteristic

- Use TypeScript to develop, provide type definition file
- Complete directory structure, more standardized project code organization
- Multi runtime configuration, preset `dev` `test` `prod` environment
- With `mock` and `proxy` the front and rear, so that the separated end of the FBI and the development of more efficient
- Support `*.less` `*.module.less`
- Built-in routing component supports page switching animation

## What is used for data management?

There is no integrated data management library in the scaffolding, you can choose freely, or you can look at [third-party library recommendations](/en-US/docs/third) .

If the project is a small basic data management library can not directly use `useState` `useReducer` can be.

It is recommended to use [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) ，[refer to the example-integrated MST](/en-US/docs/example-mst) .

## Why choose CRA extension?

In the past, some build tools and scaffolding were made internally, such as [doly-cli](https://www.npmjs.com/package/doly-cli) and [ale-cli](https://www.npmjs.com/package/ale-cli), but later they didn't have the time and energy to maintain them.

- Tools/scaffolding are not unified, and the update and maintenance are not timely
- Most simple projects do not need to support SSR
- I don’t want to be based on a big and comprehensive tool like umijs
- ...

The final adoption `React` official scaffold extension, community activists, upgrade and maintenance.

> The scaffolding does not support SSR. If you need to implement SSR, [Next.js](https://www.nextjs.cn/) recommended .

## Compatibility

> [Supported Browsers and Features](https://create-react-app.dev/docs/supported-browsers-features/#supported-language-features)

By default, the generated project supports all modern browsers.

If you need a polyfill to support Internet Explorer 9, 10, and 11, please use [react-app-polyfill](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill) .
