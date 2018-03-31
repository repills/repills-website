module.exports = {
  siteMetadata: {
    title: `Repills.com`,
    author: `Repills`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/resources`,
        name: 'resources'
      },
    }
  ]
};

