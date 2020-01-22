import React from "react"
import { Link } from "gatsby"
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Gopher = () => (
  <Layout>
    <SEO title="Byron Wade: Gopher" />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col md={{ span: 6 }}>
              <h1 className="hero-heading">Track your shows automatically</h1>
              <p className="lead mt-5 font-weight-light">With ShowTrackr you can track your favorite TV shows automatically, so you never loose track of your TV shows ever again.</p>
            </Col>
            <Col md={{ span: 6 }} className="d-none d-lg-block">
              <div className="mx-auto">
                sdfgsdfg
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="bgBlack text-light">         
        <Container>
          <div className="section-header text-center">
            <span className="section-header-title text-light">Features</span>
            <h2 className="h1">Built and customized</h2>
            <Row>
              <Col md={{ span: 8 }} className="mx-auto">
                <p className="lead">ShowTrackr’s built-in machine learning and context-aware features guarantee that all the notifications and recommendations are always delivered to you in the perfect moment.</p>
              </Col>
            </Row>
          </div>
          <Row className="mt-5 text-center">
            <Col md={{ span: 4 }}>
              <div className="mb-5 mb-lg-0">
                <div className="gradient-icon gradient-1"><i className="icon ion-ios-play"></i></div>
                <h3 className="h5">Automated tracking</h3>
                <p>Track your favorite shows automatically without switching between apps.</p><Link to="/" className="features-link">Learn more<i className="icon ion-ios-arrow-forward ml-2"></i></Link>
              </div>
            </Col>
            <Col md={{ span: 4 }}>
              <div className="mb-5 mb-lg-0">
                <div className="gradient-icon gradient-2"><i className="icon ion-ios-cog"></i></div>
                <h3 className="h5">Machine learning</h3>
                <p>Get recommendations like never before, which are truly customized for your taste.</p><Link to="/" className="features-link">Learn more<i className="icon ion-ios-arrow-forward ml-2"></i></Link>
              </div>
            </Col>
            <Col md={{ span: 4 }}>
              <div className="features-item mb-5 mb-lg-0">
                <div className="gradient-icon gradient-3"><i className="icon ion-ios-notifications"></i></div>
                <h3 className="h5">Smart notifications</h3>
                <p>Receive smart notifications exactly at the right moments when you need them.</p><Link to="/" className="features-link">Learn more<i className="icon ion-ios-arrow-forward ml-2"></i></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section>
        <Container>
          <Row className="align-items-center">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col md={{ span: 6 }}>
                <h2 className="mb-4">Easy-to-use interfaces on every platform</h2>
                <p className="lead">Since most of our features work in a completely automated way, you will mainly use our apps to discover new TV shows recommended for you and discuss the most interesting episodes with like-minded people.</p>
                <Row className="mt-5">
                  <Col md={{ span: 8 }}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Customized Dashboard</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Automatic Day & Night Modes</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Integrated Chat Platform</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
              </Col>
              <Col md={{ span: 6 }}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    hjklhjklhrtyurtyurtyujkl
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    rtyu
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    567h5678j5678567856klh6758567856jklhjkl
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Row>
        </Container>
      </section>
      
      <section className="testimonials bgBlack">
        <Container>
          <Row>
            <Col md={{ span: 6 }} className="section-padding">
              <div className="section-header pr-3"><span className="section-header-title text-white">Community</span>
                <h2 className="h1 text-white">We believe in the power of community</h2>
                <p className="lead text-white mt-4 mb-4">Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.</p><Link to="/" className="btn btn-primary">Read more testimonials</Link>
              </div>
            </Col>
            <Col md={{ span: 6 }} className="d-none d-lg-block">
              fghj
            </Col>
          </Row>
        </Container>
      </section>
  </Layout>
)

export default Gopher