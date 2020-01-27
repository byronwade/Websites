import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"


export default function Template({ data }) {
  const { edges: projects } = data.allMarkdownRemark
  console.log(data.allMarkdownRemark.edges.length > 3)
  return ( 
    <Layout>
      <SEO title="Portfolio" />
      <section className="jumbo">
        <div className="container">
          <div className="jumboHeader">
              <div><div className="glitch" data-text="PORTFOLIO">PORTFOLIO</div></div>
              <div><div className="subGlitch" data-text="Check out all my work.">Check out all my work.</div></div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="importantMedia">
                        <a href="https://www.clutchdevelopments.com/" className="importantBody">
                            <h3 className="title">Clutch Developments</h3>
                            <div className="intro">This is my own website/app development firm I made from scratch.</div>
                            <span className="moreLink blue">See website →</span>
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="row">
                {projects.map(({ node: project }) => (
                <div className="col-lg-4">
                    <div className="portfolioMedia">
                        <a href={project.frontmatter.github} className="portfolioBody">
                            <h3 className="title">{project.frontmatter.title}</h3>
                            <div className="meta"><span className="date">{project.frontmatter.date}</span></div>
                            <div className="intro">{project.frontmatter.description}</div>
                            <span className="moreLink blue">See on Github →</span>
                        </a>
                    </div>
                </div>
                ))}
            </div>


        </div>
    </section>
  </Layout>
  )
}
export const pageQuery = graphql`
{
    allMarkdownRemark(filter: {fields: {slug: {regex: "/portfolio/"}}}, limit: 1000, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            github
            description
          }
        }
      }
    }
  }
`