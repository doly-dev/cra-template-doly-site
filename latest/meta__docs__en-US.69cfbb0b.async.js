"use strict";(self.webpackChunkcra_template_doly_site=self.webpackChunkcra_template_doly_site||[]).push([[430],{5781:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},5389:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},7645:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},51099:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},33060:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},46358:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},69600:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},43563:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},7902:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},86841:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},96093:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},90734:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},57038:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},81423:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},28650:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},16635:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},46169:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},28626:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(75271),o={}},45919:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"When the project is developed, you only need to run the following command to package the application:",paraId:0,tocIndex:1},{value:`yarn build
`,paraId:1,tocIndex:1},{value:"Resources in the package ",paraId:2,tocIndex:1},{value:"dist",paraId:2,tocIndex:1},{value:" directory.",paraId:2,tocIndex:1},{value:"Run the analysis script, build it separately ",paraId:3,tocIndex:2},{value:"dist-analyze",paraId:3,tocIndex:2},{value:", and automatically open the browser to access.",paraId:3,tocIndex:2},{value:`yarn analyze
`,paraId:4,tocIndex:2},{value:"Check ",paraId:5,tocIndex:3},{value:"config/env.js",paraId:5,tocIndex:3},{value:" in a production environment ",paraId:5,tocIndex:3},{value:"PUBLIC_URL",paraId:5,tocIndex:3},{value:" ",paraId:5,tocIndex:3},{value:"REACT_APP_API",paraId:5,tocIndex:3},{value:" is configured correctly.",paraId:5,tocIndex:3},{value:"After checking to build ",paraId:5,tocIndex:3},{value:"dist/index.html",paraId:5,tocIndex:3},{value:" resources to see the introduction of the path is correct.",paraId:5,tocIndex:3},{value:"If the above is no problem, just the ",paraId:6,tocIndex:3},{value:"dist",paraId:6,tocIndex:3},{value:" resource directory are copied to the web server.",paraId:6,tocIndex:3},{value:"If you need to zip the file and send it to the server, you can use:",paraId:7,tocIndex:3},{value:`yarn zip
`,paraId:8,tocIndex:3},{value:"You can also in the ",paraId:9,tocIndex:3},{value:"config/zip.js",paraId:9,tocIndex:3},{value:" configuration of compression options.",paraId:9,tocIndex:3}]},33100:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Routing ",paraId:0,tocIndex:0},{value:"src/router.tsx",paraId:0,tocIndex:0},{value:" is configured in .",paraId:0,tocIndex:0},{value:"use package ",paraId:1,tocIndex:1},{value:"react-router-dom@6",paraId:1,tocIndex:1},{value:"Support routing switching animation, please use the ",paraId:1,tocIndex:1},{value:"PageContainer",paraId:1,tocIndex:1},{value:" package",paraId:1,tocIndex:1},{value:"parameter",paraId:2,tocIndex:2},{value:"illustrate",paraId:2,tocIndex:2},{value:"type",paraId:2,tocIndex:2},{value:"Defaults",paraId:2,tocIndex:2},{value:"routes",paraId:2,tocIndex:2},{value:"routing configuration",paraId:2,tocIndex:2},{value:"RouteObject[]",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"animated",paraId:2,tocIndex:2},{value:"Turn off page transition animation",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:`// import { RouteObject } from 'react-router-dom';

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
}
`,paraId:3,tocIndex:3},{value:"Use directly ",paraId:4,tocIndex:5},{value:"src/router.tsx",paraId:4,tocIndex:5},{value:" :",paraId:4,tocIndex:5},{value:`import router from '@/router';

// util function
function xxx() {
  router.navigate('/list');
}
`,paraId:5,tocIndex:5}]},75167:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Suspense",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"lazy",paraId:0,tocIndex:0},{value:" Handle asynchronous component loading with React, and set page title.",paraId:0,tocIndex:0},{value:"parameter",paraId:1,tocIndex:1},{value:"illustrate",paraId:1,tocIndex:1},{value:"type",paraId:1,tocIndex:1},{value:"Defaults",paraId:1,tocIndex:1},{value:"component",paraId:1,tocIndex:1},{value:"Synchronous/asynchronous components",paraId:1,tocIndex:1},{value:"(() => Promise<{ default: Component<any> }>) | ReactElement",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"title",paraId:1,tocIndex:1},{value:"page title",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1}]},60173:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Common ones are ",paraId:0,tocIndex:0},{value:"304",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"404",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"500",paraId:0,tocIndex:0},{value:"The abnormal page is used to give feedback on the specific abnormal state of the page. Usually, it contains an explanation of the error state and provides suggestions or actions to the user to avoid the user feeling lost and confused.",paraId:1,tocIndex:0},{value:"parameter",paraId:2,tocIndex:1},{value:"illustrate",paraId:2,tocIndex:1},{value:"type",paraId:2,tocIndex:1},{value:"Defaults",paraId:2,tocIndex:1},{value:"icon",paraId:2,tocIndex:1},{value:"picture",paraId:2,tocIndex:1},{value:"ReactNode",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"title",paraId:2,tocIndex:1},{value:"title",paraId:2,tocIndex:1},{value:"ReactNode",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"desc",paraId:2,tocIndex:1},{value:"supplementary description",paraId:2,tocIndex:1},{value:"ReactNode",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"extra",paraId:2,tocIndex:1},{value:"extra information",paraId:2,tocIndex:1},{value:"ReactNode",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"operate",paraId:2,tocIndex:1},{value:"ReactNode[]",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1}]},34403:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"asyncComponent",paraId:0,tocIndex:0},{value:" The prompt page for asynchronous component loading, including loading and failed loading.",paraId:1,tocIndex:0},{value:" ",paraId:2,tocIndex:0},{value:`import { PageLoading, PageLoadError } from '@/components/PageLoader';
`,paraId:3,tocIndex:0}]},38191:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"The page should be wrapped in this container for the page to switch animation styles. You can also modify the component directly.",paraId:0,tocIndex:0},{value:"Like ",paraId:1,tocIndex:1},{value:"div",paraId:1,tocIndex:1},{value:" .",paraId:1,tocIndex:1}]},60317:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"In ",paraId:0,tocIndex:0},{value:"config/env.js",paraId:0,tocIndex:0},{value:" the configuration variables and various operating environments, use of ",paraId:0,tocIndex:0},{value:"env-cmd",paraId:0,tocIndex:0},{value:" arrangement.",paraId:0,tocIndex:0},{value:"The following are the commonly used environment variables:",paraId:1,tocIndex:0},{value:`PUBLIC_URL         # Static resource base path
REACT_APP_ENV      # Application operating environment dev test prod
REACT_APP_API      # Interface basic path
`,paraId:2,tocIndex:0},{value:"For more built-in environment variables, please refer to ",paraId:3,tocIndex:0},{value:"Advanced Configuration",paraId:3,tocIndex:0},{value:" . If you need a custom environment variables, use the ",paraId:3,tocIndex:0},{value:"REACT_APP_*",paraId:3,tocIndex:0},{value:" name.",paraId:3,tocIndex:0},{value:"Project by ",paraId:4,tocIndex:0},{value:"process.env.*",paraId:4,tocIndex:0},{value:" accessing:",paraId:4,tocIndex:0},{value:`console.log(process.env.REACT_APP_ENV);
`,paraId:5,tocIndex:0},{value:"src/utils/request.ts",paraId:6,tocIndex:1},{value:" You can see the following code in:",paraId:6,tocIndex:1},{value:`baseURL: process.env.REACT_APP_API
`,paraId:7,tocIndex:1},{value:"In the development environment, the interface used may be a local mock ",paraId:8,tocIndex:1},{value:'""',paraId:8,tocIndex:1},{value:", and in the production build it is ",paraId:8,tocIndex:1},{value:"http://prod.api.example.com/",paraId:8,tocIndex:1},{value:" .",paraId:8,tocIndex:1},{value:"Only print information to the console in the development environment.",paraId:9,tocIndex:2},{value:`if (process.env.REACT_APP_ENV === 'dev') {
  // console.log(something);
}
`,paraId:10,tocIndex:2}]},69181:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Example address",paraId:0,tocIndex:0},{value:"Introduce the build configuration of different application scenarios.",paraId:1,tocIndex:0},{value:"By engineering platform release, deployment path has confirmed good when applying application, only the configuration ",paraId:2,tocIndex:1},{value:"PUBLIC_URL",paraId:2,tocIndex:1},{value:" can be.",paraId:2,tocIndex:1},{value:"Example: The deployment path of the application application is ",paraId:3,tocIndex:1},{value:"webapp/business-product",paraId:3,tocIndex:1},{value:"config/env.js",paraId:4,tocIndex:1},{value:`prod: {
  PUBLIC_URL: "/webapp/business-product/",
  // ...
}
`,paraId:5,tocIndex:1},{value:"In addition, the release engineering platform also need to add ",paraId:6,tocIndex:1},{value:"build.sh",paraId:6,tocIndex:1},{value:" files, and other items as this can be.",paraId:6,tocIndex:1},{value:"Custom project path, no strong specification constraints. After the development is completed, the resources are packaged in a zip file and released directly.",paraId:7,tocIndex:2},{value:"Agreed project path rules: /seashell/{computerSide=website|mobileSide=webapp}/{businessName}/{productName}/index.html",paraId:8,tocIndex:2},{value:"Example: publish a static resource application, deployed ",paraId:9,tocIndex:2},{value:"/seashell/webapp/business/product/",paraId:9,tocIndex:2},{value:" under the path",paraId:9,tocIndex:2},{value:"config/env.js",paraId:10,tocIndex:2},{value:`prod: {
  PUBLIC_URL: "https://img.example.com/seashell/webapp/business/product/",
  // ...
}
`,paraId:11,tocIndex:2},{value:"config/zip.js",paraId:12,tocIndex:2},{value:`pathPrefix = 'seashell/webapp/business/product/';
`,paraId:13,tocIndex:2},{value:"build",paraId:14,tocIndex:2},{value:`yarn build
`,paraId:15,tocIndex:2},{value:"zip",paraId:16,tocIndex:2},{value:`yarn zip
`,paraId:17,tocIndex:2},{value:"Deployed in a special environment or a third-party server, generally only the static resource path and interface address are different, and everything else is the same as the static resource.",paraId:18,tocIndex:3},{value:"So you only need to add a new build environment configuration.",paraId:19,tocIndex:3},{value:"Example: The above static resources deployed to ",paraId:20,tocIndex:3},{value:"sandbox.example.com",paraId:20,tocIndex:3},{value:" domain name, address of the interface ",paraId:20,tocIndex:3},{value:"http://sandbox.api.example.com/v1",paraId:20,tocIndex:3},{value:"package.json",paraId:21,tocIndex:3},{value:`"scripts": {
  "build:sandbox": "env-cmd -r ./config/env.js -e default,sandbox craco build",
}
`,paraId:22,tocIndex:3},{value:"config/env.js",paraId:23,tocIndex:3},{value:`sandbox: {
  PUBLIC_URL: "/seashell/webapp/business/product/",
  REACT_APP_API: "http://sandbox.api.example.com/v1",
  REACT_APP_ENV: "sandbox",
  BUILD_PATH: "dist"
},
`,paraId:24,tocIndex:3},{value:"config/zip.js",paraId:25,tocIndex:3},{value:`pathPrefix = 'seashell/webapp/business/product/';
`,paraId:26,tocIndex:3},{value:"build",paraId:27,tocIndex:3},{value:`yarn build:sandbox
`,paraId:28,tocIndex:3},{value:"zip",paraId:29,tocIndex:3},{value:`yarn zip
`,paraId:30,tocIndex:3}]},29227:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Refer to ",paraId:0,tocIndex:0},{value:"react-activation",paraId:0,tocIndex:0},{value:"Example address",paraId:1,tocIndex:0},{value:`yarn add react-activation
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
`,paraId:12,tocIndex:2},{value:"\u5F53\u524D\u7F13\u5B58\u9875\u9762 useActivate \u4F1A\u6267\u884C\u591A\u6B21",paraId:13,tocIndex:3},{value:" - \u7531 React.StrictMode \u5F71\u54CD\u3002\u67E5\u9605 ",paraId:13,tocIndex:3},{value:"\u4E25\u683C\u6A21\u5F0F",paraId:13,tocIndex:3},{value:"\u7528 KeepAlive \u5305\u88F9\u7684\u7EC4\u4EF6\u4E2D\uFF0Creact-router-dom \u65E0\u6CD5\u83B7\u53D6 params",paraId:13,tocIndex:3},{value:"If you distinguish ",paraId:14,tocIndex:4},{value:"Logged in",paraId:14,tocIndex:4},{value:"/",paraId:14,tocIndex:4},{value:"not logged in",paraId:14,tocIndex:4},{value:" scene, you need to clear the cached page in ",paraId:14,tocIndex:4},{value:"Log out",paraId:14,tocIndex:4},{value:" or ",paraId:14,tocIndex:4},{value:"login",paraId:14,tocIndex:4},{value:".",paraId:14,tocIndex:4},{value:"If not necessary, try not to use it.",paraId:14,tocIndex:4}]},54592:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Learning document: ",paraId:0,tocIndex:0},{value:"MobX State Tree \u6570\u636E\u7EC4\u4EF6\u5316\u5F00\u53D1",paraId:0,tocIndex:0},{value:"Example address",paraId:1,tocIndex:0},{value:"Integrated ",paraId:2,tocIndex:0},{value:"mobx-state-tree",paraId:2,tocIndex:0},{value:" data management, refer to ",paraId:2,tocIndex:0},{value:"React and MST",paraId:2,tocIndex:0},{value:" .",paraId:2,tocIndex:0},{value:`yarn add mobx mobx-react-lite mobx-state-tree
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
`,paraId:18,tocIndex:3}]},82505:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Use directly ",paraId:0,tocIndex:1},{value:"src/router.tsx",paraId:0,tocIndex:1},{value:" :",paraId:0,tocIndex:1},{value:`import router from '@/router';

// util function
function xxx() {
  router.navigate('/list');
}
`,paraId:1,tocIndex:1},{value:"Property 'encodeLocation' is missing in type 'HashHistory' but required in type 'History'.",paraId:2},{value:"If you use a project earlier than react-router-dom@6.4, you may receive the following error after reinstalling dependencies:",paraId:3,tocIndex:2},{value:"This is because the react-router@6.4 version removes the history dependency and adds the RouterProvider.",paraId:4,tocIndex:2},{value:"package.json lock 'react-router-dom@~6.3.0' dependent version.",paraId:5,tocIndex:2},{value:"src/index.tsx",paraId:6,tocIndex:3},{value:" The ",paraId:6,tocIndex:3},{value:"AnimatedRoutes",paraId:6,tocIndex:3},{value:" component settings ",paraId:6,tocIndex:3},{value:"animated={false}",paraId:6,tocIndex:3},{value:`<AnimatedRoutes
  // ...
  animated={false}
/>
`,paraId:7,tocIndex:3},{value:"antd@4",paraId:2},{value:"Install dependencies ",paraId:8,tocIndex:4},{value:"babel-plugin-import",paraId:8,tocIndex:4},{value:`yarn add babel-plugin-import --dev
`,paraId:9,tocIndex:4},{value:"Modify file ",paraId:10,tocIndex:4},{value:"config/config.js",paraId:10,tocIndex:4},{value:" configuration",paraId:10,tocIndex:4},{value:`// ...
babel: {
  plugins: [
    ...whenProd(() => [['transform-remove-console', { exclude: ['error', 'warn'] }]], []),
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd']
  ];
}
`,paraId:11,tocIndex:4},{value:"This scheme is suitable for login and current project which are not in the same project and require complex token conversion.",paraId:12,tocIndex:5},{value:"If it's a simple project, just handle it ",paraId:13,tocIndex:5},{value:"utils/request.ts",paraId:13,tocIndex:5},{value:" in.",paraId:13,tocIndex:5},{value:"If the current project must be logged in before entering, it is recommended to extract a separate Authcomponent for login verification. Such as:",paraId:14,tocIndex:5},{value:"src/components/Auth/index.tsx",paraId:15,tocIndex:5},{value:`import { tokenChange } from '@/services/common';
import { getToken, setToken, getAccessToken, setAccessToken } from '@/utils/tokenStorage';
import { toLoginPage } from '@/utils/utils';

const Auth = ({ children }) => {
  const [logined, setLogined] = React.useState(false);

  React.useEffect(() => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      const loginToken = getToken(); // Third way token

      if (loginToken) {
        // Convert the current project token
        tokenChange().then(res => {
          setAccessToken(res.accessToken);
          setLogined(true);
        });
      } else {
        if (process.env.REACT_APP_ENV === 'dev') {
          // local development
          setToken('252Be844PzHnVqmQ');
          setAccessToken('1zdaf7876546352aflkj');
          setLogined(true);
        } else {
          toLoginPage();
        }
      }
    }
  }, []);

  return <>{logined ? children : null}</>;
};

export default Auth;
`,paraId:16,tocIndex:5},{value:"Put the Auth component in the outermost layer of the project.",paraId:17,tocIndex:5},{value:"src/index.tsx",paraId:18,tocIndex:5},{value:`import Auth from '@/components/Auth';
// ...

function App() {
  // ...
  return <Auth>{/*//...*/}</Auth>;
}
`,paraId:19,tocIndex:5},{value:"pnpm",paraId:2},{value:"Use ",paraId:20,tocIndex:6},{value:"pnpm import",paraId:20,tocIndex:6},{value:" to import the lock dependency version file, and then delete ",paraId:20,tocIndex:6},{value:"package-lock.json",paraId:20,tocIndex:6},{value:" or ",paraId:20,tocIndex:6},{value:"yarn.lock",paraId:20,tocIndex:6},{value:"Delete the ",paraId:20,tocIndex:6},{value:"node_modules",paraId:20,tocIndex:6},{value:" directory",paraId:20,tocIndex:6},{value:"Add the ",paraId:20,tocIndex:6},{value:".npmrc",paraId:20,tocIndex:6},{value:" file to the root of the project, in order to set the dependency flattening",paraId:20,tocIndex:6},{value:".npmrc",paraId:21,tocIndex:6},{value:" file:",paraId:21,tocIndex:6},{value:`shamefully-hoist=true
auto-install-peers=true # If you are using nodejs <= 16, pnpm < 8, you need to enable this option manually.
`,paraId:22,tocIndex:6},{value:"Reinstall the dependencies using ",paraId:23,tocIndex:6},{value:"pnpm install",paraId:23,tocIndex:6},{value:", and then run the script with the ",paraId:23,tocIndex:6},{value:"pnpm",paraId:23,tocIndex:6},{value:" command",paraId:23,tocIndex:6},{value:"git hook",paraId:23,tocIndex:6},{value:" tool tweaks, upgrade ",paraId:23,tocIndex:6},{value:"husky",paraId:23,tocIndex:6},{value:" or change ",paraId:23,tocIndex:6},{value:"yorkie",paraId:23,tocIndex:6},{value:" to ",paraId:23,tocIndex:6},{value:"husky",paraId:23,tocIndex:6},{value:"Since Yorkie and earlier versions of Husky don't support PNPM, an upgrade is required.",paraId:24,tocIndex:6},{value:"Here's an example of yorkie changing to ",paraId:25,tocIndex:6},{value:"husky@8",paraId:25,tocIndex:6},{value:`# Delete yorkie or lower version husky
pnpm remove yorkie

# Delete the .git/hooks directory manually
rm -rf .git/hooks

# Install husky
pnpm dlx husky-init && pnpm install

# Add git hooks
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
`,paraId:26,tocIndex:6},{value:"Switch the ",paraId:27,tocIndex:6},{value:"gitHooks",paraId:27,tocIndex:6},{value:" or ",paraId:27,tocIndex:6},{value:"husky",paraId:27,tocIndex:6},{value:" configuration in ",paraId:27,tocIndex:6},{value:"package.json",paraId:27,tocIndex:6},{value:" to ",paraId:27,tocIndex:6},{value:".husky",paraId:27,tocIndex:6},{value:".",paraId:27,tocIndex:6},{value:"Then remove ",paraId:28,tocIndex:6},{value:"gitHooks",paraId:28,tocIndex:6},{value:" or ",paraId:28,tocIndex:6},{value:"husky",paraId:28,tocIndex:6},{value:" in ",paraId:28,tocIndex:6},{value:"package.json",paraId:28,tocIndex:6},{value:".",paraId:28,tocIndex:6},{value:"For example, ",paraId:29,tocIndex:6},{value:"pre-commit",paraId:29,tocIndex:6},{value:`#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
`,paraId:30,tocIndex:6},{value:"Whether the running, testing, and building projects are normal",paraId:31,tocIndex:6},{value:`pnpm start
pnpm test
pnpm build
`,paraId:32,tocIndex:6}]},24557:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"nodejs",paraId:0,tocIndex:1},{value:" \u2267 14",paraId:0,tocIndex:1},{value:`npx create-react-app my-app --template doly

cd my-app

npm install # trigger hook
`,paraId:1},{value:`yarn create react-app my-app --template doly

cd my-app

yarn install # trigger hook
`,paraId:2},{value:`.
\u251C\u2500\u2500 config
\u2502   \u251C\u2500\u2500 config.js            # craco configuration file
\u2502   \u251C\u2500\u2500 env.js               # Environment variable configuration
\u2502   \u251C\u2500\u2500 proxy.js             # Proxy configuration, corresponding to the environment variable REACT_APP_ENV
\u2502   \u251C\u2500\u2500 zip.js               # zip package configuration
\u251C\u2500\u2500 dist                     # Build result
\u251C\u2500\u2500 zip                      # Pack and compress the build result
\u251C\u2500\u2500 mock                     # mock data
\u251C\u2500\u2500 public
\u2502   \u251C\u2500\u2500 favicon.ico          # favicon
\u2502   \u251C\u2500\u2500 index.html           # html
\u2502   \u251C\u2500\u2500 logo.png             # logo
\u2502   \u251C\u2500\u2500 manifest.json        # Used to inform the browser about PWA application information
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 assets               # Static resources, such as pictures, styles, fonts, etc.
\u2502   \u251C\u2500\u2500 components           # components
\u2502   \u251C\u2500\u2500 models               # data management
\u2502   \u251C\u2500\u2500 pages                # page
\u2502   \u251C\u2500\u2500 services             # Background interface services
\u2502   \u251C\u2500\u2500 utils                # tools
\u2502   \u251C\u2500\u2500 index.tsx            # Project entry file
\u2502   \u251C\u2500\u2500 index.less           # Global style
\u2502   \u251C\u2500\u2500 router.tsx           # routing configuration
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 README.md
`,paraId:3,tocIndex:3},{value:"Please modify according to business ",paraId:4,tocIndex:3},{value:"public",paraId:4,tocIndex:3},{value:" documents and content in",paraId:4,tocIndex:3},{value:`yarn start
`,paraId:5,tocIndex:4},{value:"The browser automatically accesses it ",paraId:6,tocIndex:4},{value:"http://localhost:3000",paraId:6,tocIndex:4},{value:" .",paraId:6,tocIndex:4},{value:`yarn build
`,paraId:7,tocIndex:5},{value:"Resources in the package ",paraId:8,tocIndex:5},{value:"dist",paraId:8,tocIndex:5},{value:" distdirectory.",paraId:8,tocIndex:5}]},71639:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Git hook management is provided by ",paraId:0,tocIndex:0},{value:"husky",paraId:0,tocIndex:0},{value:" .",paraId:0,tocIndex:0},{value:"Every time you submit something, will run for the temporary file ",paraId:1,tocIndex:1},{value:"eslint",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"stylelint",paraId:1,tocIndex:1},{value:", ",paraId:1,tocIndex:1},{value:"prettiercommand",paraId:1,tocIndex:1},{value:", thereby preventing the code you submit malformed.",paraId:1,tocIndex:1},{value:"The git submission information is regulated by ",paraId:2,tocIndex:2},{value:"@commitlint/cli",paraId:2,tocIndex:2},{value:" and ",paraId:2,tocIndex:2},{value:"@commitlint/config-conventional",paraId:2,tocIndex:2},{value:" . When you use git to submit information that does not meet the specifications, there will be an error message.",paraId:2,tocIndex:2},{value:"git submission information format",paraId:3,tocIndex:2},{value:`type(scope?): subject
`,paraId:4,tocIndex:2},{value:"Demonstrate correctly",paraId:5,tocIndex:2},{value:`chore: run tests on travis ci
fix(server): send cors headers
feat(blog): add comment section
`,paraId:6,tocIndex:2},{value:"type",paraId:7,tocIndex:2},{value:"\u503C",paraId:8,tocIndex:2},{value:"\u8BF4\u660E",paraId:8,tocIndex:2},{value:"build",paraId:8,tocIndex:2},{value:"Updates affecting the build system or external dependencies (example range: gulp, broccoli, npm)",paraId:8,tocIndex:2},{value:"ci",paraId:8,tocIndex:2},{value:"Changes to CI configuration files and scripts (e.g. scopes: Travis, Circle, BrowserStack, SauceLabs)",paraId:8,tocIndex:2},{value:"chore",paraId:8,tocIndex:2},{value:"Other changes that do not modify src or test files",paraId:8,tocIndex:2},{value:"docs",paraId:8,tocIndex:2},{value:"Only change the document",paraId:8,tocIndex:2},{value:"feat",paraId:8,tocIndex:2},{value:"new function",paraId:8,tocIndex:2},{value:"fix",paraId:8,tocIndex:2},{value:"bug fix",paraId:8,tocIndex:2},{value:"perf",paraId:8,tocIndex:2},{value:"Code changes to improve performance",paraId:8,tocIndex:2},{value:"refactor",paraId:8,tocIndex:2},{value:"Code changes that neither fix bugs nor add new features",paraId:8,tocIndex:2},{value:"revert",paraId:8,tocIndex:2},{value:"Revert previous commit",paraId:8,tocIndex:2},{value:"style",paraId:8,tocIndex:2},{value:"Changes that do not affect the meaning of the code (white-space, format, missing semicolon, etc.)",paraId:8,tocIndex:2},{value:"test",paraId:8,tocIndex:2},{value:"Add missing tests or correct existing tests",paraId:8,tocIndex:2},{value:"Recommended ",paraId:9,tocIndex:2},{value:"yarn commit",paraId:9,tocIndex:2},{value:" or ",paraId:9,tocIndex:2},{value:"npx cz",paraId:9,tocIndex:2},{value:" through interactive command fill in the information submitted specifications.",paraId:9,tocIndex:2}]},18425:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Based on ",paraId:0,tocIndex:0},{value:"Create React App",paraId:0,tocIndex:0},{value:" + ",paraId:0,tocIndex:0},{value:"craco",paraId:0,tocIndex:0},{value:" extension of scaffolding, to quickly build ",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:" a single-page application.",paraId:0,tocIndex:0},{value:"Use TypeScript to develop, provide type definition file",paraId:1,tocIndex:1},{value:"Complete directory structure, more standardized project code organization",paraId:1,tocIndex:1},{value:"Multi runtime configuration, preset ",paraId:1,tocIndex:1},{value:"dev",paraId:1,tocIndex:1},{value:" ",paraId:1,tocIndex:1},{value:"test",paraId:1,tocIndex:1},{value:" ",paraId:1,tocIndex:1},{value:"prod",paraId:1,tocIndex:1},{value:" environment",paraId:1,tocIndex:1},{value:"With ",paraId:1,tocIndex:1},{value:"mock",paraId:1,tocIndex:1},{value:" and ",paraId:1,tocIndex:1},{value:"proxy",paraId:1,tocIndex:1},{value:" the front and rear, so that the separated end of the FBI and the development of more efficient",paraId:1,tocIndex:1},{value:"Support ",paraId:1,tocIndex:1},{value:"*.less",paraId:1,tocIndex:1},{value:" ",paraId:1,tocIndex:1},{value:"*.module.less",paraId:1,tocIndex:1},{value:"Built-in routing component supports page switching animation",paraId:1,tocIndex:1},{value:"There is no integrated data management library in the scaffolding, you can choose freely, or you can look at ",paraId:2,tocIndex:2},{value:"third-party library recommendations",paraId:3,tocIndex:2},{value:" .",paraId:2,tocIndex:2},{value:"If the project is a small basic data management library can not directly use ",paraId:4,tocIndex:2},{value:"useState",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"useReducer",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"useContext",paraId:4,tocIndex:2},{value:" can be.",paraId:4,tocIndex:2},{value:"It is recommended to use ",paraId:5,tocIndex:2},{value:"valtio",paraId:5,tocIndex:2},{value:" .",paraId:5,tocIndex:2},{value:"In the past, some build tools and scaffolding were made internally, such as ",paraId:6,tocIndex:3},{value:"doly-cli",paraId:6,tocIndex:3},{value:", but later they didn't have the time and energy to maintain them.",paraId:6,tocIndex:3},{value:"Tools/scaffolding are not unified, and the update and maintenance are not timely",paraId:7,tocIndex:3},{value:"Most projects do not need to support SSR",paraId:7,tocIndex:3},{value:"...",paraId:7,tocIndex:3},{value:"The final adoption ",paraId:8,tocIndex:3},{value:"React",paraId:8,tocIndex:3},{value:" official scaffold extension, upgrade and maintenance.",paraId:8,tocIndex:3},{value:"The scaffolding does not support SSR. If you need to implement SSR, ",paraId:9,tocIndex:3},{value:"Next.js",paraId:9,tocIndex:3},{value:" recommended .",paraId:9,tocIndex:3},{value:"The official is almost no longer maintained, and it is recommended to use ",paraId:10,tocIndex:3},{value:"vite-template-doly",paraId:10,tocIndex:3},{value:".",paraId:10,tocIndex:3},{value:"Supported Browsers and Features",paraId:11,tocIndex:4},{value:"By default, the generated project supports all modern browsers.",paraId:12,tocIndex:4},{value:"If you need a polyfill to support Internet Explorer 9, 10, and 11, please use ",paraId:13,tocIndex:4},{value:"react-app-polyfill",paraId:13,tocIndex:4},{value:" . It also needs to ",paraId:13,tocIndex:4},{value:"package.json",paraId:13,tocIndex:4},{value:" be configured ",paraId:13,tocIndex:4},{value:"browserslist",paraId:13,tocIndex:4},{value:" in .",paraId:13,tocIndex:4},{value:"Compatible with ie9 Example:",paraId:14,tocIndex:4},{value:"src/index.tsx",paraId:15,tocIndex:4},{value:`// first line import
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// ...
`,paraId:16,tocIndex:4},{value:"package.json",paraId:17,tocIndex:4},{value:`{
  "browserslist":{
    "production":[
      // ...
      "ie >= 9"
    ] ,

    // If you need the development environment to be compatible with ie9, set development
    "development":[
      // ...
      "ie >= 9"
    ]
  }
}
`,paraId:18,tocIndex:4}]},34260:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"In the process of separate front-end and back-end development, at the beginning, the front-end and back-end must agree on the interface, and then develop separately.",paraId:0,tocIndex:1},{value:"At this time, the front end needs to simulate the request and response of the interface in order to achieve the purpose of fidelity development. And when debugging some problems, you can fake boundary data for verification.",paraId:1,tocIndex:1},{value:"You only need to ",paraId:2,tocIndex:1},{value:"mock",paraId:2,tocIndex:1},{value:" directory, create a new ",paraId:2,tocIndex:1},{value:"*.mock.js",paraId:2,tocIndex:1},{value:" file, supports the following ways:",paraId:2,tocIndex:1},{value:`module.export = {
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
`,paraId:10,tocIndex:2},{value:"You can start local joint debugging!",paraId:11,tocIndex:2},{value:"If the interface and ",paraId:12,tocIndex:2},{value:"mock",paraId:12,tocIndex:2},{value:" in the case of consistent data, the FBI almost no problem, which is ",paraId:12,tocIndex:2},{value:"mock",paraId:12,tocIndex:2},{value:" one of the benefits.",paraId:12,tocIndex:2}]},66795:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"src",paraId:0,tocIndex:0},{value:" Use directory ",paraId:0,tocIndex:0},{value:"bmp",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"gif",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"jpg",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"jpeg",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"png",paraId:0,tocIndex:0},{value:" files, and less ",paraId:0,tocIndex:0},{value:"10000 B",paraId:0,tocIndex:0},{value:" will automatically be converted ",paraId:0,tocIndex:0},{value:"data URI",paraId:0,tocIndex:0},{value:" .",paraId:0,tocIndex:0},{value:"You can also in the ",paraId:1,tocIndex:0},{value:"config/env.js",paraId:1,tocIndex:0},{value:" set ",paraId:1,tocIndex:0},{value:"IMAGE_INLINE_SIZE_LIMIT",paraId:1,tocIndex:0},{value:" to be modified.",paraId:1,tocIndex:0},{value:"Style file name to use ",paraId:2,tocIndex:1},{value:"*.module.less",paraId:2,tocIndex:1},{value:" to open the ",paraId:2,tocIndex:1},{value:"CSS Modules",paraId:2,tocIndex:1},{value:" .",paraId:2,tocIndex:1},{value:"Highly recommended, regardless of ",paraId:3,tocIndex:2},{value:"class",paraId:3,tocIndex:2},{value:" naming conflicts.",paraId:3,tocIndex:2},{value:"Button.module.less",paraId:4,tocIndex:2},{value:`.button {
  padding: 20px;
}
`,paraId:5,tocIndex:2},{value:"Button.tsx",paraId:6,tocIndex:2},{value:`import styles from './Button.module.less';

const Button = () => {
  return <div className={styles.button} />;
};
`,paraId:7,tocIndex:2},{value:"Not recommended if there is a need to use global style, in ",paraId:8,tocIndex:3},{value:"src/index.less",paraId:8,tocIndex:3},{value:" in writing. Local can use ",paraId:8,tocIndex:3},{value:":global",paraId:8,tocIndex:3},{value:" ",paraId:8,tocIndex:3},{value:":local",paraId:8,tocIndex:3},{value:" in ",paraId:8,tocIndex:3},{value:"*.module.less",paraId:8,tocIndex:3},{value:".",paraId:8,tocIndex:3},{value:"Button.less",paraId:9,tocIndex:3},{value:`.button {
  padding: 20px;
}
`,paraId:10,tocIndex:3},{value:"Button.tsx",paraId:11,tocIndex:3},{value:`import './Button.less';

const Button = () => {
  return <div className="button" />;
};
`,paraId:12,tocIndex:3},{value:"After initializing the project, please modify the files in the public directory according to your business",paraId:13,tocIndex:4},{value:"src",paraId:14,tocIndex:4},{value:" After the resources in the directory are built, the file names will be added ",paraId:14,tocIndex:4},{value:"hash",paraId:14,tocIndex:4},{value:" \u3002",paraId:14,tocIndex:4},{value:`import logo from './logo.png';

console.log(logo); // logo.84287d09.png

function Header() {
  return <img src={logo} alt="Logo" />;
}

export default Header;
`,paraId:15,tocIndex:4},{value:"public",paraId:16,tocIndex:4},{value:" Resource directory at compile time will be copied directly to the ",paraId:16,tocIndex:4},{value:"dist",paraId:16,tocIndex:4},{value:" directory, the file name will not change.",paraId:16,tocIndex:4},{value:`function Header() {
  return <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />;
}

export default Header;
`,paraId:17,tocIndex:4},{value:"You may also be ",paraId:18,tocIndex:4},{value:"external scripts",paraId:18,tocIndex:4},{value:" ",paraId:18,tocIndex:4},{value:"check file",paraId:18,tocIndex:4},{value:" other resources on the ",paraId:18,tocIndex:4},{value:"public",paraId:18,tocIndex:4},{value:" folder.",paraId:18,tocIndex:4}]},65904:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"antd-mobile",paraId:0,tocIndex:1},{value:" + ",paraId:0,tocIndex:1},{value:"mobile-more",paraId:0,tocIndex:1},{value:"antd",paraId:0,tocIndex:1},{value:" + ",paraId:0,tocIndex:1},{value:"antd-more",paraId:0,tocIndex:1},{value:"mui",paraId:0,tocIndex:1},{value:"semi",paraId:0,tocIndex:1},{value:"arco",paraId:0,tocIndex:1},{value:"nextui",paraId:0,tocIndex:1},{value:"daisyui",paraId:0,tocIndex:1},{value:"doly-icons",paraId:1,tocIndex:2},{value:"iconpark",paraId:1,tocIndex:2},{value:"iconfont",paraId:1,tocIndex:2},{value:"valtio",paraId:2,tocIndex:3},{value:"mobx",paraId:2,tocIndex:3},{value:" + ",paraId:2,tocIndex:3},{value:"mobx-state-tree",paraId:2,tocIndex:3},{value:"redux",paraId:2,tocIndex:3},{value:"hox",paraId:2,tocIndex:3},{value:"rc-hooks",paraId:3,tocIndex:4},{value:"ahooks",paraId:3,tocIndex:4},{value:"ut2",paraId:4,tocIndex:5},{value:"util-helpers",paraId:4,tocIndex:5},{value:"vConsole",paraId:5,tocIndex:6},{value:"eruda",paraId:5,tocIndex:6},{value:"mockjs",paraId:6,tocIndex:7},{value:"mockjs-extend",paraId:6,tocIndex:7},{value:"faker",paraId:6,tocIndex:7},{value:"polished",paraId:7,tocIndex:8},{value:"tailwindcss",paraId:7,tocIndex:8},{value:"react-transition-group",paraId:8,tocIndex:9},{value:"react-spring",paraId:8,tocIndex:9},{value:"Animate.css",paraId:8,tocIndex:9},{value:"cache2",paraId:9,tocIndex:10},{value:"store2",paraId:9,tocIndex:10}]},29692:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"You can quickly start the development service with the following command:",paraId:0,tocIndex:0},{value:`npx create-react-app my-app --template doly # Create an application

cd my-app

npm install # trigger hook

npm start # Start local development service
`,paraId:1,tocIndex:0},{value:"Or you are using ",paraId:2,tocIndex:0},{value:"npm",paraId:2,tocIndex:0},{value:" :",paraId:2,tocIndex:0},{value:`yarn create react-app my-app --template doly # Create an application

cd my-app

yarn install # trigger hook

yarn start # Start local development service
`,paraId:3,tocIndex:0},{value:"need help? Read the ",paraId:4,tocIndex:0},{value:"developer documentation",paraId:5,tocIndex:0},{value:" ,if not resolved, you can go to ",paraId:4,tocIndex:0},{value:"GitHub",paraId:4,tocIndex:0},{value:" to ask questions on.",paraId:4,tocIndex:0}]}}]);
