import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/Layout"
import Button from "../components/Button"

export default function Home({ data }) {
  console.log(data)
  // Images
  const image = data.wsPart1.frontmatter.featuredImg.childImageSharp.fluid
  const imageMobile =
    data.wsPart1.frontmatter.featuredImgMobile.childImageSharp.fluid
  const sources = [
    { ...imageMobile, media: `(max-width: 500px)` },
    { ...image, media: `(min-width: 500px)` },
  ]

  // Content
  const content = data.wsPart1.html
  const contentPart2 = data.wsPart2.html

  return (
    <Layout image={sources} isLegal={true}>
      <section id="workshops" className="content flow">
        <div className="flow" dangerouslySetInnerHTML={{ __html: content }} />
        <Button />
        <div
          className="flow"
          dangerouslySetInnerHTML={{ __html: contentPart2 }}
        />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query workshopPageQuery {
    wsPart1: markdownRemark(
      fileAbsolutePath: { regex: "/workshops-part-1.md/" }
    ) {
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
    wsPart2: markdownRemark(
      fileAbsolutePath: { regex: "/workshops-part-2.md/" }
    ) {
      html
    }
  }
`
