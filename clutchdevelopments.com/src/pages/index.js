import React from "react"
import { Link } from "gatsby"
import * as Sentry from '@sentry/browser';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import StyledBackgroundSection from '../components/backgroundImage'


//https://www.react-spring.io/docs/props/parallax

import Layout from "../components/layout"
import SEO from "../components/seo"
  

Sentry.init({ 
  dsn: 'https://0ac271da40834897af4462719ffae59f@sentry.io/1878102',
  release: 'byronwade@' + process.env.npm_package_version
});

const IndexPage = () =>{
  /*
    const data = useStaticQuery(graphql`
      query {
        hills: file(relativePath: {eq: "hills.jpg"}) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        astronaut: file(relativePath: {eq: "gatsby-astronaut.png"}) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }  
  `)
    */
  return (
  <Layout>
    <SEO title="Home" />

      <StyledBackgroundSection />

      <section>
        <Container>
          <div className="card p-5 border-0 bg-light">
            <div className="section-header pb-3"><span className="section-header-title">What I Focus On</span></div>
            <Row className="align-items-top">
              <Col md={{ span: 4 }}>
                <h3 className="subtitle">Speed</h3>
                <p className="lead mt-3 font-weight-normal">Just like a knight, if your website is slow like your combat then it could be the death of you. Speed can make or break your application.</p>
              </Col>
              <Col md={{ span: 4 }}>
                <div className="mx-auto">
                  <h3 className="subtitle">Combat Efficiency</h3>
                  <p className="lead mt-3 font-weight-normal">As a true knight a focus on efficiency and performance for his work changes the consumer idea of what can be done.</p>
                </div>
              </Col>
              <Col md={{ span: 4 }}>
                <div className="mx-auto">
                  <h3 className="subtitle">New Weapons</h3>
                  <p className="lead mt-3 font-weight-normal">Weapons of the new age make websites and applications much faster and proficient. With the new tech of this era we can make top of the line work that can please the queen.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col md={{ span: 6 }}>
              <div className="section-header pr-3"><span className="section-header-title text-light">Animations</span>
                <h2 className="h1">I believe in the power of magic</h2>
                <p className="lead text-white mt-4 mb-4">Animations leave an interactive feel for users that allow them to feel more connected to websites.</p>
              </div>
            </Col>
            <Col md={{ span: 6 }}>
                <div className="isLoding">
                  <div className="smart-glass">
                    <div className="logo">
                      <div className="circle">
                          <div className="circle">
                              <div className="circle">
                              </div>
                          </div>
                      </div>
                      <div className="hold-x">
                          <div className="thorbis">I/O</div>
                      </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light">
        <Container>
          <div className="section-header pb-3"><span className="section-header-title">I specialize in</span></div>
          <Row className="align-items-top">
            <Col md={{ span: 6 }}>
              <h3 className="subtitle">React</h3>
              <p className="lead mt-3 font-weight-normal">React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
            </Col>
            <Col md={{ span: 6 }}>
              <div className="mx-auto">
                <h3 className="subtitle">Gatsby</h3>
                <p className="lead mt-3 font-weight-normal">Gatsby is a React-based, GraphQL powered, static site generator. What does that even mean?  Well, it weaves together the best parts of React, webpack, react-router, GraphQL, and other front-end tools in to one very enjoyable developer experience. Don’t get hung up on the moniker ‘static site generator’.  That term has been around for a while, but Gatsby is far more like a modern front-end framework than a static site generator of old.</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-top mt-5">
            <Col md={{ span: 6 }}>
              <h3 className="subtitle">Angular</h3>
              <p className="lead mt-3 font-weight-normal">Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
            </Col>
            <Col md={{ span: 6 }}>
              <div className="mx-auto">
                <h3 className="subtitle">Netlify</h3>
                <p className="lead mt-3 font-weight-normal">Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for static websites. It features continuous deployment from Git across a global application delivery network, serverless form handling, support for AWS Lambda functions, and full integration with Let's Encrypt.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <div className="section-header pb-3 text-center"><span className="section-header-title text-light">Projects</span></div>
            <div className="card-columns projects">       
              <Link to="/projects/thorbis-hosting-panel/" className="card bg-dark text-white border-0">
                <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1577186606264-8bc8d1fdf9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image" />
                <div className="card-img-overlay">
                  <h3 className="card-title">Thorbis Hosting</h3>
                  <p className="card-subtitle">Web Applications and Website</p>
                  <p className="card-text"><span>#React</span><span className="ml-2">#Gatsby</span></p>
                </div>
              </Link>
              <Link to="/projects/thorbis-hosting-panel/" className="card bg-dark text-white border-0">
                <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1579413947573-956be56820ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=603&q=80" alt="Card image" />
                <div className="card-img-overlay">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-subtitle">Application</p>
                  <p className="card-text"><span>#Website</span><span className="ml-2">#Gatsby</span></p>
                </div>
              </Link>       
              <Link to="/projects/thorbis-hosting-panel/" className="card bg-dark text-white border-0">
                <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1502310863130-8110e7815ebe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1242&q=80" alt="Card image" />
                <div className="card-img-overlay">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-subtitle">Iphone App/Android App</p>
                  <p className="card-text"><span>#Shopify</span><span className="ml-2">#React</span></p>
                </div>
              </Link>      
              <Link to="/projects/thorbis-hosting-panel/" className="card bg-dark text-white border-0">
                <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image" />
                <div className="card-img-overlay">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-subtitle">Iphone App/Android App</p>
                  <p className="card-text"><span>#React</span><span className="ml-2">#Gatsby</span></p>
                </div>
              </Link>  
              <Link to="/projects/thorbis-hosting-panel/" className="card bg-dark text-white border-0">
                <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80" alt="Card image" />
                <div className="card-img-overlay">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-subtitle">Iphone App/Android App and Website</p>
                  <p className="card-text"><span>#React</span><span className="ml-2">#Gatsby</span></p>
                </div>
              </Link>
            </div>
            <div className="text-center">
              <Link to="/projects/" className="btn btn-blue ml-0">See More Projects</Link>
            </div>
        </Container>
      </section>

  </Layout>
)}

//<Img fluid={data.hills.childImageSharp.fluid} />
//<Img fluid={data.astronaut.childImageSharp.fluid} />
export default IndexPage