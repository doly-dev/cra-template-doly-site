---
title: AsyncComponent
order: 23
group:
  title: Built-in components
  order: 2
toc: content
---

# AsyncComponent - Asynchronous component

`Suspense` `lazy` Handle asynchronous component loading with React, and set page title.

## API

| parameter | illustrate | type | Defaults |
| --- | --- | --- | --- |
| component | Synchronous/asynchronous components | `(() => Promise<{ default: Component<any> }>) \| ReactElement` | - |
| title | page title | `string` | - |
