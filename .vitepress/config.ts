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
      { text: '解决方案', link: '/guide/why-electron-vite' },
      { text: '产品说明', link: '/guide/why-electron-vite' },
      { text: 'FAQ', link: '/faq/electron-forge' },
      { text: '产品日志', link: '/guide/why-electron-vite' },
    ],
    sidebar: [

      {
        text: '全局说明',
        collapsed: false,
        items: [
          { text: '1.框架说明', link: '/client/index' },
          { text: '2.状态码', link: '/client/session' },
          { text: '3.短信服务', link: '/client/conversation' },
          { text: '4.OSS说明', link: '/client/conversation' },

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
