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
            <div><div className="subGlitch" data-text="Get in touch, lets talk over coffee.">Get in touch, lets talk over coffee.</div></div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <form className="contactForm" id="contact" method="POST" name="contact" action="https://getform.io/f/6ce15961-31e4-4422-8be5-7a6480fc17d0">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="group-val">
                <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className="group-val">
                <input type="text" id="email" name="email" placeholder="Email" />
            </div>
            <div className="group-val ct-gr">
                <textarea id="message" name="message" placeholder="Message" rows="6" ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-red">Send Message</button>
        </form>
      </div>
    </section>
  </Layout>
)

export default Contact
