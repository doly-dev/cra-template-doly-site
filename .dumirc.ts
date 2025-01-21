import { defineConfig } from 'dumi';
import pkg from './package.json';

const { BUIDL_DOC_VERSION, NODE_ENV } = process.env;
const MajorVersionNumber = pkg.version.split('.')[0];
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;
const version = BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const isDev = NODE_ENV === 'development';

const serverRootDirect = isDev ? '/' : `/${pkg.name}/`;
const publicPath = isDev ? '/' : serverRootDirect + version + '/';
const outputPath = 'dist';

export default defineConfig({
  themeConfig: {
    name: 'cra-template-doly',
    logo: 'https://doly-dev.github.io/logo.png',
    nav: {
      'zh-CN': [
        {
          title: '文档',
          link: '/docs'
        },
        {
          title: 'GitHub',
          link: 'https://github.com/doly-dev/cra-template-doly'
        }
      ],
      'en-US': [
        {
          title: 'Documents',
          link: '/docs'
        },
        {
          title: 'GitHub',
          link: 'https://github.com/doly-dev/cra-template-doly'
        }
      ]
    }
  },
  favicons: ['https://doly-dev.github.io/favicon.png'],
  history: {
    type: 'hash'
  },
  hash: true,
  base: publicPath,
  publicPath,
  outputPath,
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' }
  ],
  analytics: {
    ga_v2: 'G-CTKFHCWM1R'
  },
  styles: [
    `body .dumi-default-header-left {
      width: auto;
      margin-right: 24px;
    }`
  ]
  // more config: https://d.umijs.org/config
});
