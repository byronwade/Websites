import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section className="jumbo">
      <div className="container">
        <div className="jumboHeader">
          <div><div className="glitch" data-text="BLOG">BLOG</div></div>
          <div><div className="subGlitch" data-text="Keep up with all my shinanigans.">Keep up with all my shinanigans.</div></div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        
        <div className="row">
          <div className="col-lg-12">
              <div className="blogMedia">
                <Link to="/blog/blog-post/"><Img className="blogThumbnail" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-3.jpg" alt="image" /></Link>
                <div className="mediaBody">
                  <h3 className="title"><Link to="/blog-post/">Heading Lorem Ipsum Dolor Sit Amet</Link></h3>
                  <div className="meta"><span className="date">Published 3 months ago</span><span className="time">5 min read</span><span className="auther">Byron Wade</span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <Link to="/blog/blog-post/" className="moreLink blue">Read more →</Link>
                </div>
              </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
              <div className="blogMedia">
                <Link to="/blog/blog-post/"><img className="blogThumbnail" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-3.jpg" alt="image" /></Link>
                <div className="mediaBody">
                  <h3 className="title"><Link to="/blog-post/">Heading Lorem Ipsum Dolor Sit Amet</Link></h3>
                  <div className="meta"><span className="date">Published 3 months ago</span><span className="time">5 min read</span><span className="auther">Byron Wade</span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <Link to="/blog/blog-post/" className="moreLink blue">Read more →</Link>
                </div>
              </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
              <div className="blogMedia">
                <Link to="/blog/blog-post/"><img className="blogThumbnail" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-3.jpg" alt="image" /></Link>
                <div className="mediaBody">
                  <h3 className="title"><Link to="/blog-post/">Heading Lorem Ipsum Dolor Sit Amet</Link></h3>
                  <div className="meta"><span className="date">Published 3 months ago</span><span className="time">5 min read</span><span className="auther">Byron Wade</span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <Link to="/blog/blog-post/" className="moreLink blue">Read more →</Link>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  </Layout>
)

export default Blog
