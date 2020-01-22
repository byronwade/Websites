import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <section class="jumbo">
      <div class="container">
        <div class="jumboHeader">
          <div class="glitch" data-text="RESUME">RESUME</div>
        </div>
      </div>
    </section>
    <section className="section">
        <div className="container">
            <div className="content quickInfo">
                <div class="row">
                    <div class="col-sm-12 col-md-3">
                        <div class="header">
                            <div class="contentBody">
                                <h4>Location</h4>
                                <address>Ben Lomond, CA, USA</address>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div class="header">
                            <div class="contentBody">
                                <h4>Phone</h4>
                                <p>1.831.430.6011</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div class="header">
                            <div class="contentBody">
                                <h4>Clutch Developments</h4>
                                <p><a href="https://www.clutchdevelopments.com" target="_blank">cluchdevelopments.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div class="header">
                            <div class="contentBody">
                                <h4>Email</h4>
                                <p><a href="#" target="_blank">bcw1995@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="colorDarkLight-over"></div>
        <div class="colorDarkLightLighter-over backgroundRight"></div>
        <div class="container">
            <div class="sectionContainer row">
                <header class="sectionHeader colorDarkLight col-sm-12 col-md-3">
                    <div class="content">
                        <h2 class="sectionHeading">Intro</h2>
                        <div class="contentBody">What I am all about.</div>
                    </div>
                </header>
                <div class="sectionContent colorDarkLightLighter col-sm-12 col-md-9">
                    <div class="content">
                        <div class="intro">
                            <div class="contentBody">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed <a href="#" target="_blank">pretium</a>, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus.</p>
                                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="colorDark-over"></div>
        <div class="colorDarkLight-over backgroundRight"></div>
        <div class="container">
            <div class="sectionContainer row">
                <header class="sectionHeader colorDark col-sm-12 col-md-3">
                    <div class="content">
                        <h2 class="sectionHeading">EXPERTISE</h2>
                        <div class="contentBody">Batman would be jealous.</div>
                    </div>
                </header>
                <div class="sectionContent colorDarkLight col-sm-12 col-md-9">
                    <div class="content">
                        <div class="intro">
                            <div class="contentBody">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div class="media">
                                            <div class="mediaFigure">
                                                <div class="number red">01</div>
                                            </div>
                                            <div class="mediaBody">
                                                <h3>ADVANCED CSS</h3>
                                                <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div class="media">
                                            <div class="mediaFigure">
                                                <div class="number red">02</div>
                                            </div>
                                            <div class="mediaBody">
                                                <h3>ADVANCED CSS</h3>
                                                <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div class="media">
                                            <div class="mediaFigure">
                                                <div class="number red">01</div>
                                            </div>
                                            <div class="mediaBody">
                                                <h3>ADVANCED CSS</h3>
                                                <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div class="media">
                                            <div class="mediaFigure">
                                                <div class="number red">02</div>
                                            </div>
                                            <div class="mediaBody">
                                                <h3>ADVANCED CSS</h3>
                                                <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section">
        <div class="colorDarkLight-over"></div>
        <div class="colorDarkLightLighter-over backgroundRight"></div>
        <div class="container">
            <div class="sectionContainer row">
                <header class="sectionHeader colorDarkLight col-sm-12 col-md-3">
                    <div class="content">
                        <h2 class="sectionHeading">Intro</h2>
                        <div class="contentBody">What I am all about.</div>
                    </div>
                </header>
                <div class="sectionContent colorDarkLightLighter col-sm-12 col-md-9">
                    <div class="content">
                        <div class="intro">
                            <div class="contentBody">
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="experiance">
                                            <div class="timeframe">2015 – Present</div>
                                            <h3 class="heading">Unicorn Incubator Inc.</h3>
                                            <h4 class="title">Senior Interface Designer</h4>
                                            <div class="location">Portland, OR</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-7">
                                        <p>Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
  </Layout>
)

export default Resume
