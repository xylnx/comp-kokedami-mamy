import React from "react"
// Gatsby
import Img from "gatsby-image"

const Hero = ({ image }) => {
  return (
    <>
      <Img style={{ height: "70vh" }} fluid={image} alt="" />
    </>
  )
}

export default Hero
