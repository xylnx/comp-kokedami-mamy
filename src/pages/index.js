import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/Layout"
import Button from "../components/Button"

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

  // Content
  const content = data.markdownRemark.html

  return (
    <Layout image={sources}>
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
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImgMobile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
