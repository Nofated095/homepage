import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { defineHopeConfig } from "vuepress-theme-hope";

export default defineHopeConfig({
  lang: 'zh-CN',
  title: 'Nofated',
  description: 'I hope to be with you everyday.',
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],
  
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
        text: 'GitHub',
        link: 'https://github.com/Nofated095',
      }
    ],

    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2022-present Nofated",
    }
  },
})
