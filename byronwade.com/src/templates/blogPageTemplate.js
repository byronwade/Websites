import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default function Template({ data }) {
    const { edges: posts } = data.allMarkdownRemark
  return (

    <Layout>
    <SEO title="Blog" />
    <section className="jumbo">
      <div className="container">
        <div className="jumboHeader">
          <div><div className="glitch" data-text="BLOG">BLOG</div></div>
          <div><div className="subGlitch" data-text="Keep up with all my shinanigans.">Keep up with all my shinanigans.</div></div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        
{posts && posts.map(({ node: post }) => (
    <div className="row">
        <div className="col-lg-12">
            <div className="blogMedia">
              <Link to={post.fields.slug}><Img className="blogThumbnail" fixed={post.frontmatter.thumbnail.childImageSharp.fixed} alt={post.frontmatter.title} /></Link>
              <div className="mediaBody">
                <h3 className="title"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
                <div className="meta"><span className="date">Published on {post.frontmatter.date}</span><span className="time">{post.timeToRead} min read</span><span className="auther">{post.frontmatter.auther}</span></div>
                <div className="intro">{post.excerpt}</div>
                <Link to={post.fields.slug} className="moreLink blue">Read more →</Link>
              </div>
            </div>
        </div>
      </div>
))}
</div>
</section>
</Layout>
  )
}
export const pageQuery = graphql`
{
    allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}, limit: 1000, sort: {fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            auther
            date(formatString: "MM/DD/YYYY")
            features_image
            thumbnail {
              childImageSharp {
                fixed(width: 110, height: 110) {
                   ...GatsbyImageSharpFixed
                }
              }
            }
            title
          }
          fields {
            slug
          }
          timeToRead
          excerpt(pruneLength: 235, truncate: true, format: PLAIN)
        }
      }
    }
  }
`