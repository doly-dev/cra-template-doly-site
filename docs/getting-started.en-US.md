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

- [nodejs](http://nodejs.org/) ≧ 10

## Initialize the project

```bash
yarn create react-app my-app --template doly # Create an application

cd my-app

yarn add yorkie --dev # Enable git hook to take effect, for commitlint

git add .
git commit -m "chore: add yorkie"
```

> `commitlint` Configurations have been built, simply install **`yorkie`** can be.
>
> Submitted after the code `git commit -m xxx` replacement for the `yarn commit` submission of information using interactive generate canonical format.

## Directory Structure

```
.
├── config
│   ├── env.js               # Environment variable configuration
│   ├── config.js            # craco configuration file
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
│   ├── routes.ts            # routing configuration
├── package.json
├── README.md
```

**<mark>Please modify according to business `public` documents and content in</mark>**

## Startup project

```bash
yarn start
```

The browser automatically accesses it `http://localhost:3000` .

## Build

```bash
yarn build
```

Resources in the package `dist` distdirectory.
