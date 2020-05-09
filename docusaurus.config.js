module.exports = {
  title: 'Token Engineering',
  tagline: 'Because tokens don\'t engineer themselves!',
  organizationName: 'tokenengineeringcommunity',
  projectName: 'website',
  baseUrl: '/website/',
  url: 'https://tokenengineeringcommunity.github.io/',
  favicon: 'img/te-logo.png',
  themeConfig: {
    navbar: {
      title: 'Token Engineering',
      logo: {
        alt: 'Token Engineering Logo',
        src: 'img/te-logo.png',
      },
      links: [
        {
          to: 'docs/library-welcome',
          activeBasePath: 'docs',
          label: '📚 Library',
          position: 'left',
        },
        {
          to: 'docs/services-welcome',
          activeBasePath: 'docs',
          label: '🤝 Services',
          position: 'left',
        },
        {
          to: 'blog',
          label: '📰 Blog',
          position: 'left'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: '🦜 Twitter',
              href: 'https://twitter.com/tokenengineering',
            },
            {
              label: '💬 Discord',
              href: 'https://discord.gg/gHvksh8',
            },
            {
              label: '💬 Telegram',
              href: 'https://t.me/TokenEngineering',
            },
            {
              label: '🐈 GitHub',
              href: 'https://github.com/tokenengineeringcommunity',
            },
          ],
        },
        {
          title: 'Library',
          items: [
            {
              label: '📜 Blog',
              to: 'blog',
            },
            {
              label: '📺 YouTube',
              href: 'https://www.youtube.com/c/TokenEngineering',
            },
            {
              label: '📚 Token Engineering 101',
              to: 'docs/library-te-101',
            },
            {
              label: '📖 The Token Engineering Book',
              to: 'docs/library-te-book',
            },
          ],
        },
        {
          title: 'Services',
          items: [
            {
              label: '💱 Token Reviews',
              to: 'docs/services-token-reviews',
            },
            {
              label: '⚙️ Workshops',
              to: 'docs/services-workshops',
            },
          ],
        },
      ],
      logo: {
        alt: 'Token Engineering Logo',
        src: '/img/te-logo.png',
        href: 'https://tokens.engineering',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Token Engineering. <br> <a href="https://docusaurus.io/">🦖 Built with Docusaurus</a>!`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/te-temp/te-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/te-temp/te-website/edit/master/te-website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
