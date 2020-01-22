import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section class="jumbo">
      <div class="container">
        <div class="jumboHeader">
          <div class="glitch" data-text="CONTACT">CONTACT</div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <form className="contactForm" id="contact" method="post">
            <div class="group-val">
                <input type="text" name="name" placeholder="Name" />
            </div>
            <div class="group-val">
                <input type="text" name="email" placeholder="Email" />
            </div>
            <div class="group-val ct-gr">
                <textarea name="message" placeholder="Message"></textarea>
            </div>
            <button class="btn btn-outline-red">Send Message</button>
        </form>
      </div>
    </section>
  </Layout>
)

export default Contact
