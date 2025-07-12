import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Project Name',
  description: 'Project documentation',
  
  // Clean URLs without .html extension
  cleanUrls: true,
  
  // Enable last updated time
  lastUpdated: true,
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/tutorials/getting-started' },
      { text: 'How-To', link: '/how-to/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Explanation', link: '/explanation/' }
    ],

    sidebar: {
      '/tutorials/': [
        {
          text: 'Tutorials',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/tutorials/getting-started' }
          ]
        }
      ],
      '/how-to/': [
        {
          text: 'How-To Guides',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/how-to/' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/reference/' }
          ]
        }
      ],
      '/explanation/': [
        {
          text: 'Explanation',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/explanation/' },
            { text: 'Architecture', link: '/explanation/architecture' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cyberswat/docs-template' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    },

    // Enable search
    search: {
      provider: 'local'
    },

    // Edit link configuration
    editLink: {
      pattern: 'https://github.com/cyberswat/docs-template/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  // Markdown configuration
  markdown: {
    lineNumbers: true
  }
})