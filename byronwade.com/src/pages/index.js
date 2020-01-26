import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Local Website Designer/Developer" />
    <section className="hero">
      <div className="container">
        <div className="heroHeader">
          <div><div className="glitch" data-text="BYRON WADE">BYRON WADE</div></div>
          <div><div className="subGlitch" data-text="Freelance Website Designer/Developer.">Freelance Website Designer/Developer.</div></div>
          <p>Websites built on speed and performance. Using the latest tech and frameworks.</p>
          <Link to="/contact/" className="btn btn-outline-red">Contact Me</Link>
          <a href="https://github.com/byronwade" className="btn btn-outline-white btnMarginLeft">See my Github</a>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row importantItems">
          <div className="col-lg-4">
              <h3>Speed</h3>
              <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.</p>
          </div>
          <div className="col-lg-4">
            <h3>Performance</h3>
            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.</p>
          </div>
          <div className="col-lg-4">
            <h3>SEO</h3>
            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mx-auto">
              <ul class="timeline timeline-centered">
                  <li class="timeline-item period">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h2 class="timeline-title">My Website Develpment Process</h2>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-info">
                          <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque.</p>
                      </div>
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="timeline-title">Event Title</h3>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-info">
                          <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque. </p>
                      </div>
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="timeline-title">Event Title</h3>
                      </div>
                  </li>
                  <li class="timeline-item period">
                      <div class="timeline-info"></div>
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h2 class="timeline-title">Design</h2>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-info">
                          <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque. </p>
                      </div>
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="timeline-title">Event Title</h3>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-info">
                          <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque. </p>
                      </div>
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="timeline-title">Event Title</h3>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
