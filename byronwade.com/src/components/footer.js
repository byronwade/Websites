import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faBehance, faDiscord, faDribbble, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const data = useStaticQuery(graphql`
{
    posts: allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}, limit: 5, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    projects: allMarkdownRemark(filter: {fields: {slug: {regex: "/portfolio/"}}}, limit: 5, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            github
          }
        }
      }
    }
  }
`)
const { edges: posts } = data.posts
const { edges: projects } = data.projects
  return (
    <>
      <footer class="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 align-center contactMe">
              <Link to="/contact/" className="btn btn-outline-blue">Lets Talk? Maybe get some coffee</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md">
              <div className="siteInfo">
                © {new Date().getFullYear()}, Built by <span style={{fontWeight: `bold`}}>Byron Wade</span> and developed with
                {` `}
                <a className="purple" href="https://www.gatsbyjs.org">Gatsby</a> and <a className="aqua" href="https://reactjs.org/">React</a>
              </div>
            </div>
            <div className="col-6 col-md">
                <h4>Pages</h4>
                <ul className="list-unstyled">
                  <li><Link className="listItem" to="/">Home</Link></li>
                  <li><Link className="listItem" to="/resume/">Resume</Link></li>
                  <li><Link className="listItem" to="/blog/">Blog</Link></li>
                  <li><Link className="listItem" to="/contact/">Contact</Link></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h4>Blog Posts</h4>
                <ul className="list-unstyled">
                  {posts && posts.map(({ node: post }) => (
                    <li><Link className="listItem" to={post.fields.slug}>{post.frontmatter.title}</Link></li>
                  ))}
                </ul>
            </div>
            <div className="col-6 col-md">
                <h4>Personal Projects on Github</h4>
                <ul className="list-unstyled">
                  {projects && projects.map(({ node: project }) => (
                    <li><a className="listItem" href={project.frontmatter.github}>{project.frontmatter.title}</a></li>
                  ))}
                </ul>
            </div>
            <div className="col-6 col-md">
                <h4>Boring Things</h4>
                <ul className="list-unstyled">
                  <li><Link className="listItem" to="/">Terms and Conditions</Link></li>
                  <li><Link className="listItem" to="/">Privacy</Link></li>
                  <li><Link className="listItem" to="/">Sitemap</Link></li>
                </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 align-center social">
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://dribbble.com/"><FontAwesomeIcon icon={faDribbble} /></a>
              <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faDiscord} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faBehance} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
