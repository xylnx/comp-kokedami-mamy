import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Components
import SocialLinks from "../components/SocialLinks"

// Styles
import "../assets/scss/footer.scss"
const styles = {
  kokedama: {
    display: "inline-block",
    width: "40%",
    maxWidth: "16rem",
    verticalAlign: "bottom",
  },
  paroznatka: {
    display: "inline-block",
    width: "30%",
    maxWidth: "18rem",
    verticalAlign: "bottom",
    display: "none",
  },
  duznatka: {
    position: "absolute",
    bottom: "0",
    right: "0",
    display: "inline-block",
    width: "16%",
    maxWidth: "6rem",
    display: "none",
  },
}

const Footer = ({ isSocial = true }) => {
  const data = useStaticQuery(graphql`
    query query {
      kokedama: file(relativePath: { regex: "/kokedama-1.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      duznatka: file(relativePath: { regex: "/duznatka.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paroznatka: file(relativePath: { regex: "/paroznatka.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const kokedama = data.kokedama.childImageSharp.fluid
  const duznatka = data.kokedama.childImageSharp.fluid
  const paroznatka = data.paroznatka.childImageSharp.fluid

  return (
    <footer
      className="footer"
      style={{ position: "relative", marginTop: "2.4rem" }}
    >
      <Img
        fluid={kokedama}
        alt=""
        className="kokedama"
        style={styles.kokedama}
      />
      <Img
        fluid={paroznatka}
        alt=""
        className="paroznatka"
        style={styles.paroznatka}
      />
      {isSocial && <SocialLinks />}

      <Img
        fluid={data.duznatka.childImageSharp.fluid}
        alt=""
        className="duznatka"
        style={styles.duznatka}
      />
      {/*

      <GatsbyImage
        image={duznatka}
        alt=""
        style={styles.duznatka}
        imgStyle={{ objectFit: "none" }}
      />
      */}

      <style>
        {`
          .paroznatka {
          display: none;
        }
        `}
      </style>
    </footer>
  )
}

export default Footer
