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

# asyncComponent - Asynchronous component loading

Use [`@loadable/component`](https://www.npmjs.com/package/@loadable/component) handle asynchronous loading assembly.

**characteristic**

- When the component is loading, a friendly loading page is displayed
- When the component fails to load or reports an error, render the degraded UI

## Example

```typescript
import ReactDom from 'react-dom';
import asyncComponent from '@/components/AsyncComponent';

const HomePage = asyncComponent(() => import('./pages/home'));

function App() {
  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

ReactDom.render(<App />, document.querySelect('.root'));
```
