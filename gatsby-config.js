module.exports = {
  siteMetadata: {
    siteUrl: 'https://repills.com',
    name: 'Repills',
    title: 'REPILLS | React.js high-quality resources',
    description: 'Repills.com is the place to learn about React.js through high-quality resources. You can discover articles, tutorials, courses, tools and books in one place.',
    author: 'Andrea Mangano',
  },
  plugins: [
    'gatsby-plugin-antd',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/resources`,
        name: 'resources'
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:400,500,700']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
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
    /*
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
    */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
