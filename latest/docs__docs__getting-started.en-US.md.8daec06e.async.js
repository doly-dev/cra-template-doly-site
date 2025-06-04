"use strict";(self.webpackChunkcra_template_doly_site=self.webpackChunkcra_template_doly_site||[]).push([[196],{47837:function(s,n,_){_.r(n);var d=_(22035),u=_(9099),i=_(75799),m=_(6434),p=_(32966),a=_(67779),h=_(72702),x=_(51273),r=_(4434),o=_(80879),l=_(75271),t=_(24557),e=_(52676);function c(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"getting-started",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Getting Started"]}),(0,e.jsxs)("h2",{id:"environmental-preparation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#environmental-preparation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Environmental preparation"]}),(0,e.jsx)("ul",{children:(0,e.jsxs)("li",{children:[(0,e.jsx)("a",{href:"http://nodejs.org/",children:t.texts[0].value}),t.texts[1].value]})}),(0,e.jsxs)("h2",{id:"initialize-the-project",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#initialize-the-project",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Initialize the project"]})]}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(a.Z,{title:"npm",lang:"bash",children:t.texts[2].value}),(0,e.jsx)(a.Z,{title:"yarn",lang:"bash",children:t.texts[3].value})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"directory-structure",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#directory-structure",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Directory Structure"]}),(0,e.jsx)(a.Z,{lang:"text",children:t.texts[4].value}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:(0,e.jsxs)("mark",{children:[t.texts[5].value,(0,e.jsx)("code",{children:t.texts[6].value}),t.texts[7].value]})})}),(0,e.jsxs)("h2",{id:"startup-project",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#startup-project",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Startup project"]}),(0,e.jsx)(a.Z,{lang:"shell",children:t.texts[8].value}),(0,e.jsxs)("p",{children:[t.texts[9].value,(0,e.jsx)("code",{children:t.texts[10].value}),t.texts[11].value]}),(0,e.jsxs)("h2",{id:"build",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#build",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Build"]}),(0,e.jsx)(a.Z,{lang:"shell",children:t.texts[12].value}),(0,e.jsxs)("p",{children:[t.texts[13].value,(0,e.jsx)("code",{children:t.texts[14].value}),t.texts[15].value]})]})]})})})}n.default=c},24557:function(s,n,_){_.r(n),_.d(n,{texts:function(){return d}});const d=[{value:"nodejs",paraId:0,tocIndex:1},{value:" \u2267 14",paraId:0,tocIndex:1},{value:`npx create-react-app my-app --template doly

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
`,paraId:7,tocIndex:5},{value:"Resources in the package ",paraId:8,tocIndex:5},{value:"dist",paraId:8,tocIndex:5},{value:" distdirectory.",paraId:8,tocIndex:5}]}}]);
