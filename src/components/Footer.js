import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Components
import SocialLinks from "../components/SocialLinks"

const Footer = ({ isSocial = true }) => {
  const data = useStaticQuery(graphql`
    query query {
      kokedama: file(relativePath: { regex: "/kokedama-1.png/" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF, PNG]
          )
        }
      }
      duznatka: file(relativePath: { regex: "/duznatka.png/" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF, PNG]
          )
        }
      }
      paroznatka: file(relativePath: { regex: "/paroznatka.png/" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF, PNG]
          )
        }
      }
    }
  `)
  const kokedama = getImage(data.kokedama)
  const duznatka = getImage(data.duznatka)
  const paroznatka = getImage(data.paroznatka)

  return (
    <footer
      className="footer"
      style={{ position: "relative", marginTop: "2.4rem" }}
    >
      <GatsbyImage
        image={kokedama}
        alt=""
        style={{
          display: "inline-block",
          maxWidth: "16rem",
          verticalAlign: "bottom",
        }}
      />
      <GatsbyImage
        image={paroznatka}
        alt=""
        style={{
          display: "inline-block",
          maxWidth: "16rem",
          verticalAlign: "bottom",
        }}
      />
      {isSocial && <SocialLinks />}
      <GatsbyImage
        image={duznatka}
        alt=""
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          display: "inline-block",
          maxWidth: "10rem",
          verticalAlign: "bottom",
        }}
      />
    </footer>
  )
}

export default Footer
