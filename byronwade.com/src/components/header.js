import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ props, siteTitle }) => (
  <header class="sticky">
    <nav class="mainNav">
      <div class="branding">
        <span className="brand"><Link to="/" > {siteTitle} </Link></span>
      </div>
      <div className="menu">
        <span className="menuItem"><Link to="/resume/" activeClassName="active">Resume</Link></span>
        <span className="menuItem"><Link to="/portfolio/"activeClassName="active">Portfolio</Link></span>
        <span className="menuItem"><Link to="/blog/" activeClassName="active">Blog</Link></span>
        <span className="menuItem"><Link to="/contact/" activeClassName="active">Contact</Link></span>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Byron Wade`,
}

export default Header
