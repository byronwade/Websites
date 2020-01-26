const path = require("path")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/postsTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date}) {
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
              thumbnail
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
      context: {}, // additional data can be passed via context
    })
  })
}