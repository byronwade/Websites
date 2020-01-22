import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section class="jumbo">
      <div class="container">
        <div class="jumboHeader">
          <div class="glitch" data-text="PORTFOLIO">PORTFOLIO</div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <p>this is text bellow the hero</p>
      </div>
    </section>
  </Layout>
)

export default Portfolio
