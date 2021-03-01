module.exports = {
  title: 'Royale Docs',
  tagline: 'Official documentation for Royale, the community-governed DeFi platform focusing on Staking, Lending, and Governance.',
  url: 'https://Royale-dao-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Royale', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  stylesheets: ['https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
  'https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap'
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    require.resolve('plugin-image-zoom')
  ],
  themeConfig: {
    navbar: {
     
      logo: {
        alt: 'My Site Logo',
        src: 'img/royale/royalelogo-standard-horizontal.svg',
      },
      items: [
        {
          to: 'about/intro',
          label: 'About',
          position: 'left',
        },
        {
          to: 'updates', 
          label: 'Updates', 
          position: 'left'
        },
      ], 
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SOCIAL',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/Royale_Finance',
            },
            {
              label: 'Medium',
              href: 'https://officialroyale.medium.com/',
            },
            {
              label: 'Telegram ANN',
              href: 'https://t.me/RoyaleFinance',
            },
            {
              label: 'Telegram Chat',
              href: 'https://t.me/Royalefinanceofficial',
            },
          ],
        },
        {  
          title: 'TECH',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/RoyaleFinanceV1/',
            },
           
            {
              label: 'Etherscan',
              href: 'https://etherscan.io/token/0x7eaf9c89037e4814dc0d9952ac7f888c784548db',
            },
            {
              label: 'DexTools',
              href: 'https://www.dextools.io/app/uniswap/pair-explorer/0x6d9d2427cfa49e39b4667c4c3f627e56ae586f37',
            },
          ],
        },
        {  
          title: 'OTHER LINKS',
          items: [
            {
              label: 'Home Page',
              href: 'http://royale.finance/',
            },
            {
              label: 'Pitch Deck',
              href: 'https://docsend.com/view/3e6abfv2g3ekr6yy',
            },
          ],
        },
      ],
      logo: {
        alt: 'Royale logo',
        src: 'img/royale/royalelogo-white-vertical.svg',
        href: 'http://royale.finance/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Royale`,
    },
    // ...
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    // ...
  
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          path: './docs',
          routeBasePath: '/',
          editUrl:
            'https://github.com/RoyaleFinanceV1/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://Royaledao.com/blog/',
          routeBasePath: 'updates',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
