import { defineConfig } from 'dumi';
import pkg from './package.json';

const { BUIDL_DOC_VERSION, NODE_ENV } = process.env;
const MajorVersionNumber = pkg.version.split('.')[0];
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;
const version = BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const serverRootDirect = NODE_ENV === 'production' ? `/${pkg.name}/` : '/';
const outputPath = 'dist';
const publicPath = serverRootDirect + version + '/';

let prodConfig: any = {};

if (NODE_ENV === 'production') {
  prodConfig.headScripts = [
    { src: 'https://www.googletagmanager.com/gtag/js?id=G-CTKFHCWM1R', async: true },
    {
      content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CTKFHCWM1R');
    `
    }
  ];
  prodConfig.chunks = ['vendors', 'umi'];
  prodConfig.chainWebpack = function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true
            }
          }
        }
      }
    });
  };
}

export default defineConfig({
  history: {
    type: 'hash'
  },
  publicPath,
  outputPath,
  hash: true,
  title: 'cra-template-doly',
  mode: 'site',
  logo: 'https://www.caijinfeng.com/assets/images/logo-doly@3x.png',
  favicon: 'https://www.caijinfeng.com/assets/images/doly-touch-icon_48x48.png',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English']
  ],
  navs: {
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/doly-dev/cra-template-doly'
      }
    ],
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/doly-dev/cra-template-doly'
      }
    ]
  },
  ...prodConfig

  // more config: https://d.umijs.org/config
});
