"use strict";(self.webpackChunkcra_template_doly_site=self.webpackChunkcra_template_doly_site||[]).push([[196],{68121:function(d,n,t){t.r(n);var s=t(22980),m=t(45926),r=t(84833),l=t(58300),p=t(44390),a=t(43362),h=t(81296),x=t(76366),i=t(33217),o=t(78165),c=t(75271),_=t(79322),e=t(52676);function u(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(c.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h1",{id:"getting-started",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Getting Started"]})}),(0,e.jsx)(l.Z,{type:"warning",children:(0,e.jsxs)("p",{children:[_.texts[0].value,(0,e.jsx)("a",{href:"https://github.com/doly-dev/vite-template-doly",children:_.texts[1].value}),_.texts[2].value]})}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"environmental-preparation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#environmental-preparation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Environmental preparation"]}),(0,e.jsx)("ul",{children:(0,e.jsxs)("li",{children:[(0,e.jsx)("a",{href:"http://nodejs.org/",children:_.texts[3].value}),_.texts[4].value]})}),(0,e.jsxs)("h2",{id:"initialize-the-project",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#initialize-the-project",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Initialize the project"]})]}),(0,e.jsxs)(r.Z,{children:[(0,e.jsx)(a.Z,{title:"npm",lang:"bash",children:_.texts[5].value}),(0,e.jsx)(a.Z,{title:"yarn",lang:"bash",children:_.texts[6].value})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"directory-structure",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#directory-structure",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Directory Structure"]}),(0,e.jsx)(a.Z,{lang:"text",children:_.texts[7].value}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:(0,e.jsxs)("mark",{children:[_.texts[8].value,(0,e.jsx)("code",{children:_.texts[9].value}),_.texts[10].value]})})}),(0,e.jsxs)("h2",{id:"startup-project",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#startup-project",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Startup project"]}),(0,e.jsx)(a.Z,{lang:"shell",children:_.texts[11].value}),(0,e.jsxs)("p",{children:[_.texts[12].value,(0,e.jsx)("code",{children:_.texts[13].value}),_.texts[14].value]}),(0,e.jsxs)("h2",{id:"build",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#build",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Build"]}),(0,e.jsx)(a.Z,{lang:"shell",children:_.texts[15].value}),(0,e.jsxs)("p",{children:[_.texts[16].value,(0,e.jsx)("code",{children:_.texts[17].value}),_.texts[18].value]})]})]})})})}n.default=u},79322:function(d,n,t){t.r(n),t.d(n,{texts:function(){return s}});const s=[{value:"Since the cra-template has not been maintained for a long time, it is recommended to use ",paraId:0},{value:"vite-template-doly",paraId:0},{value:".",paraId:0},{value:"nodejs",paraId:1,tocIndex:1},{value:" \u2267 14",paraId:1,tocIndex:1},{value:`npx create-react-app my-app --template doly

cd my-app

npm install # trigger hook
`,paraId:2},{value:`yarn create react-app my-app --template doly

cd my-app

yarn install # trigger hook
`,paraId:3},{value:`.
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
`,paraId:4,tocIndex:3},{value:"Please modify according to business ",paraId:5,tocIndex:3},{value:"public",paraId:5,tocIndex:3},{value:" documents and content in",paraId:5,tocIndex:3},{value:`yarn start
`,paraId:6,tocIndex:4},{value:"The browser automatically accesses it ",paraId:7,tocIndex:4},{value:"http://localhost:3000",paraId:7,tocIndex:4},{value:" .",paraId:7,tocIndex:4},{value:`yarn build
`,paraId:8,tocIndex:5},{value:"Resources in the package ",paraId:9,tocIndex:5},{value:"dist",paraId:9,tocIndex:5},{value:" distdirectory.",paraId:9,tocIndex:5}]}}]);
