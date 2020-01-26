import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
<section class="contact">
<div class="container">
<div class="contact-header">
    <div class="text-wrap">
      <h1 class="h1">Hiring the Forefathers Group</h1>
      <span>Make a wish, from head to toe and submit the magic form below.</span>
    </div>
</div>
<div class="row">
    <div class="col-md-6">
      <h3>Reply Within 24 Hours</h3>
      <p>We’re extremely quick with getting back to you. We don’t dilly-dally around. Hit us up and we’ll be in touch ASAP.</p>
    </div>
    <div class="col-md-6">
      <h3>Connect With Us</h3>
      <div className="row">
        <div class="col-lg-6">
          <p><a href="https://dribbble.com/" class="contact-dribbble">Follow Us On Dribbble</a></p>
        </div>
        <div class="col-lg-6">
          <p><a href="https://dribbble.com/" class="contact-dribbble">Follow Us On Dribbble</a></p>
        </div>
      </div>
      <div className="row">
        <div class="col-lg-6">
          <p><a href="https://dribbble.com/" class="contact-dribbble">Follow Us On Dribbble</a></p>
        </div>
        <div class="col-lg-6">
          <p><a href="https://dribbble.com/" class="contact-dribbble">Follow Us On Dribbble</a></p>
        </div>
      </div>
    </div>
</div>
  <form role="form">
    <div className="row">
      <div className="col-md-6">
        <div id="feild-1" class="form-group">
          <input type="fullname" class="form-control" placeholder="Full Name" />
        </div>
      </div>
      <div className="col-md-6">
        <div id="feild-2" class="form-group">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div id="feild-3" class="form-group">
          <select name="budget">
            <option value="what-is-your-budget-for-the-project" selected="selected">What is your budget for the project?</option>
            <option value="usd1000-5-000">$1000-5000</option>
            <option value="usd5000-10-000">$5000-10,000</option>
            <option value="usd10-000-30-000">$10,000-30,000</option>
            <option value="usd30-000-usd50-000">$30,000-$50,000</option>
            <option value="usd50-000-and-up">$50,000+</option>
          </select>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div id="feild-4" class="form-group">
          <textarea row="6" type="fullname" class="form-control" placeholder="Brief Project Description"></textarea>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div class="form-group">
          <button class="vintageBtnBrown" type="button" value="Submit Form">Submit Form</button>
        </div>
      </div>
    </div>
  </form>
</div>
</section>
  </Layout>
)

export default Contact
