---
title: 暴力折腾 phoenix
date: '2021-05-15 22:16:36'
sidebar: 'auto'
categories:
- 技术
tags:
- 刷机
- phoenix
- Redmi K30
---
::: tip

由于咕咕咕太久，所以没有配图，将就看吧。

:::

由于我爸换了 Redmi K40，所以他的 Redmi K30 落入我手，直接和 whyred 说拜拜。

> 但是我在 whyred 上投入了不止 200 块......有点心痛。

## 解锁手机

我拿到 phoenix 的第一个反应就是：刷机！

但是，我提前把我爸的小米账号退出，登录了我的小米账号，导致必须等 7 days 才可以解锁。**我 ~~他妈~~ 好傻逼啊。**

**7 天过后......**

再一次打开了 MiFlash Unlock，解锁成功。

## 刷 TWRP

本来我想刷 OrangeFox 的，但是 phoenix 的 OrangeFox R11 还一直处在 Beta 状态，干脆还是刷了 TWRP。*又不是不能用*

## 刷 ArrowOS 11

ArrowOS 是我新追的一款 AOSP-based ROM，在 whyred 上试了一下感觉很不错。

但是，不知道为什么，TWRP 无法解密 Data 分区，并且我没有设定锁屏密码。情急之下，我想到了 ADB Sideload。

TWRP 一开 ADB Sideload，先在电脑端打 `adb devices` 看看能不能检测到手机，再来个 `adb sideload xxxxxx.zip`，然后电脑和手机一起出 Log，慢慢等就刷完了，最后再格式化 Data 分区就重启了。

## 刷 Magisk

由于很多因素需要用到模组，所以需要刷 Magisk。

刷的时候是晚上，节点莫名其妙直接掉速，所以拿了电脑上的 Magisk v22 和 Magisk App 扔进了手机里，第二天再更新 Magisk v23，然后把 Magisk Hide 一开就完事了。

## 刷 ANX Camera

::: tip 注释

ANX Camera 即 MIUI 12 Camera 提取模组，可以在非 MIUI 系统上使用 MIUI Camera。

:::

ArrowOS 自带的是 Google Camera Go，但这玩意精简到不好使，所以刷了个 ANX Camera。

仍旧是同一个晚上，ANX 的包就有 200+ MB，然后下载到 170 MB 就下载不了了，只好今天再下载并且刷进去。官方标注是 **支持 phoenix** 的，刚开始用可能会出一些小毛病，到后面就没有了。

## 刷 EdXposed

EdXposed 能提供更多的功能，比如保护你手机隐私的 XPrivacyLua。

刷 EdXposed 之前必须要刷入 Riru，否则无法刷入 EdXposed。

***

做完这一切，就可以恢复 Global APP 和国内某些流氓软件了~~（雾）~~。