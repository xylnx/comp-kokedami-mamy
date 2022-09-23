// Gatsby
import React from "react"
import Img from "gatsby-image"

// Styles
import * as styles from "../assets/scss/ImageCard.module.scss"

const ImageCard = ({ image }) => {
  return (
    <div className={styles.imgCard}>
      <Img fluid={image} alt="" />
      <div className={styles.imgBg}></div>
    </div>
  )
}

export default ImageCard
