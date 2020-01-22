import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AllExperiments = () => (
  <Layout>
    <SEO title="Byron Wade: All Experiments" />
    <div className="container">
        <h1>All Experiments</h1>
        <ul className="list-unstyled">
          <li><Link to="/experiments/particles/">Particles</Link></li>
          <li><Link to="/experiments/three/">Three</Link></li>
        </ul>
    </div>
  </Layout>
)

export default AllExperiments