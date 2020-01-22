import React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Three = () => (
  <Layout>
    <SEO title="Byron Wade: Experiment - Three.js" />
    <section>
      <Container>
        <Row className="align-items-center">
          <Col md={{ span: 6 }}>
            <p className="text-danger">Experiment still in progress...</p>
            <h1 className="hero-heading">Three.js</h1>
            <p className="lead mt-1 mb-1 font-weight-light">The aim of the project is to create an easy to use, lightweight, 3D library with a default WebGL renderer. The library also provides Canvas 2D, SVG and CSS3D renderers in the examples.</p>
            <p>I took time to play around with the particles.js library to see if I could come up with some neat effects for a new website im designing.</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="btn btn-sm btn-primary" href="https://threejs.org/">Link to website</a></li>
              <li className="list-inline-item"><a className="btn btn-sm btn-dark" href="https://github.com/mrdoob/three.js/">Link to github</a></li>
            </ul>
          </Col>
          <Col md={{ span: 6 }} className="d-none d-lg-block">
            <div className="mx-auto">
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="bgBlack">
      <Container>
        <div className="pb-5 d-flex">
          <Link className="backLink mr-auto justify-content-start" to="/"> Go Back</Link>
          <Link className="nextLink ml-auto justify-content-end" to="/"> Next Experiment</Link>
        </div>
        <iframe
          src="https://codesandbox.io/embed/white-microservice-q3mx9?fontsize=14&hidenavigation=1&theme=dark"
          title="white-microservice-q3mx9"
          allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
        </iframe>
      </Container>
    </section>
  </Layout>
)

export default Three