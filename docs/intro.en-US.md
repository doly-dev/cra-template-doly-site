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

If you need a polyfill to support Internet Explorer 9, 10, and 11, please use [react-app-polyfill](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill) 。

## Git hooks

Git hook management is provided by [yorkie](https://www.npmjs.com/package/yorkie) and [lint-staged](https://www.npmjs.com/package/lint-staged) .

### Canonical code format

Every time you submit something, will run for the temporary file `eslint`, `stylelint`, `prettiercommand`, thereby preventing the code you submit malformed.

### Standard submission of information

The git submission information is regulated by [@commitlint/cli](https://github.com/conventional-changelog/commitlint) and [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) . When you use git to submit information that does not meet the specifications, there will be an error message.

- git submission information format

```bash
type(scope?): subject
```

- Demonstrate correctly

```bash
chore: run tests on travis ci
fix(server): send cors headers
feat(blog): add comment section
```

- **type**

| 值 | 说明 |
| --- | --- |
| build | Updates affecting the build system or external dependencies (example range: gulp, broccoli, npm) |
| ci | Changes to CI configuration files and scripts (e.g. scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore | Other changes that do not modify src or test files |
| docs | Only change the document |
| feat | new function |
| fix | bug fix |
| perf | Code changes to improve performance |
| refactor | Code changes that neither fix bugs nor add new features |
| revert | Revert previous commit |
| style | Changes that do not affect the meaning of the code (white-space, format, missing semicolon, etc.) |
| test | Add missing tests or correct existing tests |

Recommended `yarn commit` or `npx cz` through interactive command fill in the information submitted specifications.
