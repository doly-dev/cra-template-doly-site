---
title: 样式和资源
order: 4
group:
  title: 文档
  order: 1
nav:
  title: 文档
  path: /docs
  order: 1
---

# 样式和资源

`src` 目录下使用 `bmp` `gif` `jpg` `jpeg` `png` 文件，并且小于 `10000 B` 将自动转为 `data URI` 。

你也可以在 `config/env.js` 设置 `IMAGE_INLINE_SIZE_LIMIT` 进行修改。

## 添加样式

样式文件名使用 `*.module.less` 将开启 [CSS Modules] 。

### 使用 CSS Modules

> 强烈推荐，不用考虑 `class` 命名冲突问题。

**Button.module.less**

```css
.button {
  padding: 20px;
}
```

**Button.tsx**

```typescript
import styles from './Button.module.less';

const Button = () => {
  return <div className={styles.button} />;
};
```

### 不使用 CSS Modules

> 不推荐，如果有需要使用全局样式，请在 `src/index.less` 中编写。局部可在 `*.module.less` 中使用 `:global` `:local` 。

**Button.less**

```css
.button {
  padding: 20px;
}
```

**Button.tsx**

```typescript
import './Button.less';

const Button = () => {
  return <div className="button" />;
};
```

## public 文件夹

> 初始化项目后，请根据业务修改 public 目录下的文件

`src` 目录下的资源构建后文件名都会被添加 `hash` 。

```typescript
import logo from './logo.png';

console.log(logo); // logo.84287d09.png

function Header() {
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

`public` 目录下的资源在编译的时候会直接拷贝到 `dist` 目录，所以文件名不会变化。

```typescript
function Header() {
  return <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />;
}

export default Header;
```

你也可以将 `外部引入的脚本` `校验文件` 等资源放在 `public` 文件夹下。

[css modules]: https://github.com/css-modules/css-modules
