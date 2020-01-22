import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section class="jumbo">
      <div class="container">
        <div class="jumboHeader">
          <div class="glitch" data-text="BLOG">BLOG</div>
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

export default Blog
