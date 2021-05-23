---
title: 急救 Whyred
date: '2021-05-05 15:00:00'
sidebar: 'auto'
categories:
- 技术
tags:
- 手机
---

::: tip

由于操作过程就很简单，所以写的简单了一点，请不要在意 :smile:

:::

前一天还是两天，我爸用 2499 安利了一部 Redmi K40，而他的 Redmi K30 落入了我的手里，成功解决了别的同学买新手机，而我得继续用 Whyred 的现实。

而，我用我的小米账号登了 Redmi K30，导致它必须等 7 天才可以刷机。反正 Whyred 迟早被我妈扔进柜子里，所以我试着刷了一下 MIUI Global。

但是，刷完之后，OrangeFox 提示我（大概是这样）：

> If you reboot when finish flashing MIUI, it will changed recovery from OrangeFox to Stock MIUI Recovery.

我没有在意这句话，直接格式化 Data 然后重启了。

开是开得了机，并且设置之类的也没有问题，但偏偏到要完成那一步，Google 提示 **“必须要登录 Google 账户，否则无法完成设置向导”**。而我手边的设备全是 MIUI CN 的，直接开飞机也不太可能，干脆回到 Recovery 刷个别的 ROM 好了。

可是我没有注意上面 OrangeFox 给我的提示，回到 Recovery 一看，好家伙，是 MIUI 的 Recovery！

还好手机是 Unlock 状态，我还可以用 fastboot 刷进去。

## Windows 平台下操作

ADB 怎么下载、手机怎么进入 Fastboot，我应该不用教了吧？

然后，我执行了个 `fastboot devices`，确实可以检测到设备。但但但但但是，偏偏到我执行 `fastboot flash recovery recovery.img` 的时候，电脑端无法写入，手机则提示：

> Press any key to reboot.

**？**

设备管理器，也能读出 *Android Phone*。

我试了以下的做法：

- 换数据线；

- 换 USB 插口（甚至后面的也试过了）；

- 检查 ADB 驱动是否正常，环境配置是否完好；

- 检查 Recovery 的镜像路径是否正确。

但，都不可以！

也就是说，不管怎么做，一旦执行 `fastboot flash recovery recovery.img` 就会出错，手机就要你重启。

我还试过了下载 wzsx150 的 TWRP，用他的制作工具刷 Recovery，结果还是报错。

特地去问了一下 Mashirl，他也不知道是什么原因。**......**

从昨天晚上开始到今天中午，我都没成功！

::: tip

我突然想到：我以前做过一个 Manjaro Linux 的移动硬盘！

好，那就试试在 Linux 上搞吧......

:::

## Linux 平台上操作

我从 XDA 论坛上下载了 ADB 的工具，并且在 Konsole 定好了向。

将手机重新进入 Fastboot，然后在 Konsole 打了 `fastboot devices`，可以识别。然后把 `recovery.img` 扔去 adb 工具文件夹里面，执行 `fastboot flash recovery recovery.img`。

起初，手机还是报错，我不甘心，按住手机的音量下键，多打了几次。没想到，这次 Konsole 提示了以下内容：

```

[restent@restent-manjaro-portable-pc platform-tools]$ fastboot flash recovery recovery.img

< waiting for any device >

Sending 'recovery' (46784 KB)

Writing 'recovery'

Finished. Total time: 1.884s

```

然后回到 Recovery 一看，是 OrangeFox！

## 继续 ROM 探索

MIUI Global 不行了，我刷了个 xiaomi.eu 的 ROM。也是能进，照样要登录 Google 账户才能完成设置向导......

于是我干脆刷了个 Evolution X，后面扔回柜子了看看再刷个 LineageOS。

## 总结

Windows 平台无法使用 ADB 的情况下，一定要记得试试 Linux 执行（