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
    <section className="bg-light">
        <Container>
            <Row>
              <Col lg={{ span: 12 }}>

                <div class="media mb-3">
                  <Link to="/blog/blog-post/"><img style={{ width: 110, height: 110}} class="mr-3 img-fluid post-thumb d-none d-md-flex" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-3.jpg" alt="image" /></Link>
                  <div class="media-body">
                    <h3 class="title mb-1 mt-0"><Link className="text-dark" to="/blog/blog-post/">Heading Lorem Ipsum Dolor Sit Amet</Link></h3>
                    <div class="meta mb-1"><span class="date">Published 3 months ago</span><span class="time">5 min read</span><span class="auther">Byron Wade</span></div>
                    <div class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                    <Link class="more-link" to="/blog/blog-post/">Read more →</Link>
                  </div>
                </div>

                <div class="media">
                  <Link to="/blog/blog-post/"><img style={{ width: 110, height: 110}} class="mr-3 img-fluid post-thumb d-none d-md-flex" src="https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="image" /></Link>
                  <div class="media-body">
                    <h3 class="title mb-1 mt-0"><Link className="text-dark" to="/blog/blog-post/">Heading Lorem Ipsum Dolor Sit Amet</Link></h3>
                    <div class="meta mb-1"><span class="date">Published 3 months ago</span><span class="time">5 min read</span><span class="auther">Byron Wade</span></div>
                    <div class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                    <Link class="more-link" to="/blog/blog-post/">Read more →</Link>
                  </div>
                </div>
                
              </Col>
            </Row>
        </Container>
      </section>
  </Layout>
)

export default ThorbisHostingPanel