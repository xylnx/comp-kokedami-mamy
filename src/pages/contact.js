// React
import React from "react"
// Gatsby
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
// Components
import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"

export default function Home({ data }) {
  const image = getImage(data.markdownRemark.frontmatter.featured_image)
  const content = data.markdownRemark.html

  return (
    <Layout image={image} isSocial={false}>
      <div
        className="content flow"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <SocialLinks customStyles={{ position: "initial" }} />{" "}
    </Layout>
  )
}

export const pageQuery = graphql`
  query contactPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
      frontmatter {
        slug
        title
        featured_image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF, JPG]
            )
          }
        }
      }
      html
    }
  }
`
