import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section className="jumbo">
      <div className="container">
        <div className="jumboHeader">
            <div><div className="glitch" data-text="PORTFOLIO">PORTFOLIO</div></div>
            <div><div className="subGlitch" data-text="Check out all my work.">Check out all my work.</div></div>
        </div>
      </div>
    </section>
    <section className="portfolio">
      <div className="container">

        <div className="row">
            <div className="col-lg-12">
                <div className="importantMedia">
                    <a href="https://github.com/byronwade/Thorbis" className="importantBody">
                        <h3 className="title">Clutch Developments</h3>
                        <div className="intro">This is my own website/app development firm I made from scratch.</div>
                        <span className="moreLink blue">See websites →</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <div className="portfolioMedia">
                    <a href="https://github.com/byronwade/Thorbis" className="portfolioBody">
                        <h3 className="title">Thorbis Hosting Panel</h3>
                        <div className="meta"><span className="date">Published 3 months ago</span></div>
                        <div className="intro">I am desinging a front end hosting panel for developers. I wanted to create a panel where developers have control over thier hosting envierment and can invite customers to thier envernment for their specific website.</div>
                        <span className="moreLink blue">See on Github →</span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="portfolioMedia">
                    <a href="https://github.com/byronwade/headlessCMS" className="portfolioBody">
                        <h3 className="title">Headless CMS</h3>
                        <div className="meta"><span className="date">Published 3 months ago</span></div>
                        <div className="intro">I wanted to have my own take on creating an admin panel for a headless CMS. I am a massive fan of Netlifys CMS panel. SO for fun I decided to start development on my own panel.</div>
                        <span className="moreLink blue">See on Github →</span>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="portfolioMedia">
                    <a href="https://github.com/byronwade/headlessCMS" className="portfolioBody">
                        <h3 className="title">Thorbis Hosting Panel</h3>
                        <div className="meta"><span className="date">Published 3 months ago</span></div>
                        <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                        <span className="moreLink blue">See on Github →</span>
                    </a>
                </div>
            </div>
        </div>

      </div>
    </section>
  </Layout>
)

export default Portfolio
