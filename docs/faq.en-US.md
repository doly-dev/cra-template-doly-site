---
title: FAQ
order: 41
group:
  title: Other
  order: 4
nav:
  title: Documents
  path: /docs
  order: 1
---

# FAQ

### Why does the default installation not integrate husky?

> [#8498](https://github.com/facebook/create-react-app/issues/8498)、[#11205](https://github.com/facebook/create-react-app/issues/11205)

If the default integration `husky` will lead to scaffolding initialization, git commit fails.

`commitlint` Configurations have been built, installed just after the initialization is complete `husky@4` you can.

```bash
yarn add husky@4 --dev
```

_Note that the `husky` v4 version is used here , and the higher version is not used because there may be compatibility issues._

### If antd-mobile@2 is not used, what files need to be deleted?

First of all, there is no need to use the confirmation page to `antd-mobile` the component.

Then `config/config.js` delete the following configuration:

```typescript
babel: {
  plugins: [['import', { libraryName: 'antd-mobile', style: true }, 'antd-mobile']];
}
```

Finally uninstall dependencies:

```bash
yarn remove antd-mobile
```

### How to configure antd or antd-mobile@2 theme?

Directly modify the `config/theme.js` configuration can be.

refer to:

- [antd-mobile custom theme]
- [antd custom theme]

### How to use history in the tool module?

`Router` The components are exposed `routerHistory` and can be used directly.

```typescript
import { routerHistory } from '@/components/Router';
```

### Multiple modules refer to the same style file, how to extract their common styles?

> Since it is rare in development that the same style file is referenced in multiple modules, this configuration is not integrated into the scaffolding by default.

`config/config.js` The `cacheGroups` next Add Configuration:

```javascript
cacheGroups: {
  // ...
  commonStyle: {
    name: 'common',      // common style name
    test: /\.(c|le)ss$/, // selection rules
    minSize: 100,        // minimum size, unit byte
    chunks: 'all'        // Which chunks participate in the split. all stands for all modules, async stands for asynchronously loaded modules, initial stands for modules that can be obtained during initialization
  },
  // ...
}
```

[antd custom theme]: https://ant-design.gitee.io/docs/react/customize-theme-cn
[antd-mobile custom theme]: https://antd-mobile-doc-v2.gitee.io/docs/react/customize-theme-cn
