import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repoName = 'own-claude-code-docs';
const defaultOwner = 'GianlucaZinni';
const githubOwner =
  process.env.GITHUB_REPOSITORY_OWNER ??
  process.env.DOCS_GITHUB_OWNER ??
  defaultOwner;
const githubRepoUrl = `https://github.com/${githubOwner}/${repoName}`;

const config: Config = {
  title: 'Claude Code Docs',
  tagline: 'Documentacion interactiva y fuente de verdad sobre Claude Code',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: `https://${githubOwner}.github.io`,
  baseUrl: `/${repoName}/`,
  organizationName: githubOwner,
  projectName: repoName,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: `${githubRepoUrl}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Claude Code Docs',
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentacion',
        },
        {
          to: '/referencias',
          label: 'Referencias',
          position: 'left',
        },
        {
          href: githubRepoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduccion',
              to: '/',
            },
            {
              label: 'Workflows',
              to: '/workflows',
            },
          ],
        },
        {
          title: 'Proyecto',
          items: [
            {
              label: 'Repositorio',
              href: githubRepoUrl,
            },
            {
              label: 'Issues',
              href: `${githubRepoUrl}/issues`,
            },
          ],
        },
        {
          title: 'Fuentes',
          items: [
            {
              label: 'Registro',
              href: `${githubRepoUrl}/tree/main/sources/registry.yaml`,
            },
            {
              label: 'Contribucion',
              href: `${githubRepoUrl}/blob/main/CONTRIBUTING.md`,
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Gianluca Zinni.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
