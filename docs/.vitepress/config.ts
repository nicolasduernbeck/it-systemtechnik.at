import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'de',
  title: 'IT-Systemtechnik.at Lernplattform für IT-Lehrlinge',
  sitemap: {
    hostname: 'https://it-systemtechnik.at',
  },
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
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Suche',
            buttonAriaLabel: 'Suche',
          },
          modal: {
            backButtonTitle: 'Zurück',
            noResultsText: 'Keine Ergebnisse gefunden',
            resetButtonTitle: 'Suche zurücksetzen',
            footer: {
              selectText: 'Wählen',
              navigateText: 'Navigieren',
              closeText: 'Schließen',
            },
          },
        },
      },
    },
    editLink: {
      pattern: 'https://github.com/nicolasduernbeck/it-systemtechnik.at/edit/main/docs/:path',
      text: 'Bearbeite diese Seite auf GitHub',
    },
    outline: {
      label: 'Seiteninhalt',
    },
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Github', link: 'https://github.com/nicolasduernbeck/it-systemtechnik.at' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Netzwerktechnik',
          link: '/lernen/netzwerktechnik/',
          items: [
            {
              text: 'OSI-Modell',
              link: '/lernen/netzwerktechnik/osi',
              items: [
                { text: 'Layer 7', link: '/lernen/netzwerktechnik/osi/layer-7' },
                { text: 'Layer 6', link: '/lernen/netzwerktechnik/osi/layer-6' },
                { text: 'Layer 5', link: '/lernen/netzwerktechnik/osi/layer-5' },
                { text: 'Layer 4', link: '/lernen/netzwerktechnik/osi/layer-4' },
                { text: 'Layer 3', link: '/lernen/netzwerktechnik/osi/layer-3' },
                { text: 'Layer 2', link: '/lernen/netzwerktechnik/osi/layer-2' },
                { text: 'Layer 1', link: '/lernen/netzwerktechnik/osi/layer-1' },
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
    docFooter: {
      next: false,
      prev: false,
    },
    footer: {
      message: '<a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutz</a>',
      copyright: `© ${new Date().getFullYear()}  IT-Systemtechnik.at`,
    },
  },
});
