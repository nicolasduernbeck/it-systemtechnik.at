import { link } from 'fs';

export default {
  lang: 'de',
  title: 'IT-Systemtechnik.at',
  head: [
    [
      'meta',
      {
        name: 'description',
        content: 'Dokumentation für IT-Systemtechnik-Lehrlinge in Österreich',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'IT-Systemtechnik, Lehrlinge, Ausbildung, Linux, Windows, Karriere',
      },
    ],
    ['meta', { name: 'author', content: 'Contributors / it-systemtechnik.at' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Github', link: 'https://github.com/nicolasduernbeck/it-systemtechnik.at' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Einleitung',
          link: '/einleitung',
        },
        {
          text: 'Rechtliches',
          items: [
            { text: 'Impressum', link: '/impressum' },
            { text: 'Datenschutz', link: '/datenschutz' },
          ],
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} it-systemtechnik.at`,
    },
  },
};
