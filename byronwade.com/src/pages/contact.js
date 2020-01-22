import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="jumbo">
      <div className="container">
        <div className="jumboHeader">
            <div><div className="glitch" data-text="CONTACT">CONTACT</div></div>
            <div><div className="subGlitch" data-text="Get in touch, lets talk about work or hobbies over coffee.">Get in touch, lets talk about work or hobbies over coffee.</div></div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <form className="contactForm" id="contact" method="post">
            <div className="group-val">
                <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="group-val">
                <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="group-val ct-gr">
                <textarea name="message" placeholder="Message"></textarea>
            </div>
            <button className="btn btn-outline-red">Send Message</button>
        </form>
      </div>
    </section>
  </Layout>
)

export default Contact
