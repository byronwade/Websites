import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default function Template({ data }) {

  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO title={`Blog | ${post.frontmatter.title}`} />
      <section>
        <div className="container">

          <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="blogPostMedia">
                  <Img className="blogPostThumbnail" fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} />
                  <div className="mediaBody">
                    <h1 className="title">{post.frontmatter.title}</h1>
                    <div className="content" dangerouslySetInnerHTML={{ __html: post.html}}></div>
                    <div className="auther red">Written by {post.frontmatter.auther} (Dont mind the spelling or grammar im a programmer first writer second!)</div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug, regex: "/blog/"}}) {
      frontmatter {
        title
        date
        auther
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
      fields {
        slug
      }
      html
    }
  }
`