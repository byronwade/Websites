import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <section className="services">
      <div class="container">
        <div className="serviceHeader align-center">
          <span class="md-century">Ever Forthright Day &amp; Night</span>
          <h1>SERVICES FOR BUSINESSES</h1>
          <p>Greetings! We’re Forefathers–a team of vibrant, specialized gentleman who dedicate their daily lives to designing for the world. Below is a list of our services.</p>
        </div>
        <div class="service-grid">
          <ul class="serviceList">
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 01</span>
                  <span class="h3">Design Strategy 101</span>
                  <p>Preparation is half the battle and the key to great design is creating a strategy and direction to ensure success for each project.</p>
              </div>
            </li>
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 02</span>
                  <span class="h3">Responsive Branding</span>
                  <p>We don’t just make logos. We create identity systems that can go anywhere. Our Responsive Branding ensures your brand is ready for anything.</p>
              </div>
            </li>
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 03</span>
                  <span class="h3">Responsive Branding</span>
                  <p>We don’t just make logos. We create identity systems that can go anywhere. Our Responsive Branding ensures your brand is ready for anything.</p>
              </div>
            </li>
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 04</span>
                  <span class="h3">Web Design</span>
                  <p>Responsive web design is our bread and butter. No templates based design here. Each web design we create is 100% completely custom to cater to your businesses exact message and needs. </p>
              </div>
            </li>
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 05</span>
                  <span class="h3">Web Development</span>
                  <p>It’s essential that your website is a great experience for your visitors no matter what device they’re on. We pride ourselves in our development standards that merges stunning design with light as a feather code.  </p>
              </div>
            </li>
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 06</span>
                  <span class="h3">Print Design</span>
                  <p>Print’s not dead, it’s merely changed. Many of our clients still have multiple needs for print design and we’re always eager to answer the call. It’s what made us Designers in the first place.</p>
              </div>
            </li>
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 07</span>
                  <span class="h3">Package Design</span>
                  <p>Well designed brand packaging can make or break a product's success. From the art direction to the final dueling placement we got the need for bleed. </p>
              </div>
            </li>
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 08</span>
                  <span class="h3">Responsive Branding</span>
                  <p>We don’t just make logos. We create identity systems that can go anywhere. Our Responsive Branding ensures your brand is ready for anything.</p>
              </div>
            </li>
            <li>
              <div class="text-wrap">
                  <span class="sm-century">SERVICE No. 09</span>
                  <span class="h3">Love and Care</span>
                  <p>Your website is a living entity and requires love and care. It just so happens we’re extremely good at that sort of thing and can help keep your content fresh for your visitors.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default Services
