import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faBehance, faDiscord, faDribbble, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
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
                  <li><Link className="listItem" to="/blog-post/">The Making of Thorbis Hosting Panel...</Link></li>
                  <li><Link className="listItem" to="/blog-post/">The Making of Thorbis Hosting Panel...</Link></li>
                  <li><Link className="listItem" to="/blog-post/">The Making of Thorbis Hosting Panel...</Link></li>
                  <li><Link className="listItem" to="/blog-post/">The Making of Thorbis Hosting Panel...</Link></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h4>Personal Portfolio</h4>
                <ul className="list-unstyled">
                  <li><Link className="listItem" to="/">Thorbis</Link></li>
                  <li><Link className="listItem" to="/">HeadlessCMS</Link></li>
                  <li><Link className="listItem" to="/">Gopher</Link></li>
                  <li><Link className="listItem" to="/portfolio/">More...</Link></li>
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
              <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faFacebook} /></a>
              <a target="_blank" href="https://dribbble.com/"><FontAwesomeIcon icon={faDribbble} /></a>
              <a target="_blank" href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
              <a target="_blank" href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
              <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faDiscord} /></a>
              <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faBehance} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
