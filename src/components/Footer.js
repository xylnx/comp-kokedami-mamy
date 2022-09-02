import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Components
import SocialLinks from "../components/SocialLinks"

// Styles
import "../assets/scss/footer.scss"

const legalLinkTitle = "obchodní podmínky"

const styles = {
  kokedama: {
    display: "inline-block",
    width: "40%",
    maxWidth: "16rem",
    verticalAlign: "bottom",
  },
  paroznatka: {
    width: "30%",
    maxWidth: "18rem",
    verticalAlign: "bottom",
    display: "none",
  },
  duznatka: {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "16%",
    maxWidth: "8rem",
    display: "none",
  },
  linkLegal: {
    position: "absolute",
    bottom: "3.2rem",
    right: "14rem",
    fontWeight: "400",
  },
}

const Footer = ({ isSocial = true, isLegal = false }) => {
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

      {isLegal && (
        <>
          <a
            className="link--legal"
            href="/Obchodni_podminky_2022.pdf"
            target="_blank"
            rel="noreferrer"
            title={legalLinkTitle}
            style={styles.linkLegal}
          >
            {legalLinkTitle}
          </a>

          {/* prevent layout shifts on hover */}
          <style>
            {`.link--legal:after {
              content: '${legalLinkTitle}';
              visibility: hidden;
              height: 0;
              display: block;
              font-weight: bold;
          }`}
          </style>
        </>
      )}

      {isSocial && <SocialLinks />}

      <Img
        fluid={duznatka}
        alt=""
        className="duznatka"
        style={styles.duznatka}
      />
    </footer>
  )
}

export default Footer
