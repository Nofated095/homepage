module.exports = {

    // host: '0.0.0.0',  // 生成网页地址（本地调试使用）
    // port: '6666',  // 生成网页端口（本地调试使用）
    title: "Restent Blog",  // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '一步步走过的路，永远值得你怀念。',  // meta 中的描述文字，用于SEO
    head: [
      ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/Restent/Restent@master/Favicon.ico' }],  //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }], //在移动端，搜索框在获得焦点时会放大
    ],
  
    theme: 'reco',  //选择主题‘reco’
    themeConfig: {
      type: 'blog', //选择类型博客
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认 “分类”
        },
        tag: {
          location: 3, // 在导航栏菜单中所占的位置，默认3
          text: '标签' // 默认 “标签”
        },
      },
      nav: [  //导航栏设置
        { text: '主页', link: 'https://www.restent.win', icon: 'reco-home' },
        { text: '关于', link: '/about/', icon: 'reco-account' },
        { text: '友链', link: '/friends/', icon: 'reco-api' }
      ],
      sidebar: 'auto',  //在所有页面中启用自动生成侧栏
      startYear: '2019', // 项目开始时间，只填写年份
      lastUpdated: '最后更新时间', // string | boolean
      author: 'Restent Ou',
      authorAvatar: 'https://cdn.jsdelivr.net/gh/Restent/Restent@master/avatar.jpg',  //作者头像
      mode: 'light',  //默认显示白天模式
      // 评论设置
      valineConfig: {
        appId: 'GFzqUiRal3601kVzHJs3SqAW-MdYXbMMI',// your appId
        appKey: 'qkHdb3qOlc9ommoEaU0HuxK9', // your appKey
      },
      friendLink: [
        {
          title: 'Ray',
          desc: '勿忘初心，方得始终',
          logo: "https://pro-video.xiaoheiban.cn/jaj/cb254102-aa64-4051-af5f-77a325f14ff7.png",
          link: 'https://blog.r-ay.cn'
        },
        {
          title: 'Lemon_miaow',
          desc: '',
          logo: "https://lemonmiaow.xyz/medias/logo.png",
          link: 'https://lemonmiaow.xyz'
        },
        {
          title: 'Shiro',
          desc: '你才是⑨！你全家都是⑨！',
          logo: "https://img2.moeblog.vip/images/OlSg.th.jpg",
          link: 'https://moeblog.vip'
        },
        {
          title: 'Fidel',
          desc: '不乱于心，不困于情。不畏将来，不念过往。',
          logo: "//cdn.jsdelivr.net/gh/Fidelxyz/fidelxyz.github.io@latest/images/avatar.webp",
          link: 'https://fidel.js.org'
        },
        {
          title: 'HackerRouter',
          desc: '往者不可谏，来者犹可追。',
          logo: "https://hackerrouter.xyz/images/avatar.png",
          link: 'https://hackerrouter.xyz'
        },
        {
          title: 'Steven Qiu',
          desc: '愿你有一天，能与你最重要的人重逢。',
          logo: "https://www.littleqiu.net/images/Avatar.png",
          link: 'https://www.littleqiu.net'
        },
        {
          title: 'Enjoy',
          desc: '过分的神圣，往往比恶魔更加恶质。',
          logo: "https://mcenjoy.cn/wp-content/uploads/2019/06/u13286371072291463876fm26gp0.jpg",
          link: 'https://mcenjoy.cn'
        },
        {
          title: 'Cheny',
          desc: '明天的事，交给明天的我',
          logo: "https://cdn.jsdelivr.net/gh/Cheny233/cheny233.github.io@latest/images/avatar.png",
          link: 'https://cheny.cc'
        },
        {
          title: 'dz_paji',
          desc: '很强大的人',
          logo: "https://blog.mntpaji.com/images/avatar.png",
          link: 'https://blog.mntpaji.com'
        },
        {
          title: 'Pig Fang',
          desc: '轨道交通爱好者',
          logo: "https://blog.gplane.win/favicon.png",
          link: 'https://blog.gplane.win'
        },
        {
          title: 'Nofated',
          desc: '终究还是叫醒你了呢',
          logo: "https://pic.rmb.bdstatic.com/bjh/020a46e8318d66b55d73afe31805d653.jpeg",
          link: 'https://nofated095.github.io'
        },
        {
          title: '欠陥電気',
          desc: 'Misaka13514的小站',
          logo: "https://secure.gravatar.com/avatar/bedbc698e8dbf819a84b440b9ad0ee8e?s=256",
          link: 'https://blog.atri.tk'
        },
        {
          title: 'StarTrail',
          desc: '差之毫厘，谬以千里',
          link: 'https://startrails.top'
        },
      ]
    },
       // 导航栏 Logo
       logo: '' // 已注释，没必要
    }
  
    markdown: {
      lineNumbers: true //代码显示行号
    }
    // 搜索设置
    search: true