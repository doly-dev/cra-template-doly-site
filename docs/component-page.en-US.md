---
title: PageContainer
order: 22
group:
  title: Built-in components
  order: 2
nav:
  title: Documents
  path: /docs
  order: 1
---

# PageContainer

The page is wrapped in this container as much as possible. The default style is to set the absolute positioning and background color to achieve the route switching animation effect.

## API

### PageContainer

| parameter       | illustrate                                           | type       | defaults |
| --------------- | ---------------------------------------------------- | ---------- | -------- |
| lowerThreshold  | How far from the bottom to trigger `onScrollToLower` | `number`   | `100`    |
| onScrollToLower | Scroll to the bottom to trigger                      | `()=>void` | -        |

In addition to the above properties, and the rest `div` the same.

### PageContext

Page context, which is convenient for child components to obtain page-related information, such as the page container dom.

The following are the default values, which can be customized according to business scenarios:

```typescript
type ContextType = {
  // page container
  container: React.MutableRefObject<HTMLDivElement | null>;
};
```

---

Example: Click inside a component in the middle of the page to set the scroll bar position

_Component_

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

_Page_

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
