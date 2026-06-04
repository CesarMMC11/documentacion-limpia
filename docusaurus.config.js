// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SPIDI',
  tagline: 'Documentación Oficial',
  favicon: 'img/spidi.PNG',

  url: 'https://tusitio.com',
  baseUrl: '/',
  organizationName: 'spidi',
  projectName: 'spidi-docs',

  onBrokenLinks: 'warn', // Cambiado a warn para que no detenga el servidor si te falta un archivo

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Modo solo-documentación
        },
        blog: false, // Apagamos el blog para evitar conflictos
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true, 
        respectPrefersColorScheme: false,
      },
      
      /* AHORA SÍ: EL NAVBAR CON EFECTOS DE ACTIVACIÓN AUTOMÁTICOS */
      navbar: {
        title: '',
        logo: {
          alt: 'SPIDI Logo',
          src: 'img/logo.png', 
        },
        items: [
          {
            to: '/', 
            label: '✨ Primera vez',
            position: 'right',
            className: 'nav-pill', 
            activeBaseRegex: '^/$', // Solo se ilumina en el Home exacto
          },
          {
            to: '/conceptosFundamentales/introduccion', 
            label: '📚 Conceptos',
            position: 'right',
            className: 'nav-pill',
            activeBaseRegex: '/conceptosFundamentales/', // Se ilumina en toda la sección Conceptos
          },
          {
            to: '/endpoints/login', 
            label: '⚡ Endpoints',
            position: 'right',
            className: 'nav-pill',
            activeBaseRegex: '/endpoints/', // Se ilumina en toda la sección Endpoints
          },
          {
            to: '/recursos/como-usar-especificaciones', 
            label: '📦 Recursos',
            position: 'right',
            className: 'nav-pill',
            activeBaseRegex: '/recursos/', // Se ilumina en toda la sección Recursos
          },
        ],
      },
      
      /* EL FOOTER */
      footer: {
        style: 'dark',
        logo: {
          alt: 'SPIDI Logo',
          src: 'img/logo.png', 
          href: '/',
          width: 80,
        },
        copyright: `
          <div class="footer-custom-text">
            SOLUCIONES SPIDI-VEN, S.A • J-50733628-0 <br/>
            hola@mispidi.com • Copyright ${new Date().getFullYear()} © SPIDI
          </div>
        `,
      },
      
      /* COLORES DE CÓDIGO (PRISM) */
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;