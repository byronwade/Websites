//import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <>
    <footer>
      <div className="container">
        <div className="socialmedia">
          <a href="https://www.facebook.com/byronwadewebdev">Facebook</a>
          <a href="https://twitter.com/ByronWade18">Twitter</a>
          <a href="https://dribbble.com/byronwade">Dribbble</a>
          <a href="https://github.com/byronwade">Github</a>
        </div>
        <div class="siteInfo">© {new Date().getFullYear()}, built by <a href="https://www.byronwade.com/">Byron Wade</a> and developed with <a class="purple" href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://reactjs.org/">React</a></div>
      </div>
    </footer>
  </>
)

export default Footer
