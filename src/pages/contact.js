// Gatsby
import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"
import { Seo } from "../components/Seo"

export default function Home({ data }) {
  // Images
  const image =
    data.markdownRemark.frontmatter.featuredImg.childImageSharp.fluid
  const imageMobile =
    data.markdownRemark.frontmatter.featuredImgMobile.childImageSharp.fluid
  const sources = [
    { ...imageMobile, media: `(max-width: 500px)` },
    { ...image, media: `(min-width: 500px)` },
  ]

  const content = data.markdownRemark.html

  return (
    <Layout image={sources} isSocial={false}>
      <section
        id="contact"
        className="content flow"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <SocialLinks customStyles={{ position: "initial" }} />{" "}
    </Layout>
  )
}

// Add head infos
export const Head = () => <Seo />

// Query content
export const pageQuery = graphql`
  query contactPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
      frontmatter {
        slug
        title
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        featuredImgMobile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
    }
  }
`
