---
title: Build and deploy
order: 6
group:
  title: Documents
  order: 1
nav:
  title: Documents
  path: /docs
  order: 1
---

# Build and deploy

## Build

When the project is developed, you only need to run the following command to package the application:

```bash
yarn build
```

Resources in the package `dist` directory.

## Analysis build package

1. In `config/env.js` the configuration of the production environment `GENERATE_SOURCEMAP` Notes

```javascript
// GENERATE_SOURCEMAP: "false",
```

<mark>After the analysis is complete, remember to remove the comment</mark>

2. Rebuild

```bash
yarn build
```

3. Run analysis script

```bash
yarn analyze
```

![analyze](./images/analyze.jpg)

## Deploy

- Check `config/env.js` in a production environment `PUBLIC_URL` `REACT_APP_API` is configured correctly.
- After checking to build `dist/index.html` resources to see the introduction of the path is correct.

If the above is no problem, just the `dist` resource directory are copied to the web server.

---

If you need to zip the file and send it to the server, you can use:

```bash
yarn zip
```

You can also in the `config/zip.js` configuration of compression options.
