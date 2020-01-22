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
    <article className="bg-light blog-post"> 
        <Container>
            <Row className="align-items-top">
              <Col md={{ span: 10 }} lg={{ span: 8 }} className="mx-auto">
                  <header class="blog-post-header">
                    <h1 class="title mb-2">Why Every Developer Should Have A Blog</h1>
                    <div class="meta mb-3"><span class="date">Published 3 months ago</span><span class="time">5 min read</span><span class="auther">Byron Wade</span></div>
                  </header>
                  <div className="post-body">
                     <img className="post-image" src="https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
                     <div className="pt-1">
                       <h2>Header</h2>
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                       <blockquote className="blockquote">
                         <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                         <footer className="blockquote-footer">Someone famous in
                           <cite title="Source Title">Source Title</cite>
                         </footer>
                       </blockquote>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>
                     </div>
                  </div>
                  <footer class="blog-post-footer">
                    <Link class="more-link" to="/blog/">Read other articles</Link>
                  </footer>
              </Col>
            </Row>
        </Container>
      </article>
  </Layout>
)

export default ThorbisHostingPanel