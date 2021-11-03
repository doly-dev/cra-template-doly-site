---
title: 集成 MST
order: 32
group:
  title: 示例
  order: 3
nav:
  title: 文档
  path: /docs
  order: 1
---

# MST

> 学习文档：[MobX State Tree 数据组件化开发](https://juejin.cn/post/6844903772972384263)

[示例地址](https://github.com/doly-dev/cra-template-doly-examples/tree/main/examples/mst)

集成 [mobx-state-tree] 数据管理，参考 [React and MST]

## 安装依赖

```bash
yarn add mobx mobx-react-lite mobx-state-tree
```

## 使用步骤

1. 将 [https://github.com/ecklf/react-hooks-mobx-state-tree/tree/main/src/models](https://github.com/ecklf/react-hooks-mobx-state-tree/tree/main/src/models) 复制到 `src/models`下，部分类型错误需要调整，直接使用快速修复（[VSCode ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)）。

**注意以下缓存部分，如果没有用到，请酌情删除！**

```typescript
// ...

// 实例 model 时，如果有缓存数据就使用
// 需要注意退出登录清除、进入页面更新数据
const data = localStorage.getItem('rootState');
if (data) {
  const json = JSON.parse(data);
  if (RootModel.is(json)) {
    initialState = RootModel.create(json);
  }
}

// ...

// 监听数据变动缓存数据
onSnapshot(rootStore, snapshot => {
  console.log('Snapshot: ', snapshot);
  localStorage.setItem('rootState', JSON.stringify(snapshot));
});

// ...
```

2. 修改 `src/App.tsx`

```typescript
import { Provider, rootStore } from '@/models/Root';
// ...

function App() {
  return (
    <Provider value={rootStore}>
      <div className="App">// ...</div>
    </Provider>
  );
}
```

## 枚举类型管理

> - [Support Enums and union type for enumeration](https://github.com/mobxjs/mobx-state-tree/issues/605)

注意区分数字枚举和字符串枚举。

- 服务接口定义的枚举数据

**services/types/enum.ts**

```typescript
// 是否添加水印标记
// 0-不添加 1-添加
export enum EWaterFlag {
  No,
  Yes
}

// 颜色
// red-红 green-绿 blue-蓝
export enum EColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
```

- MST 中的枚举

**models/enum.ts**

```typescript
import { types } from 'mobx-state-box';
import { EWaterFlag, EColor } from '@/services/types/enum';

// 是否添加水印标记（数字枚举）
// 0-不添加 1-添加
export const UWaterFlag = types.union(types.literal(EWaterFlag.No), types.literal(EWaterFlag.Yes));

// 颜色（字符串枚举）
// red-红 green-绿 blue-蓝
export const UColor = types.enumeration<EColor>(Object.values(EColor));
```

[mobx-state-tree]: https://mobx-state-tree.js.org/
[react and mst]: https://mobx-state-tree.js.org/concepts/using-react
