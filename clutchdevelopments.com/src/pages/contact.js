import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact your local web developer" />
      <section className="hero contact text-light">
        <div className="container">
          <h1 className="mb-5">Contact Me Anytime</h1>
          <div className="row">
            <div className="col-lg-8">
              <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div class="form-group row">
                  <label for="name" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                    <input className="form-control border-0 rounded-0" type="text" name="name" id="name" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="email" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input className="form-control border-0 rounded-0" type="text" name="email" id="email" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="message" class="col-sm-2 col-form-label">Message</label>
                  <div class="col-sm-10">
                    <textarea className="form-control border-0 rounded-0" name="message" id="message" rows="6" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <button type="submit" class="btn btn-blue ml-0">Contact Me</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <h2 className="mb-3">Your Local Designer</h2>
              <p className="lead font-weight-normal mb-3">I am currently doing free websites and applications for anyone willing, im in the process of building my portfolio.</p>
              <p>Email: bcw1995@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
  </Layout>
)

export default ContactPage
