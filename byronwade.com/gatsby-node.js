const path = require("path")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/postsTemplate.js`);
  const blogPageTemplate = path.resolve(`src/templates/blogPageTemplate.js`);
  const portfolioPageTemplate = path.resolve(`src/templates/portfolioPageTemplate.js`)
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
              github
              image {
                childImageSharp {
                  fluid {
                    aspectRatio
                    base64
                    tracedSVG
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
      context: {slug: node.fields.slug} // additional data can be passed via context
    })
  })
  createPage({
    path: '/blog/',
    component: blogPageTemplate,
    context: {}
  })
  createPage({
    path: '/portfolio/',
    component: portfolioPageTemplate,
    context: {}
  })
}