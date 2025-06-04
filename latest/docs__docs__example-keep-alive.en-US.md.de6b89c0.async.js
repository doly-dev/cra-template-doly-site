"use strict";(self.webpackChunkcra_template_doly_site=self.webpackChunkcra_template_doly_site||[]).push([[806],{9728:function(l,a,t){t.r(a);var d=t(22035),c=t(9099),u=t(75799),x=t(6434),p=t(32966),n=t(67779),m=t(72702),h=t(51273),s=t(4434),i=t(80879),o=t(75271),_=t(29227),e=t(52676);function r(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"integrated-keep-alive",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#integrated-keep-alive",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Integrated keep-alive"]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[_.texts[0].value,(0,e.jsx)("a",{href:"https://www.npmjs.com/package/react-activation",children:_.texts[1].value})]})}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://github.com/doly-dev/cra-template-doly-examples/tree/main/examples/keep-alive",children:_.texts[2].value})}),(0,e.jsxs)("h2",{id:"installation-dependencies",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation-dependencies",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation dependencies"]}),(0,e.jsx)(n.Z,{lang:"bash",children:_.texts[3].value}),(0,e.jsxs)("h2",{id:"steps-for-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#steps-for-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Steps for usage"]}),(0,e.jsx)("ol",{children:(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:_.texts[4].value}),_.texts[5].value]})}),(0,e.jsx)(n.Z,{lang:"diff",children:_.texts[6].value}),(0,e.jsx)("ol",{start:"2",children:(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:_.texts[7].value}),_.texts[8].value,(0,e.jsx)("code",{children:_.texts[9].value}),_.texts[10].value]})}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[_.texts[11].value,(0,e.jsx)("code",{children:_.texts[12].value}),_.texts[13].value]})}),(0,e.jsx)(n.Z,{lang:"diff",children:_.texts[14].value}),(0,e.jsx)("ol",{start:"3",children:(0,e.jsxs)("li",{children:[_.texts[15].value,(0,e.jsx)("code",{children:_.texts[16].value})]})}),(0,e.jsxs)("p",{children:[_.texts[17].value,(0,e.jsx)("code",{children:_.texts[18].value})]}),(0,e.jsx)(n.Z,{lang:"diff",children:_.texts[19].value}),(0,e.jsx)("p",{children:(0,e.jsxs)("strong",{children:[_.texts[20].value,(0,e.jsx)("code",{children:_.texts[21].value}),_.texts[22].value]})}),(0,e.jsx)(n.Z,{lang:"diff",children:_.texts[23].value}),(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("a",{href:"https://github.com/CJY0208/react-activation/issues/111",children:_.texts[24].value}),_.texts[25].value,(0,e.jsx)("a",{href:"https://zh-hans.reactjs.org/docs/strict-mode.html",children:_.texts[26].value})]}),(0,e.jsx)("li",{children:(0,e.jsx)("a",{href:"https://github.com/CJY0208/react-activation/issues/43",children:_.texts[27].value})})]}),(0,e.jsxs)("h2",{id:"precautions",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#precautions",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Precautions"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[_.texts[28].value,(0,e.jsx)("code",{children:_.texts[29].value}),_.texts[30].value,(0,e.jsx)("code",{children:_.texts[31].value}),_.texts[32].value,(0,e.jsx)("code",{children:_.texts[33].value}),_.texts[34].value,(0,e.jsx)("code",{children:_.texts[35].value}),_.texts[36].value]}),(0,e.jsx)("li",{children:_.texts[37].value})]})]})})})})}a.default=r},29227:function(l,a,t){t.r(a),t.d(a,{texts:function(){return d}});const d=[{value:"Refer to ",paraId:0,tocIndex:0},{value:"react-activation",paraId:0,tocIndex:0},{value:"Example address",paraId:1,tocIndex:0},{value:`yarn add react-activation
`,paraId:2,tocIndex:1},{value:"config/config.js",paraId:3,tocIndex:2},{value:" configure babel",paraId:3,tocIndex:2},{value:`babel: {
  plugins: [
    // ...
+    'react-activation/babel'
  ];
}
`,paraId:4,tocIndex:2},{value:"src/index.tsx",paraId:5,tocIndex:2},{value:" package ",paraId:5,tocIndex:2},{value:"AliveScope",paraId:5,tocIndex:2},{value:" component",paraId:5,tocIndex:2},{value:"Note that ",paraId:6,tocIndex:2},{value:"React.StrictMode",paraId:6,tocIndex:2},{value:" cannot be used",paraId:6,tocIndex:2},{value:`+ import { AliveScope } from 'react-activation';
// ...

function App() {
  return (
    // <React.StrictMode>
+    <AliveScope>
      <RouterProvider router={router} fallbackElement={<PageLoading />} />
+    </AliveScope>
    // </React.StrictMode>
  );
}
// ...
`,paraId:7,tocIndex:2},{value:"Use in components that need to maintain state ",paraId:8,tocIndex:2},{value:"KeepAlive",paraId:8,tocIndex:2},{value:"Such as ",paraId:9,tocIndex:2},{value:"src/pages/repos/Detail.tsx",paraId:9,tocIndex:2},{value:`+ import KeepAlive from 'react-activation';

// ...

+ const WrapperDetailPage = (props: any) => {
+  const { name } = useParams();
+
+  return (
+    <KeepAlive name="detail" id={name}>
+      <DetailPage {...props} />
+    </KeepAlive>
+  );
+ };

- export default DetailPage
+ export default WrapperDetailPage;
`,paraId:10,tocIndex:2},{value:"But also in the ",paraId:11,tocIndex:2},{value:"src/components/AsyncComponent",paraId:11,tocIndex:2},{value:" increase set title page is active",paraId:11,tocIndex:2},{value:`+ import { useActivate } from 'react-activation';

// ...

- useEffect(() => {
-  if (title) {
-    document.title = title;
-  }
- }, [title]);

+ useActivate(() => {
+  if (title) {
+    document.title = title;
+  }
+ });
`,paraId:12,tocIndex:2},{value:"\u5F53\u524D\u7F13\u5B58\u9875\u9762 useActivate \u4F1A\u6267\u884C\u591A\u6B21",paraId:13,tocIndex:3},{value:" - \u7531 React.StrictMode \u5F71\u54CD\u3002\u67E5\u9605 ",paraId:13,tocIndex:3},{value:"\u4E25\u683C\u6A21\u5F0F",paraId:13,tocIndex:3},{value:"\u7528 KeepAlive \u5305\u88F9\u7684\u7EC4\u4EF6\u4E2D\uFF0Creact-router-dom \u65E0\u6CD5\u83B7\u53D6 params",paraId:13,tocIndex:3},{value:"If you distinguish ",paraId:14,tocIndex:4},{value:"Logged in",paraId:14,tocIndex:4},{value:"/",paraId:14,tocIndex:4},{value:"not logged in",paraId:14,tocIndex:4},{value:" scene, you need to clear the cached page in ",paraId:14,tocIndex:4},{value:"Log out",paraId:14,tocIndex:4},{value:" or ",paraId:14,tocIndex:4},{value:"login",paraId:14,tocIndex:4},{value:".",paraId:14,tocIndex:4},{value:"If not necessary, try not to use it.",paraId:14,tocIndex:4}]}}]);
