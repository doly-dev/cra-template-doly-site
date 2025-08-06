"use strict";(self.webpackChunkcra_template_doly_site=self.webpackChunkcra_template_doly_site||[]).push([[596],{29668:function(o,n,t){t.r(n);var d=t(22980),c=t(45926),u=t(84833),m=t(58300),p=t(44390),a=t(43362),x=t(81296),h=t(76366),s=t(33217),r=t(78165),l=t(75271),_=t(15451),e=t(52676);function i(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"mock-and-proxy",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mock-and-proxy",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"mock and proxy"]}),(0,e.jsxs)("h2",{id:"mock-request",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mock-request",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Mock request"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsx)("p",{children:_.texts[1].value}),(0,e.jsxs)("p",{children:[_.texts[2].value,(0,e.jsx)("code",{children:_.texts[3].value}),_.texts[4].value,(0,e.jsx)("code",{children:_.texts[5].value}),_.texts[6].value]}),(0,e.jsx)(a.Z,{lang:"javascript",children:_.texts[7].value}),(0,e.jsxs)("p",{children:[_.texts[8].value,(0,e.jsx)("a",{href:"http://mockjs.com/",children:_.texts[9].value}),_.texts[10].value]}),(0,e.jsxs)("h2",{id:"proxy",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#proxy",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Proxy"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://webpack.js.org/configuration/dev-server/#devserverproxy",children:_.texts[11].value})})}),(0,e.jsx)("p",{children:_.texts[12].value}),(0,e.jsxs)("p",{children:[_.texts[13].value,(0,e.jsx)("code",{children:_.texts[14].value}),_.texts[15].value]}),(0,e.jsx)(a.Z,{lang:"javascript",children:_.texts[16].value}),(0,e.jsxs)("p",{children:[_.texts[17].value,(0,e.jsx)("code",{children:_.texts[18].value}),_.texts[19].value]}),(0,e.jsx)(a.Z,{lang:"bash",children:_.texts[20].value}),(0,e.jsx)("p",{children:_.texts[21].value}),(0,e.jsxs)("p",{children:[_.texts[22].value,(0,e.jsx)("code",{children:_.texts[23].value}),_.texts[24].value,(0,e.jsx)("code",{children:_.texts[25].value}),_.texts[26].value]})]})})})})}n.default=i},15451:function(o,n,t){t.r(n),t.d(n,{texts:function(){return d}});const d=[{value:"In the process of separate front-end and back-end development, at the beginning, the front-end and back-end must agree on the interface, and then develop separately.",paraId:0,tocIndex:1},{value:"At this time, the front end needs to simulate the request and response of the interface in order to achieve the purpose of fidelity development. And when debugging some problems, you can fake boundary data for verification.",paraId:1,tocIndex:1},{value:"You only need to ",paraId:2,tocIndex:1},{value:"mock",paraId:2,tocIndex:1},{value:" directory, create a new ",paraId:2,tocIndex:1},{value:"*.mock.js",paraId:2,tocIndex:1},{value:" file, supports the following ways:",paraId:2,tocIndex:1},{value:`module.export = {
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
`,paraId:3,tocIndex:1},{value:"When the data is more complex, it is recommended to use ",paraId:4,tocIndex:1},{value:"mockjs",paraId:4,tocIndex:1},{value:" generate the data.",paraId:4,tocIndex:1},{value:"devServer.proxy",paraId:5,tocIndex:2},{value:"When the front-end and back-end development enters the joint debugging stage, if the back-end interface is directly called locally, there will be cross-domain problems, so it is necessary to use a local proxy to debug the back-end interface.",paraId:6,tocIndex:2},{value:"Configuring ",paraId:7,tocIndex:2},{value:"config/proxy.js",paraId:7,tocIndex:2},{value:" the back-end interface address to the agent:",paraId:7,tocIndex:2},{value:`dev: {
  '/': {
    target: 'https://dev.api.example.com/v1',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^': '' },
  },
},
`,paraId:8,tocIndex:2},{value:"Restart the local service and shut down ",paraId:9,tocIndex:2},{value:"mock",paraId:9,tocIndex:2},{value:" :",paraId:9,tocIndex:2},{value:`yarn start:no-mock
`,paraId:10,tocIndex:2},{value:"You can start local joint debugging!",paraId:11,tocIndex:2},{value:"If the interface and ",paraId:12,tocIndex:2},{value:"mock",paraId:12,tocIndex:2},{value:" in the case of consistent data, the FBI almost no problem, which is ",paraId:12,tocIndex:2},{value:"mock",paraId:12,tocIndex:2},{value:" one of the benefits.",paraId:12,tocIndex:2}]}}]);
