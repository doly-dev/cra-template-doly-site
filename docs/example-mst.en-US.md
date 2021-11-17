---
title: Integrated MST
order: 32
group:
  title: Example
  order: 3
nav:
  title: Documents
  path: /docs
  order: 1
---

# Integrated MST

> Learning document: [MobX State Tree 数据组件化开发](https://juejin.cn/post/6844903772972384263)

[Example address](https://github.com/doly-dev/cra-template-doly-examples/tree/main/examples/mst)

Integrated [mobx-state-tree] data management, refer to [React and MST] .

## Installation dependencies

```bash
yarn add mobx mobx-react-lite mobx-state-tree
```

## Steps for usage

1. The [https://github.com/ecklf/react-hooks-mobx-state-tree/tree/main/src/models](https://github.com/ecklf/react-hooks-mobx-state-tree/tree/main/src/models) copied to the `src/models` next, some types of errors need to be adjusted directly using the quick fix ([VSCode ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)).

**Pay attention to the following cache part, if not used, please delete it as appropriate!**

```typescript
// ...

// When the model is instanced, use it if there is cached data
// Need to pay attention to log out and log out to clear, enter the page to update data
const data = localStorage.getItem('rootState');
if (data) {
  const json = JSON.parse(data);
  if (RootModel.is(json)) {
    initialState = RootModel.create(json);
  }
}

// ...

// Monitor data changes and cache data
onSnapshot(rootStore, snapshot => {
  console.log('Snapshot: ', snapshot);
  localStorage.setItem('rootState', JSON.stringify(snapshot));
});

// ...
```

2. Revise `src/index.tsx`

```typescript
import { Provider, rootStore } from '@/models/Root';
// ...

function App() {
  return (
    <Provider value={rootStore}>
      <div className="App">{/*...*/}</div>
    </Provider>
  );
}
```

## Enumerated type management

> [Support Enums and union type for enumeration](https://github.com/mobxjs/mobx-state-tree/issues/605)

Note the distinction between number enumeration and string enumeration.

- Enumeration data defined by the service interface

**services/types/enum.ts**

```typescript
// Whether to add watermark
// 0-no 1-yes
export enum EWaterFlag {
  No,
  Yes
}

// colour
export enum EColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
```

- Enumeration in MST

**models/enum.ts**

```typescript
import { types } from 'mobx-state-box';
import { EWaterFlag, EColor } from '@/services/types/enum';

// Whether to add watermark (number enumeration)
// 0-no 1-yes
export const UWaterFlag = types.union(types.literal(EWaterFlag.No), types.literal(EWaterFlag.Yes));

// colour (string enumeration)
export const UColor = types.enumeration<EColor>(Object.values(EColor));
```

[mobx-state-tree]: https://mobx-state-tree.js.org/
[react and mst]: https://mobx-state-tree.js.org/concepts/using-react
