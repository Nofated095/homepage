module.exports = {

    // host: '0.0.0.0',  // 生成网页地址（本地调试使用）
    // port: '6666',  // 生成网页端口（本地调试使用）
    title: "Restent Blog",  // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'I need to learn to let myself go.',  // meta 中的描述文字，用于SEO
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
        { text: '首页', link: '/', icon: 'reco-home' },
        { text: '关于', link: '/about/', icon: 'reco-account' },
        { text: '友链', link: '/friends/', icon: 'reco-api' },
        { text: '返回主页', link: 'https://www.restent.xyz', icon: 'reco-home' }
      ],
      sidebar: 'auto',  //在所有页面中启用自动生成侧栏
      startYear: '2019', // 项目开始时间，只填写年份
      lastUpdated: '最后更新时间', // string | boolean
      author: 'Restent Ou',
      authorAvatar: 'https://cdn.jsdelivr.net/gh/Restent/Restent@master/avatar.jpg',  //作者头像
      mode: 'light',  //默认显示白天模式
      // 评论设置
      vssueConfig: {
        platform: 'github',
        owner: 'Restent',
        repo: 'Restent-Blog-Service',
        clientId: '785215f270ba4a243a5f',
        clientSecret: 'ae703ea838a920de16e037ffcb2be9c8354ef955',
      },
       // 导航栏 Logo
       logo: 'https://cdn.jsdelivr.net/gh/Restent/Restent@master/avatar.jpg'
    },
  
    markdown: {
      lineNumbers: true //代码显示行号
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10
  }