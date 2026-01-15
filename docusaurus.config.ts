import type { Config } from '@docusaurus/types';
import type { Options as PresetOptions } from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hagicode Documentation',
  tagline: 'Build better code with Hagicode',
  favicon: 'img/favicon.ico',

  url: 'https://pcode-org.github.io',
  baseUrl: '/site/',

  organizationName: 'Hagicode-org',
  projectName: 'hagicode-docs',

  onBrokenLinks: 'throw',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Hagicode-org/hagicode-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
        },
        pages: {},
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies PresetOptions,
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  plugins: process.env.CLARITY_PROJECT_ID ? [
    [
      '@gracefullight/docusaurus-plugin-microsoft-clarity',
      {
        projectId: process.env.CLARITY_PROJECT_ID,
      },
    ],
  ] : [],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hagicode Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://qm.qq.com/q/Wk6twXHdyS',
          label: 'QQ群',
          position: 'right',
        },
        {
          href: 'https://github.com/Hagicode-org/hagicode-docs',
          label: 'GitHub',
          position: 'right',
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
              label: 'GitHub',
              href: 'https://github.com/Hagicode-org/hagicode-docs',
            },
            {
              label: 'QQ技术支持群 (610394020)',
              href: 'https://qm.qq.com/q/Wk6twXHdyS',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hagicode. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['bash', 'csharp', 'fsharp', 'powershell'],
    },
    mermaid: {
      theme: {
        light: 'base',
        dark: 'dark',
      },
    },
  },
};

export default config;
