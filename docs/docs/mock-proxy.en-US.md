---
order: 5
group:
  title: Documents
  order: 1
toc: content
---

# mock and proxy

## Mock request

In the process of separate front-end and back-end development, at the beginning, the front-end and back-end must agree on the interface, and then develop separately.

At this time, the front end needs to simulate the request and response of the interface in order to achieve the purpose of fidelity development. And when debugging some problems, you can fake boundary data for verification.

You only need to `mock` directory, create a new `*.mock.js` file, supports the following ways:

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

When the data is more complex, it is recommended to use [mockjs](http://mockjs.com/) generate the data.

## Proxy

> [devServer.proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)

When the front-end and back-end development enters the joint debugging stage, if the back-end interface is directly called locally, there will be cross-domain problems, so it is necessary to use a local proxy to debug the back-end interface.

Configuring `config/proxy.js` the back-end interface address to the agent:

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

Restart the local service and shut down `mock` :

```bash
yarn start:no-mock
```

You can start local joint debugging!

If the interface and `mock` in the case of consistent data, the FBI almost no problem, which is `mock` one of the benefits.
