---
title: mock 和 proxy
order: 5
group:
  title: 文档
  order: 1
nav:
  title: 文档
  path: /docs
  order: 1
---

# mock 和 proxy

## Mock 模拟请求

前后端分离开发的过程中，刚开始前端和后端就要约定好接口，然后分别进行开发。

在这时候，前端需要模拟接口的请求和响应，以求达到保真开发的目的。而且在调试一些问题时，可以伪造边界数据进行验证。

你只需要在 `mock` 目录下，新建一个 `*.js` 文件，支持以下方式：

```javascript
module.export = {
  'GET /api/user': {
    id: 1,
    username: 'kenny'
  },
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body;
    if (password === '888888' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        token: 'sdfsdfsdfdsf',
        data: {
          id: 1,
          username: 'kenny'
        }
      });
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403
      });
    }
  }
};
```

当数据比较复杂的情况下，推荐使用 [mockjs](http://mockjs.com/) 生成数据。

## Proxy 代理

> [devServer.proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)

在前后端开发进入联调阶段，如果直接在本地调用后端接口会有跨域问题，所以需要使用本地代理调试后端接口。

配置 `config/proxy.js` 要代理的后端接口地址：

```javascript
dev: {
  '/': {
    target: 'https://dev.api.example.com/v1',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^': '' },
  },
},
```

重新启动本地服务，并关闭 `mock` ：

```bash
yarn start:no-mock
```

可以开始本地联调了！

如果接口实现和 `mock` 数据一致的情况下，联调几乎不会有问题，这也是 `mock` 的好处之一。
