module.exports = {
  siteMetadata: {
    siteUrl: 'https://repills.com',
    title: 'REPILLS | Free pills to get more skills',
    author: 'Repills',
    description: 'Repills.com is the place to learn about web development and design through well-organized high-quality resources. You can discover articles, tutorials, courses, tools, books about React.js, Serverless, Redux, Vue.js'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Repills website',
        short_name: 'Repills',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/resources`,
        name: 'resources'
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-117143286-1',
        head: false
      },
    },
    'gatsby-plugin-offline',
  ],
};

