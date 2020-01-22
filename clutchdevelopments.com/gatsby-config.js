module.exports = {
  siteMetadata: {
    title: `Byron Wade`,
    description: `A website made with top end tech.`,
    author: `Byron Wade`,
    siteUrl: `https://www.byronwade.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138727201-1",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1649951,
        sv: 6
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `_posts`,
        path: `${__dirname}/_posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `_projects`,
        path: `${__dirname}/_projects/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: false, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
      }
    },
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
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: { 
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
