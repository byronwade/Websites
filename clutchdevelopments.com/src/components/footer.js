import { Link } from "gatsby"
import React from "react"

//CSS IMPORTING
import "../styles/index.scss"
const Footer = () => (
<footer>
    <div className="container py-5">
        <div className="row mb-5">
            <div className="col-12 col-md">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <h1 class="title">
                                    <span class="subtitle">Ready to get started?</span>
                                    Get in touch with me.
                                </h1>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-end">
                                <Link className="btn btn-blue" href="/contact/">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-12 col-md">
                © {new Date().getFullYear()}, Built by <span style={{fontWeight: `bold`}}>Byron Wade</span> and developed with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://reactjs.org/">React</a>
            </div>
            <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                <li><Link className="text-muted" to="/">Cool stuff</Link></li>
                <li><Link className="text-muted" to="/">Random feature</Link></li>
                <li><Link className="text-muted" to="/">Team feature</Link></li>
                <li><Link className="text-muted" to="/">Stuff for developers</Link></li>
                <li><Link className="text-muted" to="/">Another one</Link></li>
                <li><Link className="text-muted" to="/">Last time</Link></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                <li><Link className="text-muted" to="/">Resource</Link></li>
                <li><Link className="text-muted" to="/">Resource name</Link></li>
                <li><Link className="text-muted" to="/">Another resource</Link></li>
                <li><Link className="text-muted" to="/">Final resource</Link></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                <li><Link className="text-muted" to="/">Business</Link></li>
                <li><Link className="text-muted" to="/">Education</Link></li>
                <li><Link className="text-muted" to="/">Government</Link></li>
                <li><Link className="text-muted" to="/">Gaming</Link></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                <li><Link className="text-muted" to="/">Team</Link></li>
                <li><Link className="text-muted" to="/">Locations</Link></li>
                <li><Link className="text-muted" to="/">Privacy</Link></li>
                <li><Link className="text-muted" to="/">Terms</Link></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
)

export default Footer
