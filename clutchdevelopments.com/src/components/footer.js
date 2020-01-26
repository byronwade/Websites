import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <>
    <div className="propAd">
      <div className="propContainer vintageYellow-bg">
        <div className="prop">
          <span>S</span>
          <span>P</span>
          <span>E</span>
          <span>E</span>
          <span>D</span>
        </div>
        <div className="prop1">Is Everything</div>
        <div className="prop2">We Can Show You</div>
      </div>
      <Link to="/contact/" className="propContact vintageRed-bg">
        <div className="prop3">Contact Us</div>
      </Link>
    </div>
    <footer className="vintageBlack-bg white">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md footerSection">
            <h4>Pages</h4>
            <ul className="listUnstyled">
              <li><Link className="listItem" to="/">Home</Link></li>
              <li><Link className="listItem" to="/resume/">Resume</Link></li>
              <li><Link className="listItem" to="/blog/">Blog</Link></li>
              <li><Link className="listItem" to="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md footerSection">
            <h4>Pages</h4>
            <ul className="listUnstyled">
              <li><Link className="listItem" to="/">Home</Link></li>
              <li><Link className="listItem" to="/resume/">Resume</Link></li>
              <li><Link className="listItem" to="/blog/">Blog</Link></li>
              <li><Link className="listItem" to="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md footerSection">
            <h4>Pages</h4>
            <ul className="listUnstyled">
              <li><Link className="listItem" to="/">Home</Link></li>
              <li><Link className="listItem" to="/resume/">Resume</Link></li>
              <li><Link className="listItem" to="/blog/">Blog</Link></li>
              <li><Link className="listItem" to="/contact/">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="siteInfo align-center">
              © {new Date().getFullYear()}, Built by <span style={{fontWeight: `bold`}}>Byron Wade</span> and developed with
              {` `}
              <a className="purple" href="https://www.gatsbyjs.org">Gatsby</a> and <a className="aqua" href="https://reactjs.org/">React</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
