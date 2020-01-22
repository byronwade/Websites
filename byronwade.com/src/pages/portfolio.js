import React from "react"
import { Link } from "gatsby"

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
          <div class="subGlitch" data-text="Check out all my work.">Check out all my work.</div>
        </div>
      </div>
    </section>
    <section class="portfolio">
      <div class="container">

        <div class="row">
            <div class="col-lg-12">
                <div class="importantMedia">
                    <a href="https://github.com/byronwade/Thorbis" class="importantBody">
                        <h3 class="title">Clutch Developments</h3>
                        <div class="intro">This is my own website/app development firm I made from scratch.</div>
                        <span class="moreLink blue">See websites →</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4">
                <div class="portfolioMedia">
                    <a href="https://github.com/byronwade/Thorbis" class="portfolioBody">
                        <h3 class="title">Thorbis Hosting Panel</h3>
                        <div class="meta"><span class="date">Published 3 months ago</span></div>
                        <div class="intro">I am desinging a front end hosting panel for developers. I wanted to create a panel where developers have control over thier hosting envierment and can invite customers to thier envernment for their specific website.</div>
                        <span class="moreLink blue">See on Github →</span>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="portfolioMedia">
                    <a href="https://github.com/byronwade/headlessCMS" class="portfolioBody">
                        <h3 class="title">Headless CMS</h3>
                        <div class="meta"><span class="date">Published 3 months ago</span></div>
                        <div class="intro">I wanted to have my own take on creating an admin panel for a headless CMS. I am a massive fan of Netlifys CMS panel. SO for fun I decided to start development on my own panel.</div>
                        <span class="moreLink blue">See on Github →</span>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="portfolioMedia">
                    <a href="https://github.com/byronwade/headlessCMS" class="portfolioBody">
                        <h3 class="title">Thorbis Hosting Panel</h3>
                        <div class="meta"><span class="date">Published 3 months ago</span></div>
                        <div class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                        <span class="moreLink blue">See on Github →</span>
                    </a>
                </div>
            </div>
        </div>

      </div>
    </section>
  </Layout>
)

export default Portfolio
