---
title: Getting Started
order: 2
group:
  title: Documents
  order: 1
nav:
  title: Documents
  path: /docs
  order: 1
---

# Getting Started

## Environmental preparation

- [nodejs](http://nodejs.org/) ≧ 14

## Initialize the project

```bash
yarn create react-app my-app --template doly

# or

npx create-react-app my-app --template doly
```

Then, to support `husky` `lint-staged` `eslint` `prettier` `commitlint` run firstly:

```bash
npx husky install
```

## Directory Structure

```text
.
├── config
│   ├── config.js            # craco configuration file
│   ├── env.js               # Environment variable configuration
│   ├── proxy.js             # Proxy configuration, corresponding to the environment variable REACT_APP_ENV
│   ├── zip.js               # zip package configuration
├── dist                     # Build result
├── zip                      # Pack and compress the build result
├── mock                     # mock data
├── public
│   ├── favicon.ico          # favicon
│   ├── index.html           # html
│   ├── logo.png             # logo
│   ├── manifest.json        # Used to inform the browser about PWA application information
├── src
│   ├── assets               # Static resources, such as pictures, styles, fonts, etc.
│   ├── components           # components
│   ├── models               # data management
│   ├── pages                # page
│   ├── services             # Background interface services
│   ├── utils                # tools
│   ├── index.tsx            # Project entry file
│   ├── index.less           # Global style
│   ├── router.tsx           # routing configuration
├── package.json
├── README.md
```

**<mark>Please modify according to business `public` documents and content in</mark>**

## Startup project

```shell
yarn start
```

The browser automatically accesses it `http://localhost:3000` .

## Build

```shell
yarn build
```

Resources in the package `dist` distdirectory.
