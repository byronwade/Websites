import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faBehance, faDiscord, faDribbble, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <div class="social">
        <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faFacebook} /></a>
        <a target="_blank" href="https://dribbble.com/"><FontAwesomeIcon icon={faDribbble} /></a>
        <a target="_blank" href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
        <a target="_blank" href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
        <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faDiscord} /></a>
        <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faBehance} /></a>
      </div>
      <footer>
          © {new Date().getFullYear()} Byron Wade
      </footer>
    </>
  )
}

export default Footer
