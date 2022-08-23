import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const Hero = ({ image }) => {
  return (
    <>
      <GatsbyImage style={{ maxHeight: "70vh" }} image={image} alt="" />
    </>
  )
}

export default Hero
