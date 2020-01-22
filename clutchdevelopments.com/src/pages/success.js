import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = props => (
  <Layout>
    <SEO title="Byron Wade: Contact Page" />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <p>Thank you for contacting us!</p>
          <Link to="/contact/" className="btn-alt">Go back</Link>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;