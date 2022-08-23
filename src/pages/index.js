import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/Layout"
import Button from "../components/Button"

export default function Home({ data }) {
  const image = getImage(data.markdownRemark.frontmatter.featured_image)
  const content = data.markdownRemark.html

  return (
    <Layout image={image}>
      <section
        id="about"
        className="content flow"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Button />
    </Layout>
  )
}

export const pageQuery = graphql`
  query homePageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
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
