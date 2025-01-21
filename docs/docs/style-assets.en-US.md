---
order: 4
group:
  title: Documents
  order: 1
toc: content
---

# Styles and resources

`src` Use directory `bmp` `gif` `jpg` `jpeg` `png` files, and less `10000 B` will automatically be converted `data URI` .

You can also in the `config/env.js` set `IMAGE_INLINE_SIZE_LIMIT` to be modified.

## Add style

Style file name to use `*.module.less` to open the [CSS Modules] .

### Use CSS Modules

> Highly recommended, regardless of `class` naming conflicts.

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

### Don't use CSS Modules

> Not recommended if there is a need to use global style, in `src/index.less` in writing. Local can use `:global` `:local` in `*.module.less`.

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

## public folder

> After initializing the project, please modify the files in the public directory according to your business

`src` After the resources in the directory are built, the file names will be added `hash` 。

```typescript
import logo from './logo.png';

console.log(logo); // logo.84287d09.png

function Header() {
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

`public` Resource directory at compile time will be copied directly to the `dist` directory, the file name will not change.

```typescript
function Header() {
  return <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />;
}

export default Header;
```

You may also be `external scripts` `check file` other resources on the `public` folder.

[css modules]: https://github.com/css-modules/css-modules
