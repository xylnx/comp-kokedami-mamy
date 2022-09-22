// Gatsby
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Components
import SocialLinks from "../components/SocialLinks"

// Styles
import * as styles from "../assets/scss/Footer.module.scss"

const legalLinkTitle = "obchodní podmínky"

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
      paroznatka: file(relativePath: { regex: "/paroznatka.png/" }) {
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
    }
  `)
  const kokedama = data.kokedama.childImageSharp.fluid
  const paroznatka = data.paroznatka.childImageSharp.fluid
  const duznatka = data.duznatka.childImageSharp.fluid

  return (
    <footer className={styles.footer}>
      <Img fluid={kokedama} alt="" className={styles.kokedama} />
      <Img fluid={paroznatka} alt="" className={styles.paroznatka} />

      {isLegal && (
        <>
          <a
            className={styles.linkLegal}
            href="/Obchodni_podminky_2022.pdf"
            target="_blank"
            rel="noreferrer"
            title={legalLinkTitle}
          >
            {legalLinkTitle}
          </a>

          {/* prevent layout shifts on hover */}
          <style>
            {`[class*="link-legal"]:after {
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

      <Img fluid={duznatka} alt="" className={`duznatka ${styles.duznatka}`} />
    </footer>
  )
}

export default Footer
