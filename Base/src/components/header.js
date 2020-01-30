//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <header className="sticky">
      <div className="nav">
        <div className="container">
          <div className="branding">
            whatsdns.org
          </div>
        </div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `What is DNS?`,
}

export default Header
