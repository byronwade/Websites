module.exports = {
  siteMetadata: {
    title: `Scarborough Lumber`,
    description: `The Scarborough's business was originally started in 1957 by Gene Scarborough, a WWII POW veteran who left his home state of Mississippi with his family in search of a new start in California.  He eventually settled down with his wife Nena and his three children, Alvin, Linda and Mike, in Scotts Valley where he bought and ran Standard Lumber. `,
    author: `Byron Wade`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
