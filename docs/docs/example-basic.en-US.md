---
order: 31
group:
  title: Example
  order: 3
toc: content
---

# Build configuration

[Example address](https://github.com/doly-dev/cra-template-doly-examples/tree/main/examples/basic)

Introduce the build configuration of different application scenarios.

## Application release

By engineering platform release, deployment path has confirmed good when applying application, only the configuration `PUBLIC_URL` can be.

Example: The deployment path of the application application is `webapp/business-product`

- **config/env.js**

```javascript
prod: {
  PUBLIC_URL: "/webapp/business-product/",
  // ...
}
```

In addition, the release engineering platform also need to add `build.sh` files, and other items as this can be.

## Static resources

Custom project path, no strong specification constraints. After the development is completed, the resources are packaged in a zip file and released directly.

> Agreed project path rules: /seashell/{computerSide=website|mobileSide=webapp}/{businessName}/{productName}/index.html

Example: publish a static resource application, deployed `/seashell/webapp/business/product/` under the path

- **config/env.js**

```javascript
prod: {
  PUBLIC_URL: "https://img.example.com/seashell/webapp/business/product/",
  // ...
}
```

- **config/zip.js**

```javascript
pathPrefix = 'seashell/webapp/business/product/';
```

- build

```bash
yarn build
```

- zip

```bash
yarn zip
```

## Sandbox environment or deploy a third-party server

Deployed in a special environment or a third-party server, generally only the static resource path and interface address are different, and everything else is the same as the static resource.

So you only need to add a new build environment configuration.

Example: The above static resources deployed to `sandbox.example.com` domain name, address of the interface `http://sandbox.api.example.com/v1`

- **package.json**

```json
"scripts": {
  "build:sandbox": "env-cmd -r ./config/env.js -e default,sandbox craco build",
}
```

- **config/env.js**

```javascript
sandbox: {
  PUBLIC_URL: "/seashell/webapp/business/product/",
  REACT_APP_API: "http://sandbox.api.example.com/v1",
  REACT_APP_ENV: "sandbox",
  BUILD_PATH: "dist"
},
```

- **config/zip.js**

```javascript
pathPrefix = 'seashell/webapp/business/product/';
```

- build

```bash
yarn build:sandbox
```

- zip

```bash
yarn zip
```
