import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImageCard = ({ image }) => {
  const styles = {
    imgCard: {
      position: "relative",
      width: "100%",
      maxWidth: "40rem",
      height: "auto",
    },
    img: {},
    imgBg: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "-4px",
      left: "4px",
      border: "2.5px solid #007229",
      transform: "rotate(2deg)",
    },
  }

  const data = useStaticQuery(graphql`
    query uery {
      ws1: file(relativePath: { regex: "/card-workshop-zazitkovy.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)
  const zazitkovy = data.ws1.childImageSharp.fluid
  return (
    <div className="img-card" style={styles.imgCard}>
      <Img fluid={image} alt="" className="img-card__img" style={styles.img} />
      <div
        style={styles.imgBg}
        class="img-card__background img-card__background--ws-2"
      ></div>
    </div>
  )
}

export default ImageCard

// ...GatsbyImageSharpFluid
