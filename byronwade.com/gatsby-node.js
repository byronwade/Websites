const path = require("path")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/postsTemplate.js`);
  const blogPageTemplate = path.resolve(`src/templates/blogPageTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              auther
              date(formatString: "MM/DD/YYYY")
              description
              features_image
              github
              projects_features_image
              thumbnail {
                childImageSharp {
                  fluid {
                    aspectRatio
                    base64
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {slug: node.fields.slug,}, // additional data can be passed via context
    })
  })
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/blog/',
      component: blogPageTemplate,
      context: {slug: node.fields.slug,}, // additional data can be passed via context
    })
  })
}