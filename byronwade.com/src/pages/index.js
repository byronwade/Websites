import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="hero">
      <div class="container">
        <div class="heroHeader">
          <div class="glitch" data-text="BYRON WADE">BYRON WADE</div>
          <div class="subGlitch" data-text="Freelance Website Designer/Developer.">Freelance Website Designer/Developer.</div>
          <p>Websites built on speed and performance. Using the latest tech and frameworks.</p>
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

export default IndexPage
