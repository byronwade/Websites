import { Link } from "gatsby"
import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
/*
<button className="navbarToggler navRight">
    <span className="navbarTogglerIcon"></span>
</button>
*/
const MainMenu = () => (
  <>
    <Navbar className="bgBlack site-header" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand><Link className="nav-link" to="/">Byron Wade.</Link></Navbar.Brand>
      </Nav>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link className="nav-link" to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/projects/">Projects</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/blog/">Blog</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/contact/">Contact</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="alert alert-success bg-success p-3 text-light text-center rounded-0 border-0 mb-0">
      For a short time I will be doing free work for basic websites or applications to help build my portfolio. <Link className="alert-link" to="/contact/">Contact me</Link> if you are interested.
    </div>
  </>
)

export default MainMenu

/*
<Nav.Item>
  <Link className="nav-link" to="/experiments/">Experiments</Link>
</Nav.Item>
*/
