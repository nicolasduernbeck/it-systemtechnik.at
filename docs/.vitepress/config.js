import { link } from 'fs';
import { text } from 'stream/consumers';

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
          text: 'Netzwerktechnik',
          link: '/netzwerktechnik/',
          items: [
            {
              text: 'OSI-Modell',
              link: '/netzwerktechnik/osi',
              items: [
                { text: 'Layer 7', link: '/netzwerktechnik/osi/layer-7' },
                { text: 'Layer 6', link: '/netzwerktechnik/osi/layer-6' },
                { text: 'Layer 5', link: '/netzwerktechnik/osi/layer-5' },
                { text: 'Layer 4', link: '/netzwerktechnik/osi/layer-4' },
                { text: 'Layer 3', link: '/netzwerktechnik/osi/layer-3' },
                { text: 'Layer 2', link: '/netzwerktechnik/osi/layer-2' },
                { text: 'Layer 1', link: '/netzwerktechnik/osi/layer-1' },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
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
