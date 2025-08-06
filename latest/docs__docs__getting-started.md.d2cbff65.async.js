"use strict";(self.webpackChunkcra_template_doly_site=self.webpackChunkcra_template_doly_site||[]).push([[943],{85971:function(l,t,n){n.r(t);var d=n(22980),m=n(45926),s=n(84833),r=n(58300),p=n(44390),a=n(43362),x=n(81296),h=n(76366),o=n(33217),i=n(78165),u=n(75271),e=n(40864),_=n(52676);function c(){return(0,_.jsx)(o.dY,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(i.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h1",{id:"\u5FEB\u901F\u4E0A\u624B",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u4E0A\u624B",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u4E0A\u624B"]})}),(0,_.jsx)(r.Z,{type:"warning",children:(0,_.jsxs)("p",{children:[e.texts[0].value,(0,_.jsx)("a",{href:"https://github.com/doly-dev/vite-template-doly",children:e.texts[1].value}),e.texts[2].value]})}),(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u73AF\u5883\u51C6\u5907",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u73AF\u5883\u51C6\u5907",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u73AF\u5883\u51C6\u5907"]}),(0,_.jsx)("ul",{children:(0,_.jsxs)("li",{children:[(0,_.jsx)("a",{href:"http://nodejs.org/",children:e.texts[3].value}),e.texts[4].value]})}),(0,_.jsxs)("h2",{id:"\u521D\u59CB\u5316\u9879\u76EE",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521D\u59CB\u5316\u9879\u76EE",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u521D\u59CB\u5316\u9879\u76EE"]})]}),(0,_.jsxs)(s.Z,{children:[(0,_.jsx)(a.Z,{title:"npm",lang:"bash",children:e.texts[5].value}),(0,_.jsx)(a.Z,{title:"yarn",lang:"bash",children:e.texts[6].value})]}),(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u76EE\u5F55\u7ED3\u6784",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u76EE\u5F55\u7ED3\u6784",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u76EE\u5F55\u7ED3\u6784"]}),(0,_.jsx)(a.Z,{lang:"text",children:e.texts[7].value}),(0,_.jsx)("p",{children:(0,_.jsx)("strong",{children:(0,_.jsxs)("mark",{children:[e.texts[8].value,(0,_.jsx)("code",{children:e.texts[9].value}),e.texts[10].value]})})}),(0,_.jsxs)("h2",{id:"\u542F\u52A8\u9879\u76EE",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u542F\u52A8\u9879\u76EE",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u542F\u52A8\u9879\u76EE"]}),(0,_.jsx)(a.Z,{lang:"bash",children:e.texts[11].value}),(0,_.jsxs)("p",{children:[e.texts[12].value,(0,_.jsx)("code",{children:e.texts[13].value}),e.texts[14].value]}),(0,_.jsxs)("h2",{id:"\u6784\u5EFA",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6784\u5EFA",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u6784\u5EFA"]}),(0,_.jsx)(a.Z,{lang:"bash",children:e.texts[15].value}),(0,_.jsxs)("p",{children:[e.texts[16].value,(0,_.jsx)("code",{children:e.texts[17].value}),e.texts[18].value]})]})]})})})}t.default=c},40864:function(l,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u7531\u4E8E cra-template \u957F\u671F\u4E0D\u7EF4\u62A4\uFF0C\u63A8\u8350\u4F7F\u7528 ",paraId:0},{value:"vite-template-doly",paraId:0},{value:"\u3002",paraId:0},{value:"nodejs",paraId:1,tocIndex:1},{value:" \u2267 14",paraId:1,tocIndex:1},{value:`npx create-react-app my-app --template doly

cd my-app

npm install # \u89E6\u53D1 hook
`,paraId:2},{value:`yarn create react-app my-app --template doly

cd my-app

yarn install # \u89E6\u53D1 hook
`,paraId:3},{value:`.
\u251C\u2500\u2500 config
\u2502   \u251C\u2500\u2500 config.js            # craco \u914D\u7F6E\u6587\u4EF6
\u2502   \u251C\u2500\u2500 env.js               # \u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u2502   \u251C\u2500\u2500 proxy.js             # \u4EE3\u7406\u914D\u7F6E\uFF0C\u5BF9\u5E94\u73AF\u5883\u53D8\u91CF REACT_APP_ENV
\u2502   \u251C\u2500\u2500 zip.js               # zip \u5305\u914D\u7F6E
\u251C\u2500\u2500 dist                     # \u6784\u5EFA\u7ED3\u679C
\u251C\u2500\u2500 zip                      # \u6253\u5305\u538B\u7F29\u6784\u5EFA\u7ED3\u679C
\u251C\u2500\u2500 mock                     # mock \u6570\u636E
\u251C\u2500\u2500 public
\u2502   \u251C\u2500\u2500 favicon.ico          # favicon
\u2502   \u251C\u2500\u2500 index.html           # html
\u2502   \u251C\u2500\u2500 logo.png             # logo
\u2502   \u251C\u2500\u2500 manifest.json        # \u7528\u6765\u544A\u77E5\u6D4F\u89C8\u5668\u5173\u4E8E PWA \u5E94\u7528\u4FE1\u606F
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 assets               # \u9759\u6001\u8D44\u6E90\uFF0C\u5982\u56FE\u7247\u3001\u6837\u5F0F\u3001\u5B57\u4F53\u7B49
\u2502   \u251C\u2500\u2500 components           # \u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 models               # \u6570\u636E\u7BA1\u7406
\u2502   \u251C\u2500\u2500 pages                # \u9875\u9762
\u2502   \u251C\u2500\u2500 services             # \u540E\u53F0\u63A5\u53E3\u670D\u52A1
\u2502   \u251C\u2500\u2500 utils                # \u5DE5\u5177
\u2502   \u251C\u2500\u2500 index.tsx            # \u9879\u76EE\u5165\u53E3\u6587\u4EF6
\u2502   \u251C\u2500\u2500 index.less           # \u5168\u5C40\u6837\u5F0F
\u2502   \u251C\u2500\u2500 router.tsx           # \u8DEF\u7531\u914D\u7F6E
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 README.md
`,paraId:4,tocIndex:3},{value:"\u8BF7\u6839\u636E\u4E1A\u52A1\u4FEE\u6539 ",paraId:5,tocIndex:3},{value:"public",paraId:5,tocIndex:3},{value:" \u4E0B\u7684\u6587\u4EF6\u548C\u5185\u5BB9",paraId:5,tocIndex:3},{value:`yarn start
`,paraId:6,tocIndex:4},{value:"\u6D4F\u89C8\u5668\u81EA\u52A8\u8BBF\u95EE ",paraId:7,tocIndex:4},{value:"http://localhost:3000",paraId:7,tocIndex:4},{value:" \u3002",paraId:7,tocIndex:4},{value:`yarn build
`,paraId:8,tocIndex:5},{value:"\u6253\u5305\u540E\u7684\u8D44\u6E90\u5728 ",paraId:9,tocIndex:5},{value:"dist",paraId:9,tocIndex:5},{value:" \u76EE\u5F55\u3002",paraId:9,tocIndex:5}]}}]);
