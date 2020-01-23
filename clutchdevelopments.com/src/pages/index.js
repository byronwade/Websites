import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <h1>Hero</h1>
    </section>
    <section>
      <div className="container">
        <h1>The spectacle before us was indeed sublime.</h1>
        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
        <div class="vintageBlue-bg square"></div><div class="vintageRed-bg square"></div><div class="vintageYellow-bg square"></div><div class="vintageBrown-bg square"></div><div class="vintageBlack-bg square"></div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
