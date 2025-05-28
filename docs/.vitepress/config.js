import { link } from 'fs';

export default {
  lang: 'de',
  title: 'IT-Systemtechnik.at',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicons/android-chrome-512x512.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
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
