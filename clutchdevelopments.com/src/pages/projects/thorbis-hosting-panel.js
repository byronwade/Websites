import React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ThorbisHostingPanel = () => (
  <Layout>
    <SEO title="Projects: Thorbis Hosting Panel" />
    <section className="projects pt-5 bg-light">
      <Container>
        <div className="row mt-5">
          <div className="col-lg-8">
            <img alt="stop error" className="rounded" src="https://via.placeholder.com/790x500?text=Under+Contstruction" />
          </div>
          <div className="col-lg-4">
            <h1 class="subtitle">Hosting Panel</h1>
            <p className="lead font-weight-normal">Thorbis web hosting is a progressive web application that allows developers with multiple clients to quickly deploy and add websites to a platform efficiently.</p>
            <Link to="/contact/" className="btn btn-blue pl-0 ml-0">Visit Website</Link>
            <a href="https://github.com/byronwade/Thorbis" className="btn btn-alt">Github</a>
            <ul class="list-inline mt-3 pt-3 mb-3 pb-3">
              <li class="list-inline-item font-weight-bold">Style:</li>
              <li class="list-inline-item"><span className="text-primary">#</span>bootstrap</li>
              <li class="list-inline-item"><span className="text-primary">#</span>custom</li>
              <li class="list-inline-item font-weight-bold">Frameworks:</li>
              <li class="list-inline-item"><span className="text-primary">#</span>react</li>
              <li class="list-inline-item"><span className="text-primary">#</span>gatsby</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
    <section className="projects pt-5 pb-5 bg-light">
      <Container>
          <div className="card-columns projects">       
            <Link to="/" className="card bg-dark text-white border-0">
              <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1577186606264-8bc8d1fdf9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image" />
            </Link>
            <Link to="/" className="card bg-dark text-white border-0">
              <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1579413947573-956be56820ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=603&q=80" alt="Card image" />
            </Link>       
            <Link to="/" className="card bg-dark text-white border-0">
              <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1502310863130-8110e7815ebe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1242&q=80" alt="Card image" />
            </Link>      
            <Link to="/" className="card bg-dark text-white border-0">
              <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image" />
            </Link>  
            <Link to="/" className="card bg-dark text-white border-0">
              <img alt="stop error" className="card-img" src="https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80" alt="Card image" />
            </Link>
          </div>
      </Container>
    </section>
  </Layout>
)

export default ThorbisHostingPanel
