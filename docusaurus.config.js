module.exports = {
  title: 'Token Engineering',
  tagline: 'Because tokens don\'t engineer themselves!',
  organizationName: 'te-temp',
  projectName: 'te-website',
  baseUrl: '/te-website/',
  url: 'https://te-temp.github.io/',
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
          to: 'docs/about',
          activeBasePath: 'docs',
          label: '📚 Library',
          position: 'left',
        },
        {
          to: 'blog',
          label: '📰 Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: '📜 Blog',
              to: 'blog',
            },
            {
              label: '📚 Token Engineering 101',
              to: 'docs/te-101-materials',
            },
            {
              label: '📖 The Token Engineering Book',
              to: 'docs/te-book',
            },
          ],
        },
        {
          title: 'TE Services',
          items: [
            {
              label: '💱 Token Reviews',
              to: 'feedback',
            },
            {
              label: '⚙️ Workshops',
              to: 'docs/next/support',
            },
          ],
        },
        {
          title: 'TE Community',
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
              label: '🐈 GitHub',
              href: 'https://github.com/tokenengineeringcommunity',
            },
          ],
        },
        {
          title: 'Placeholder',
          items: [
            {
              label: '🔁 Feedback',
              to: 'feedback',
            },
            {
              label: '🆘 Help',
              to: 'docs/next/support',
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
