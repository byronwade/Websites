//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <header className="sticky">
      <div className="nav">
        <div className="container">
          <div className="branding">
            scarboroughlumber.com
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
  siteTitle: `Scarborough Lumber`,
}

export default Header
