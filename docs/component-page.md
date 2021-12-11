---
title: PageContainer
order: 22
group:
  title: 内置组件
  order: 2
nav:
  title: 文档
  path: /docs
  order: 1
---

# PageContainer - 页面容器

页面尽量都使用该容器进行包裹，默认样式设置绝对定位和背景颜色，是为了实现路由切换动画效果。

## API

### PageContainer

| 参数            | 说明                                 | 类型       | 默认值 |
| --------------- | ------------------------------------ | ---------- | ------ |
| lowerThreshold  | 离底部多少距离触发 `onScrollToLower` | `number`   | `100`  |
| onScrollToLower | 滚动至底部触发                       | `()=>void` | -      |

除了上面的属性，其余和 `div` 一样。

### PageContext

页面上下文，便于子组件获取页面相关信息，如页面容器 dom。

以下为默认值，可根据业务场景自定义：

```typescript
type ContextType = {
  // 页面容器
  container: React.MutableRefObject<HTMLDivElement | null>;
};
```

---

示例：页面中间某个组件内部点击操作要设置滚动条位置

_组件_

```typescript
import * as React from 'react';
import { PageContext } from '@/components/PageContainer';

const SomeComponent = () => {
  const { container } = React.useContext(PageContext);

  const handleClick = React.useCallback(() => {
    if (container.current) {
      container.current.scrollTop = 0;
    }
  }, []);

  return <div onClick={handleClick}>滚动顶部</div>;
};
```

_页面_

```typescript
import PageContainer from '@/components/PageContainer';
import SomeComponent from '@/components/SomeComponent';

const SomePage = () => {
  return (
    <PageContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SomeComponent />
    </PageContainer>
  );
};
```