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

`Suspense` `lazy` Handle asynchronous component loading with React .

```typescript
import asyncComponent from '@/components/asyncComponent';

const HomePage = asyncComponent ( ( ) => import ( './pages/home' ) ) ;

functionApp(){
  return(
    <div className="app">
      <HomePage />
    </div>
  ) ;
}
```
