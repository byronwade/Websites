import React from "react"
import { Link } from "gatsby"

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
          <div class="subGlitch" data-text="Keep up with all my shinanigans.">Keep up with all my shinanigans.</div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        
        <div class="row">
          <div class="col-lg-12">
              <div class="blogMedia">
                <Link to="/blog/blog-post/"><img class="blogThumbnail" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-3.jpg" alt="image" /></Link>
                <div class="mediaBody">
                  <h3 class="title"><Link to="/blog-post/">Heading Lorem Ipsum Dolor Sit Amet</Link></h3>
                  <div class="meta"><span class="date">Published 3 months ago</span><span class="time">5 min read</span><span class="auther">Byron Wade</span></div>
                  <div class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <Link to="/blog/blog-post/" class="moreLink blue">Read more →</Link>
                </div>
              </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
              <div class="blogMedia">
                <Link to="/blog/blog-post/"><img class="blogThumbnail" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-3.jpg" alt="image" /></Link>
                <div class="mediaBody">
                  <h3 class="title"><Link to="/blog-post/">Heading Lorem Ipsum Dolor Sit Amet</Link></h3>
                  <div class="meta"><span class="date">Published 3 months ago</span><span class="time">5 min read</span><span class="auther">Byron Wade</span></div>
                  <div class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <Link to="/blog/blog-post/" class="moreLink blue">Read more →</Link>
                </div>
              </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
              <div class="blogMedia">
                <Link to="/blog/blog-post/"><img class="blogThumbnail" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-3.jpg" alt="image" /></Link>
                <div class="mediaBody">
                  <h3 class="title"><Link to="/blog-post/">Heading Lorem Ipsum Dolor Sit Amet</Link></h3>
                  <div class="meta"><span class="date">Published 3 months ago</span><span class="time">5 min read</span><span class="auther">Byron Wade</span></div>
                  <div class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <Link to="/blog/blog-post/" class="moreLink blue">Read more →</Link>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  </Layout>
)

export default Blog
