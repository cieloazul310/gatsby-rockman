//const myTheme = require('./src/utils/theme').default;
const path = require('path');
const baseUrl = 'https://cieloazul310.github.io';
const pathPrefix = '/gatsby-rockman';
const siteUrl = path.join(baseUrl, pathPrefix);
const contentDir = `${__dirname}/devData`;

module.exports = {
  siteMetadata: {
    title: `SPITZ 草野マサムネのロック大陸漫遊記プレイリスト集 β`,
    description: 'TOKYO-FM で放送中のラジオ番組「SPITZ 草野マサムネのロック大陸漫遊記」のプレイリスト集。',
    lang: 'ja',
    siteUrl: siteUrl,
    baseUrl: baseUrl,
    author: 'cieloazul310',
    keywords: ['スピッツ', '草野マサムネ', 'ロック大陸漫遊記', 'プレイリスト', 'ラジオ'],
    social: {
      mail: '',
      twitter: 'cieloazul310',
      github: 'cieloazul310',
      facebook: '',
      gitlab: '',
      linkedin: '',
      medium: '',
      pocket: '',
      tumblr: '',
      instagram: '',
      vimeo: '',
      youtube: 'playlist?list=PLGqFsFmePh4xxQjnjCpBLYsJY-VecUzdJ',
    },
  },
  pathPrefix: pathPrefix,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yaml`,
        path: `${contentDir}/yaml`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `program`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74683419-3',
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: 'ca-pub-7323207940463794',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SPITZ 草野マサムネのロック大陸漫遊記プレイリスト集 β`,
        short_name: `ロク漫プレイリスト`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#009688`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: baseUrl,
      },
    },
    {
      resolve: `gatsby-theme-aoi`,
      options: {
        siteId: `gatsby-rockman`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                baseUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.baseUrl;
        },
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-graphql-codegen`,
  ],
};
