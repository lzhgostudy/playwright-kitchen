
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
    outline: 'deep',
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Installation",
            link: "/python/start/installation"
          },
          {
            text: "Writing Tests",
            link: "/python/start/writing-tests"
          },
          {
            text: "Running Tests",
            link: "/python/start/running-tests"
          },
          {
            text: "Pytest fixtures",
            link: "/python/start/pytest-fixtures"
          },
          // {
          //   text: "Parametrize fixtures",
          //   link: "/start/parametrize-fixtures",
          // },
        ],
      },
      {
        text: "Allure",
        items: [
          {
            text: "Get Started",
            link: "/python/allure/quick-start"
          },
          // {
          //   text: "Basic Reporting",
          //   link: "/python/allure/basic-reporting"
          // },
          // {
          //   text: "Supported Pytest features",
          //   link: "/python/allure/supported-pytest-features"
          // }
        ]
      },
      { 
        text: 'Guide',
        items: [
          {
            text: "Locators",
            link: "/python/guides/locators"
          },
          {
            text: "Actions",
            link: "/python/guides/actions"
          },
          {
            text: "Assertions",
            link: "/python/guides/assertions"
          },
          {
            text: "Evaluating JavaScript",
            link: "/python/guides/evaluate"
          }
        ],
      },
      {
        text: "Element plus",
        items: [
          {
            text: "Scrollbar",
            link: "/python/ele/scrollbar"
          }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Mine Lu'
    }
  },
}