import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'de',
  title: 'IT-Systemtechnik.at',
  sitemap: {
    hostname: 'https://it-systemtechnik.at',
  },
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicons/android-chrome-512x512.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],

    // Basis-SEO
    ['meta', { name: 'description', content: 'Dokumentation für IT-Systemtechnik-Lehrlinge in Österreich' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'IT-Systemtechnik, Lehrlinge, Ausbildung, Linux, Windows, Karriere, Lehre, IT, IT-Lehre',
      },
    ],
    ['meta', { name: 'author', content: 'Contributors / it-systemtechnik.at' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'language', content: 'de' }],

    // Open Graph
    ['meta', { property: 'og:locale', content: 'de_DE' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'IT-Systemtechnik.at – Doku für Lehrlinge' }],
    ['meta', { property: 'og:description', content: 'Dokumentation für IT-Systemtechnik-Lehrlinge in Österreich.' }],
    ['meta', { property: 'og:url', content: 'https://it-systemtechnik.at' }],
    ['meta', { property: 'og:site_name', content: 'IT-Systemtechnik.at' }],
    ['meta', { property: 'og:image', content: 'https://it-systemtechnik.at/favicons/android-chrome-512x512.png' }],

    // Twitter Cards
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'IT-Systemtechnik.at – Doku für Lehrlinge' }],
    [
      'meta',
      { name: 'twitter:description', content: 'Ausbildungsmaterial für IT-Systemtechnik-Lehrlinge in Österreich.' },
    ],
    ['meta', { name: 'twitter:image', content: 'https://it-systemtechnik.at/favicons/android-chrome-512x512.png' }],

    // Strukturierte Daten (JSON-LD)
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'IT-Systemtechnik.at',
        url: 'https://it-systemtechnik.at',
        description: 'Dokumentation und Ausbildungsmaterial für IT-Systemtechnik-Lehrlinge in Österreich.',
        inLanguage: 'de',
        publisher: {
          '@type': 'Organization',
          name: 'IT-Systemtechnik.at',
          url: 'https://it-systemtechnik.at',
          logo: {
            '@type': 'ImageObject',
            url: 'https://it-systemtechnik.at/favicons/android-chrome-512x512.png',
          },
        },
      }),
    ],
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
          items: [
            { text: 'Einführung', link: '/lernen/netzwerktechnik/' },
            {
              text: 'OSI-Modell',
              collapsed: true,
              items: [
                { text: 'Einführung', link: '/lernen/netzwerktechnik/osi/' },
                { text: 'Layer 7', link: '/lernen/netzwerktechnik/osi/layer-7' },
                { text: 'Layer 6', link: '/lernen/netzwerktechnik/osi/layer-6' },
                { text: 'Layer 5', link: '/lernen/netzwerktechnik/osi/layer-5' },
                { text: 'Layer 4', link: '/lernen/netzwerktechnik/osi/layer-4' },
                { text: 'Layer 3', link: '/lernen/netzwerktechnik/osi/layer-3' },
                { text: 'Layer 2', link: '/lernen/netzwerktechnik/osi/layer-2' },
                { text: 'Layer 1', link: '/lernen/netzwerktechnik/osi/layer-1' },
              ],
            },
            {
              text: 'Topologien',
              collapsed: true,
              items: [
                { text: 'Einführung', link: '/lernen/netzwerktechnik/topologien/' },
                { text: 'Stern-Topologie', link: '/lernen/netzwerktechnik/topologien/stern' },
                { text: 'Bus-Topologie', link: '/lernen/netzwerktechnik/topologien/bus' },
                // { text: 'Ring-Topologie', link: '/lernen/netzwerktechnik/topologien/ring' },
                // { text: 'Maschen-Topologie', link: '/lernen/netzwerktechnik/topologien/maschen' },
                // { text: 'Baum-Topologie', link: '/lernen/netzwerktechnik/topologien/baum' },
              ],
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
