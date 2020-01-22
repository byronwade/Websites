import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <section className="jumbo">
      <div className="container">
        <div className="jumboHeader">
            <div><div className="glitch" data-text="RESUME">RESUME</div></div>
            <div><div className="subGlitch" data-text="My offical resume.">My offical resume.</div></div>
        </div>
      </div>
    </section>
    <section className="section">
        <div className="container">
            <div className="content quickInfo">
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="header">
                            <div className="contentBody">
                                <h4>Location</h4>
                                <address>Ben Lomond, CA, USA</address>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="header">
                            <div className="contentBody">
                                <h4>Phone</h4>
                                <p>1.831.430.6011</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="header">
                            <div className="contentBody">
                                <h4>Clutch Developments</h4>
                                <p><a href="https://www.clutchdevelopments.com" target="_blank">cluchdevelopments.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="header">
                            <div className="contentBody">
                                <h4>Email</h4>
                                <p><a href="#" target="_blank">bcw1995@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section">
        <div className="colorDarkLight-over"></div>
        <div className="colorDarkLightLighter-over backgroundRight"></div>
        <div className="container">
            <div className="sectionContainer row">
                <header className="sectionHeader colorDarkLight col-sm-12 col-md-3">
                    <div className="content">
                        <h2 className="sectionHeading">Intro</h2>
                        <div className="contentBody">What I am all about.</div>
                    </div>
                </header>
                <div className="sectionContent colorDarkLightLighter col-sm-12 col-md-9">
                    <div className="content">
                        <div className="intro">
                            <div className="contentBody">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed <a href="#" target="_blank">pretium</a>, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus.</p>
                                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section">
        <div className="colorDark-over"></div>
        <div className="colorDarkLight-over backgroundRight"></div>
        <div className="container">
            <div className="sectionContainer row">
                <header className="sectionHeader colorDark col-sm-12 col-md-3">
                    <div className="content">
                        <h2 className="sectionHeading">EXPERTISE</h2>
                        <div className="contentBody">Batman would be jealous.</div>
                    </div>
                </header>
                <div className="sectionContent colorDarkLight col-sm-12 col-md-9">
                    <div className="content">
                        <div className="intro">
                            <div className="contentBody">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="media">
                                            <div className="mediaFigure">
                                                <div className="number red">01</div>
                                            </div>
                                            <div className="mediaBody">
                                                <h3>ADVANCED CSS</h3>
                                                <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="media">
                                            <div className="mediaFigure">
                                                <div className="number red">02</div>
                                            </div>
                                            <div className="mediaBody">
                                                <h3>ADVANCED CSS</h3>
                                                <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="media">
                                            <div className="mediaFigure">
                                                <div className="number red">01</div>
                                            </div>
                                            <div className="mediaBody">
                                                <h3>ADVANCED CSS</h3>
                                                <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="media">
                                            <div className="mediaFigure">
                                                <div className="number red">02</div>
                                            </div>
                                            <div className="mediaBody">
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
    
    <section className="section">
        <div className="colorDarkLight-over"></div>
        <div className="colorDarkLightLighter-over backgroundRight"></div>
        <div className="container">
            <div className="sectionContainer row">
                <header className="sectionHeader colorDarkLight col-sm-12 col-md-3">
                    <div className="content">
                        <h2 className="sectionHeading">Experiance</h2>
                        <div className="contentBody">What I am all about.</div>
                    </div>
                </header>
                <div className="sectionContent colorDarkLightLighter col-sm-12 col-md-9">
                    <div className="content">
                        <div className="intro">
                            <div className="contentBody">
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="experiance">
                                            <div className="timeframe">2015 – Present</div>
                                            <h3 className="heading">Unicorn Incubator Inc.</h3>
                                            <h4 className="title">Senior Interface Designer</h4>
                                            <div className="location">Portland, OR</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <p>Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="experiance">
                                            <div className="timeframe">2015 – Present</div>
                                            <h3 className="heading">Unicorn Incubator Inc.</h3>
                                            <h4 className="title">Senior Interface Designer</h4>
                                            <div className="location">Portland, OR</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
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
