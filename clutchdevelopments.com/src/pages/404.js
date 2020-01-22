import React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Byron Wade: 404 Not found" />
    <section className="tenti">
      <Container>
        <h1>404 NOT FOUND</h1>
        <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Home Page</Link>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage
