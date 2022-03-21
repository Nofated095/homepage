import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { defineHopeConfig } from "vuepress-theme-hope";

export default defineHopeConfig({
  lang: 'zh-CN',
  title: 'Nofated',
  description: 'I hope to be with you everyday.',

  themeConfig: {
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
      ],
    },

    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2022-present Nofated",
    }
  },
})
