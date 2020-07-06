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
          to: 'docs/getting-started-welcome',
          activeBasePath: 'docs',
          label: '🏁 Start Here',
          position: 'left',
        },
        {
          to: 'docs/academy-welcome',
          activeBasePath: 'docs',
          label: '🏛️ TE Academy',
          position: 'left',
        },
        {
          to: 'docs/events-welcome',
          activeBasePath: 'docs',
          label: '🌎 Events',
          position: 'left',
        },
        {
          to: 'docs/library-welcome',
          activeBasePath: 'docs',
          label: '📚 Library',
          position: 'left',
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
              href: 'https://twitter.com/tokengineering',
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
            'https://github.com/TokenEngineeringCommunity/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TokenEngineeringCommunity/website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
