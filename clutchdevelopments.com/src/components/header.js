import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Burger from '@animated-burgers/burger-slip'
import '@animated-burgers/burger-slip/dist/styles.css' 

const Header = ({ siteTitle }) => (
  <>
    <header className="sticky vintageBlack-bg">
      <nav className="mainNav">
        <div className="branding">
          <span className="brand"><Link to="/" > {siteTitle} </Link></span>
        </div>

        <Burger />

        <div className="menu">
          <span className="menuItem"><Link to="/" activeClassName="active">Home</Link></span>
          <span className="menuItem"><Link to="/about-us/" activeClassName="active">About Us</Link></span>
          <span className="menuItem"><Link to="/services/" activeClassName="active">Services</Link></span>
          <span className="menuItem"><Link to="/portfolio/"activeClassName="active">Portfolio</Link></span>
          <span className="menuItem"><Link to="/blog/" activeClassName="active">Blog</Link></span>
          <span className="menuItem"><Link to="/contact/" activeClassName="active">Contact</Link></span>
        </div>
      </nav>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Clutch Website Developments`,
}

export default Header
