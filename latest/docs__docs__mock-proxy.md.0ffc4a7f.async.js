"use strict";(self.webpackChunkcra_template_doly_site=self.webpackChunkcra_template_doly_site||[]).push([[41],{60740:function(o,a,t){t.r(a);var n=t(22035),c=t(9099),i=t(75799),m=t(6434),x=t(32966),d=t(67779),p=t(72702),v=t(51273),s=t(4434),l=t(80879),r=t(75271),e=t(25842),_=t(52676);function u(){return(0,_.jsx)(s.dY,{children:(0,_.jsx)(r.Suspense,{fallback:(0,_.jsx)(l.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"mock-\u548C-proxy",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mock-\u548C-proxy",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"mock \u548C proxy"]}),(0,_.jsxs)("h2",{id:"mock-\u6A21\u62DF\u8BF7\u6C42",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mock-\u6A21\u62DF\u8BF7\u6C42",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Mock \u6A21\u62DF\u8BF7\u6C42"]}),(0,_.jsx)("p",{children:e.texts[0].value}),(0,_.jsx)("p",{children:e.texts[1].value}),(0,_.jsxs)("p",{children:[e.texts[2].value,(0,_.jsx)("code",{children:e.texts[3].value}),e.texts[4].value,(0,_.jsx)("code",{children:e.texts[5].value}),e.texts[6].value]}),(0,_.jsx)(d.Z,{lang:"javascript",children:e.texts[7].value}),(0,_.jsxs)("p",{children:[e.texts[8].value,(0,_.jsx)("a",{href:"http://mockjs.com/",children:e.texts[9].value}),e.texts[10].value]}),(0,_.jsxs)("h2",{id:"proxy-\u4EE3\u7406",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#proxy-\u4EE3\u7406",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Proxy \u4EE3\u7406"]}),(0,_.jsx)("blockquote",{children:(0,_.jsx)("p",{children:(0,_.jsx)("a",{href:"https://webpack.js.org/configuration/dev-server/#devserverproxy",children:e.texts[11].value})})}),(0,_.jsx)("p",{children:e.texts[12].value}),(0,_.jsxs)("p",{children:[e.texts[13].value,(0,_.jsx)("code",{children:e.texts[14].value}),e.texts[15].value]}),(0,_.jsx)(d.Z,{lang:"javascript",children:e.texts[16].value}),(0,_.jsxs)("p",{children:[e.texts[17].value,(0,_.jsx)("code",{children:e.texts[18].value}),e.texts[19].value]}),(0,_.jsx)(d.Z,{lang:"bash",children:e.texts[20].value}),(0,_.jsx)("p",{children:e.texts[21].value}),(0,_.jsxs)("p",{children:[e.texts[22].value,(0,_.jsx)("code",{children:e.texts[23].value}),e.texts[24].value,(0,_.jsx)("code",{children:e.texts[25].value}),e.texts[26].value]})]})})})})}a.default=u},25842:function(o,a,t){t.r(a),t.d(a,{texts:function(){return n}});const n=[{value:"\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u521A\u5F00\u59CB\u524D\u7AEF\u548C\u540E\u7AEF\u5C31\u8981\u7EA6\u5B9A\u597D\u63A5\u53E3\uFF0C\u7136\u540E\u5206\u522B\u8FDB\u884C\u5F00\u53D1\u3002",paraId:0,tocIndex:1},{value:"\u5728\u8FD9\u65F6\u5019\uFF0C\u524D\u7AEF\u9700\u8981\u6A21\u62DF\u63A5\u53E3\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u4EE5\u6C42\u8FBE\u5230\u4FDD\u771F\u5F00\u53D1\u7684\u76EE\u7684\u3002\u800C\u4E14\u5728\u8C03\u8BD5\u4E00\u4E9B\u95EE\u9898\u65F6\uFF0C\u53EF\u4EE5\u4F2A\u9020\u8FB9\u754C\u6570\u636E\u8FDB\u884C\u9A8C\u8BC1\u3002",paraId:1,tocIndex:1},{value:"\u4F60\u53EA\u9700\u8981\u5728 ",paraId:2,tocIndex:1},{value:"mock",paraId:2,tocIndex:1},{value:" \u76EE\u5F55\u4E0B\uFF0C\u65B0\u5EFA\u4E00\u4E2A ",paraId:2,tocIndex:1},{value:"*.mock.js",paraId:2,tocIndex:1},{value:" \u6587\u4EF6\uFF0C\u652F\u6301\u4EE5\u4E0B\u65B9\u5F0F\uFF1A",paraId:2,tocIndex:1},{value:`module.export = {
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
`,paraId:3,tocIndex:1},{value:"\u5F53\u6570\u636E\u6BD4\u8F83\u590D\u6742\u7684\u60C5\u51B5\u4E0B\uFF0C\u63A8\u8350\u4F7F\u7528 ",paraId:4,tocIndex:1},{value:"mockjs",paraId:4,tocIndex:1},{value:" \u751F\u6210\u6570\u636E\u3002",paraId:4,tocIndex:1},{value:"devServer.proxy",paraId:5,tocIndex:2},{value:"\u5728\u524D\u540E\u7AEF\u5F00\u53D1\u8FDB\u5165\u8054\u8C03\u9636\u6BB5\uFF0C\u5982\u679C\u76F4\u63A5\u5728\u672C\u5730\u8C03\u7528\u540E\u7AEF\u63A5\u53E3\u4F1A\u6709\u8DE8\u57DF\u95EE\u9898\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528\u672C\u5730\u4EE3\u7406\u8C03\u8BD5\u540E\u7AEF\u63A5\u53E3\u3002",paraId:6,tocIndex:2},{value:"\u914D\u7F6E ",paraId:7,tocIndex:2},{value:"config/proxy.js",paraId:7,tocIndex:2},{value:" \u8981\u4EE3\u7406\u7684\u540E\u7AEF\u63A5\u53E3\u5730\u5740\uFF1A",paraId:7,tocIndex:2},{value:`dev: {
  '/': {
    target: 'https://dev.api.example.com/v1',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^': '' },
  },
},
`,paraId:8,tocIndex:2},{value:"\u91CD\u65B0\u542F\u52A8\u672C\u5730\u670D\u52A1\uFF0C\u5E76\u5173\u95ED ",paraId:9,tocIndex:2},{value:"mock",paraId:9,tocIndex:2},{value:" \uFF1A",paraId:9,tocIndex:2},{value:`yarn start:no-mock
`,paraId:10,tocIndex:2},{value:"\u53EF\u4EE5\u5F00\u59CB\u672C\u5730\u8054\u8C03\u4E86\uFF01",paraId:11,tocIndex:2},{value:"\u5982\u679C\u63A5\u53E3\u5B9E\u73B0\u548C ",paraId:12,tocIndex:2},{value:"mock",paraId:12,tocIndex:2},{value:" \u6570\u636E\u4E00\u81F4\u7684\u60C5\u51B5\u4E0B\uFF0C\u8054\u8C03\u51E0\u4E4E\u4E0D\u4F1A\u6709\u95EE\u9898\uFF0C\u8FD9\u4E5F\u662F ",paraId:12,tocIndex:2},{value:"mock",paraId:12,tocIndex:2},{value:" \u7684\u597D\u5904\u4E4B\u4E00\u3002",paraId:12,tocIndex:2}]}}]);
