---
title: 从 Hexo 迁移至 VuePress
date: '2021-02-05 13:46:00'
sidebar: 'auto'
categories:
- 日常
tags:
- Vue
---
最近用 VuePress 重新搞了 Restent Blog。

## 为什么不再是 Hexo？

不得不说，Hexo 的生态还是很好的。很多功能都可以安装插件进行实现，并且自动部署这一方面，Netlify 和 Vercel 都有一键生成和部署支持。

但是，Hexo 在 Categories 和 Tags 这两个页面的应用还是非常的不行。如果主题不支持，那么这两个页面只会显示它们默认的标题，就比如我配套使用的 Meadow 主题：它支持 Categories 的显示，但是它不支持 Tags 的显示。

并且，Hexo 的 HTML 并不是预渲染的。我用 Vercel 的解析和 CDN 还好，如果是之前的 CloudFlare + Github Pages 的话，简直能慢死。详细一点的话：Meadow 主题的部分图形画面就是因为 Hexo 加载太慢，然后卡出了奇奇怪怪的 CSS。

## 为什么是 VuePress？

::: tip VuePress 的介绍

注：以下内容来自 VuePress 官方文档。

VuePress 由两部分组成：第一部分是一个极简静态网站生成器，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

:::

我要讲的大部分内容可以参考 VuePress 的介绍。

首先，VuePress 是有博客主题的，VuePress 团队在他们的官方文档有提到，就比如现在配套使用的 vuepress-theme-reco 就是一款优秀的 VuePress 主题；其次，预渲染好的 HTML 带来的速度与 CDN 配套，会给访客带来很不错的体验。

## 自动部署

虽然 Vercel 没有对 VuePress 进行无繁琐配置的自动部署操作，但其实这没必要，因为用户上传的 VuePress 目录结构是不一样的。

目前我是填写了 "yarn docs:build"（部署指令）以及 "docs/.vuepress/dist"（输出指令）进行 VuePress 部署，成效还是很不错的。

## 部署速度

VuePress 的第一次部署就会稍稍的慢一些。

但是第二次部署，yarn 部署时会寻找上一次部署的缓存，并且进行增量更新，以实现更快速的部署。最快我也算了一下，大概 20s。