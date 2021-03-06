const { apiEndpoint } = require('./prismic-config');
var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint);

module.exports = {
  siteMetadata: {
    title: `#harrishouse`,
    description: `Harris House Family Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@prismicio/gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1], // Loads the repo name from prismic configuration
        path: '/preview',
        previews: true,
        pages: [{
          type: 'Post',
          match: '/blog/:uid',
          path: '/blog-preview',
          component: require.resolve('./src/templates/post.js')
        }]
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
