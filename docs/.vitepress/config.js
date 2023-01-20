
export default {
  title: "Playwright Kitchen",
  description: 'This is an example app used to showcase Playwright.dev testing. For a full reference of playwright documentation.',
  base: '/playwright-kitchen/',
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  // head: [
  //   // 改变title的图标
  //   [
  //     'link',
  //     {
  //       rel: 'icon',
  //       href: '/img/linktolink.png',//图片放在public文件夹下
  //     },
  //   ],
  // ],
  // 主题配置
  themeConfig: {
    // repo: 'vuejs/vitepress', // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '关于', link: '/about/' },
    // ],
    //   侧边导航
    sidebar: [
      { 
        text: 'Guide',
        items: [
          {
            text: "Actions",
            link: "/guides/actions"
          },
          {
            text: "Assertions",
            link: "/guides/assertions"
          }
        ],
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Mine Lu'
    }
  },
}