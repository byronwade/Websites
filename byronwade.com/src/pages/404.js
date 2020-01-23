import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="jumbo">
      <div className="container">
        <div className="jumboHeader align-center">
          <div><div className="glitch" data-text="NOT FOUND">NOT FOUND</div></div>
          <div><div className="subGlitch" data-text="You just hit a route that doesn&#39;t exist... the sadness.">You just hit a route that doesn&#39;t exist... the sadness.</div></div>
          <Link to="/" className="moreLink red">Lets go home →</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
