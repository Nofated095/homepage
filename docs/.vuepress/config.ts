import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Nofated',
  description: 'I hope to be with you everyday.',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://cravatar.eu/helmhead/Nofated',
    head: [['link', { rel: 'icon', href: 'https://cravatar.eu/helmhead/Nofated' }]],
  navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Blog',
        link: 'https://blog.nofated.win',
      },
      {
        text: 'OneDrive',
        link: 'https://od.nofated.win',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Nofated095',
      },
    ],
  },
})
