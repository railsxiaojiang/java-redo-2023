import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "更新云",
  description: "Creating desktop programs using Electron and vite",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/electron-vite.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'electron-vite.png' }],
    [
      'meta',
      { name: 'electron-vite', content: 'Creating desktop programs using Electron and vite' },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },


  themeConfig: {
    logo: '/electron-vite.png',
    nav: [
      { text: '后端文档', link: '/guide/why-electron-vite' },
      { text: '接口文档', link: 'https://besumeje80.apifox.cn/' },
    ],
    sidebar: [

      {
        text: '全局说明',
        collapsed: false,
        items: [
          { text: '1.框架说明', link: '/client/index' },
          { text: '2.状态码', link: '/global/status' },
          { text: '3.第三方服务', link: '/global/services' },

        ],
      },

      {
        text: '后端表字段说明',
        collapsed: false,
        items: [
          { text: '1.User', link: '/admin/index' },
          { text: '2.Company', link: '/admin/member' },
          { text: '3.UserMember', link: '/admin/member' },
          { text: '4.Company', link: '/admin/member' },


        ],
      },


      {
        text: '后端接口说明',
        collapsed: true,
        items: [
          { text: '1.登录接口', link: '/apis/session' },



        ],
      },

      {
        text: '接口详细说明',
        collapsed: true,
        items: [
          { text: '1.登录接口', link: '/apis/session' },



        ],
      },


      {
        text: '部署说明',
        collapsed: true,
        items: [
          { text: 'Electron Forge', link: '/faq/electron-forge' },

        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/railsxiaojiang' }
    ],

  },
})
