import { defineConfig } from 'dumi';
import pkg from './package.json';

const { BUIDL_DOC_VERSION, NODE_ENV } = process.env;
const MajorVersionNumber = pkg.version.split('.')[0];
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;
const version = BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const isDev = NODE_ENV === 'development';

const serverRootDirect = !isDev ? `/${pkg.name}/` : '/';
const outputPath = 'dist';
const publicPath = serverRootDirect + version + '/';

let prodConfig: any = {};

if (!isDev) {
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
  logo: 'https://doly-dev.github.io/logo.png',
  favicon: 'https://doly-dev.github.io/favicon.png',
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
  // esbuild: NODE_ENV !== 'production',
  nodeModulesTransform: {
    type: isDev ? 'none' : 'all'
  },
  targets: {
    ie: 11
  },
  ...prodConfig

  // more config: https://d.umijs.org/config
});
