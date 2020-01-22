import PropTypes from "prop-types"
import React from "react"

import MainMenu from "./mainMenu"

const Header = () => (
  <header className="sticky-top">
    <MainMenu />
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
