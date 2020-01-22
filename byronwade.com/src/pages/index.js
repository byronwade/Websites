import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="container">
        <div className="heroHeader">
          <div><div className="glitch" data-text="BYRON WADE">BYRON WADE</div></div>
          <div><div className="subGlitch" data-text="Freelance Website Designer/Developer.">Freelance Website Designer/Developer.</div></div>
          <p>Websites built on speed and performance. Using the latest tech and frameworks.</p>
          <Link to="/" className="btn btn-outline-blue">Contact Me</Link>
          <Link to="/" className="btn btn-outline-white btnMarginLeft">See my Github</Link>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
              Speed
          </div>
          <div className="col-lg-4">
              Proformance
          </div>
          <div className="col-lg-4">
              SEO
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
