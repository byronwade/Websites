import React from 'react'
import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "armor.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`#000`} >
          <div className="container zindex">
            <h1 className="heroName">Byron Wade</h1>
            <h2 className="heroSub">Freelance Web Designer/Front-End Developer.</h2>
            <p className="lead">The Knight and shining armor of web development.</p>
            <div>
              <Link to="/contact/" className="btn btn-blue pl-0 ml-0">Hire Me</Link>
              <Link to="/contact/" className="btn btn-alt">Github</Link>
            </div>
          </div>
          <div className="darkOverlay"></div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-size: cover;
  height: 100vh;
  color:white;
  padding:0;
`

export default StyledBackgroundSection