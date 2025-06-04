"use strict";(self.webpackChunkcra_template_doly_site=self.webpackChunkcra_template_doly_site||[]).push([[207],{58513:function(r,a,_){_.r(a);var o=_(22035),c=_(9099),u=_(75799),m=_(6434),p=_(32966),n=_(67779),x=_(72702),h=_(51273),s=_(4434),d=_(80879),l=_(75271),t=_(54592),e=_(52676);function i(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"integrated-mst",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#integrated-mst",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Integrated MST"]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[t.texts[0].value,(0,e.jsx)("a",{href:"https://juejin.cn/post/6844903772972384263",children:t.texts[1].value})]})}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://github.com/doly-dev/cra-template-doly-examples/tree/main/examples/mst",children:t.texts[2].value})}),(0,e.jsxs)("p",{children:[t.texts[3].value,(0,e.jsx)("a",{href:"https://mobx-state-tree.js.org/",children:t.texts[4].value}),t.texts[5].value,(0,e.jsx)("a",{href:"https://mobx-state-tree.js.org/concepts/using-react",children:t.texts[6].value}),t.texts[7].value]}),(0,e.jsxs)("h2",{id:"installation-dependencies",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation-dependencies",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation dependencies"]}),(0,e.jsx)(n.Z,{lang:"bash",children:t.texts[8].value}),(0,e.jsxs)("h2",{id:"steps-for-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#steps-for-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Steps for usage"]}),(0,e.jsx)("ol",{children:(0,e.jsxs)("li",{children:[t.texts[9].value,(0,e.jsx)("a",{href:"https://github.com/ecklf/react-hooks-mobx-state-tree/tree/main/src/models",children:t.texts[10].value}),t.texts[11].value,(0,e.jsx)("code",{children:t.texts[12].value}),t.texts[13].value,(0,e.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:t.texts[14].value}),t.texts[15].value]})}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:t.texts[16].value})}),(0,e.jsx)(n.Z,{lang:"typescript",children:t.texts[17].value}),(0,e.jsx)("ol",{start:"2",children:(0,e.jsxs)("li",{children:[t.texts[18].value,(0,e.jsx)("code",{children:t.texts[19].value})]})}),(0,e.jsx)(n.Z,{lang:"typescript",children:t.texts[20].value}),(0,e.jsx)("ol",{start:"3",children:(0,e.jsx)("li",{children:t.texts[21].value})}),(0,e.jsx)(n.Z,{lang:"typescript",children:t.texts[22].value}),(0,e.jsxs)("h2",{id:"enumerated-type-management",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#enumerated-type-management",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Enumerated type management"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://github.com/mobxjs/mobx-state-tree/issues/605",children:t.texts[23].value})})}),(0,e.jsx)("p",{children:t.texts[24].value}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:t.texts[25].value})}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:t.texts[26].value})}),(0,e.jsx)(n.Z,{lang:"typescript",children:t.texts[27].value}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:t.texts[28].value})}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:t.texts[29].value})}),(0,e.jsx)(n.Z,{lang:"typescript",children:t.texts[30].value})]})})})})}a.default=i},54592:function(r,a,_){_.r(a),_.d(a,{texts:function(){return o}});const o=[{value:"Learning document: ",paraId:0,tocIndex:0},{value:"MobX State Tree \u6570\u636E\u7EC4\u4EF6\u5316\u5F00\u53D1",paraId:0,tocIndex:0},{value:"Example address",paraId:1,tocIndex:0},{value:"Integrated ",paraId:2,tocIndex:0},{value:"mobx-state-tree",paraId:2,tocIndex:0},{value:" data management, refer to ",paraId:2,tocIndex:0},{value:"React and MST",paraId:2,tocIndex:0},{value:" .",paraId:2,tocIndex:0},{value:`yarn add mobx mobx-react-lite mobx-state-tree
`,paraId:3,tocIndex:1},{value:"The ",paraId:4,tocIndex:2},{value:"https://github.com/ecklf/react-hooks-mobx-state-tree/tree/main/src/models",paraId:4,tocIndex:2},{value:" copied to the ",paraId:4,tocIndex:2},{value:"src/models",paraId:4,tocIndex:2},{value:" next, some types of errors need to be adjusted directly using the quick fix (",paraId:4,tocIndex:2},{value:"VSCode ESLint plugin",paraId:4,tocIndex:2},{value:").",paraId:4,tocIndex:2},{value:"Pay attention to the following cache part, if not used, please delete it as appropriate!",paraId:5,tocIndex:2},{value:`// ...

// When the model is instanced, use it if there is cached data
// Need to pay attention to log out and log out to clear, enter the page to update data
if (process.browser) {
  const data = localStorage.getItem('rootState');
  if (data) {
    const json = JSON.parse(data);
    if (RootModel.is(json)) {
      initialState = RootModel.create(json);
    }
  }
}

// ...

// Monitor data changes and cache data
onSnapshot(rootStore, snapshot => {
  console.log('Snapshot: ', snapshot);
  localStorage.setItem('rootState', JSON.stringify(snapshot));
});

// ...
`,paraId:6,tocIndex:2},{value:"Revise ",paraId:7,tocIndex:2},{value:"src/index.tsx",paraId:7,tocIndex:2},{value:`import { Provider, rootStore } from '@/models/Root';
// ...

function App() {
  return (
    // <React.StrictMode>
    <Provider value={rootStore}>
      <RouterProvider router={router} fallbackElement={<PageLoading />} />
    </Provider>
    // </React.StrictMode>
  );
}
`,paraId:8,tocIndex:2},{value:"components used",paraId:9,tocIndex:2},{value:`import { observer } from "mobx-react-lite";
import { useMst } from '@/models/Root';

const SomeComponent = observer(()=>{
  const { cart } = useMst();
  console.log(cart);

  return (
    // ...
  )
});

export default SomeComponent;
`,paraId:10,tocIndex:2},{value:"Support Enums and union type for enumeration",paraId:11,tocIndex:3},{value:"Note the distinction between number enumeration and string enumeration.",paraId:12,tocIndex:3},{value:"Enumeration data defined by the service interface",paraId:13,tocIndex:3},{value:"services/types/enum.ts",paraId:14,tocIndex:3},{value:`/**Whether to add watermark */
export enum EWaterFlag {
  No,
  Yes
}

/**colour */
export enum EColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
`,paraId:15,tocIndex:3},{value:"Enumeration in MST",paraId:16,tocIndex:3},{value:"models/enum.ts",paraId:17,tocIndex:3},{value:`import { types } from 'mobx-state-box';
import { EWaterFlag, EColor } from '@/services/types/enum';

/**Whether to add watermark */
export const UWaterFlag = types.union(types.literal(EWaterFlag.No), types.literal(EWaterFlag.Yes));

/**colour */
export const UColor = types.enumeration<EColor>(Object.values(EColor));
`,paraId:18,tocIndex:3}]}}]);
