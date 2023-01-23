
export default {
  title: "Playwright Kitchen",
  description: 'This is an example app used to showcase Playwright.dev testing. For a full reference of playwright documentation.',
  base: '/playwright-kitchen/',
  lang: 'en-US',
  head: [
    ['link', { rel: 'shortcut icon', href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/playwright-logo.svg",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lzhgostudy/playwright-kitchen' },
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Installation",
            link: "/start/installation"
          },
          {
            text: "Writing Tests",
            link: "/start/writing-tests"
          },
          {
            text: "Running Tests",
            link: "/start/running-tests"
          }
        ]
      },
      { 
        text: 'Guide',
        items: [
          {
            text: "Locators",
            link: "/guides/locators"
          },
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