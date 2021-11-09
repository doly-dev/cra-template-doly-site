---
title: 常见问题
order: 41
group:
  title: 其他
  order: 4
nav:
  title: 文档
  path: /docs
  order: 1
---

# 常见问题

### 为什么默认安装不集成 husky ？

> [#8498](https://github.com/facebook/create-react-app/issues/8498)、[#11205](https://github.com/facebook/create-react-app/issues/11205)

如果默认集成 `husky` 会导致脚手架初始化时，git 提交失败。

`commitlint` 配置都已内置，只需在初始化完成后安装 `husky@4` 即可。

```bash
yarn add husky@4 --dev
```

_注意这里用的是 `husky` v4 版本，不使用更高版本是因为可能存在兼容问题。_

### 如果不使用 antd-mobile@2，需要删除哪些文件？

首先，需确认页面中没有使用到 `antd-mobile` 组件。

然后在 `config/config.js` 中删除以下配置：

```typescript
babel: {
  plugins: [['import', { libraryName: 'antd-mobile', style: true }, 'antd-mobile']];
}
```

最后卸载依赖：

```bash
yarn remove antd-mobile
```

### 如何配置 antd 或 antd-mobile@2 主题？

直接修改 `config/theme.js` 配置即可。

参考：

- [antd-mobile 定制主题]
- [antd 定制主题]

### 如何在工具模块中使用 history ？

`Router` 组件中有暴露 `routerHistory` ，可直接使用。

```typescript
import { routerHistory } from '@/components/Router';
```

### 多个模块引用同一个样式文件，如何提取它们的公共样式？

> 由于开发中极少情况会在多个模块中引用同一个样式文件的情况，所以该配置默认不集成到脚手架中。

`config/config.js` 的 `cacheGroups` 下添加配置：

```javascript
cacheGroups: {
  // ...
  commonStyle: {
    name: 'common',      // 公共样式名称
    test: /\.(c|le)ss$/, // 选择规则
    minSize: 100,        // 最小大小，单位字节
    chunks: 'all'        // 哪些chunk参与拆分。all代表所有模块，async代表异步加载的模块, initial代表初始化时就能获取的模块
  },
  // ...
}
```

[antd 定制主题]: https://ant-design.gitee.io/docs/react/customize-theme-cn
[antd-mobile 定制主题]: https://antd-mobile-doc-v2.gitee.io/docs/react/customize-theme-cn
