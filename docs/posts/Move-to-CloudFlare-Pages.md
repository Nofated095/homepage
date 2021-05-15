---
title: 迁移至 CloudFlare Pages
date: '2021-05-15 22:17:36'
sidebar: 'auto'
categories:
- 技术
tags:
- CloudFlare
- 网页
---

## Vercel 被墙

前一段时间，我的主页和博客是放在 Vercel 上的，包括域名解析。

但是，最近一段时间，访问我的博客莫名其妙就会掉速，并且要等好久。不仅我的博客如此，连 [Pig Fang](https://blog.gplane.win) 的博客也会掉速（他也是托在 Vercel）。

而一看 LittleSkin 社区技术支持交流群，都说 Vercel 被墙了，有点难搞。

## 迁移到 CF Pages 的想法

之所以想到这个，是因为之前欠陥電気发了 [这一篇文章](https://blog.atri.tk/2021/deploy-frontend-to-cfpages/)，才知道 CloudFlare 推出了 Pages 服务。

而如今，Github Pages 肯定是不可能了的，因为我有两个网站项目，那就 CloudFlare Pages 吧。

## 开始动工

这一部分简直是随便说说都可以。

先是在 Dynadot 上把 NS 服务器改成 CloudFlare 的，然后在 CloudFlare 上添加解析。

然后进入 CloudFlare Pages，添加项目。*因为目前我就只有 Github 账户，所以只限制 Github 项目对我来说根本没有影响。*博客我一直在用自动部署，而 CloudFlare Pages 正好有 VuePress 的自动部署，我再按照实际情况填写了一下 Build Command 和 Output Directory，然后就部署成功了 :thinking:。

主页更加简单，只需要把 dist 里的文件扔到一个 Github 仓库，然后再新开一个 CloudFlare Pages 项目，导向这个仓库，再无脑下一步，就部署成功了。

解析好的域名可以直接在 CloudFlare Pages 控制台里添加，不需要去域名控制台自己弄，感觉还是很不错的。

## 效果

裸连了一下，感觉速度和 Vercel 不相上下，还是很不错的。