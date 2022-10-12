---
title: asyncComponent
order: 23
group:
  title: Built-in components
  order: 2
nav:
  title: Documents
  path: /docs
  order: 1
---

# AsyncComponent - Asynchronous component

`Suspense` `lazy` Handle asynchronous component loading with React, and set page title.

## API

| parameter | illustrate             | type                                         | Defaults |
| --------- | ---------------------- | -------------------------------------------- | -------- |
| component | Asynchronous component | `() => Promise<{ default: Component<any> }>` | -        |
| title     | page title             | `string`                                     | -        |
