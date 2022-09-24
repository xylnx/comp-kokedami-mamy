// Gatsby
import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import Button from "../components/Button"
import ImageCard from "../components/ImageCard"
import { Seo } from "../components/Seo"

import * as styles from "../assets/scss/_workshops.module.scss"

export default function Home({ data }) {
  // Images
  const image = data.wsPart1.frontmatter.featuredImg.childImageSharp.fluid
  const imageMobile =
    data.wsPart1.frontmatter.featuredImgMobile.childImageSharp.fluid
  const sources = [
    { ...imageMobile, media: `(max-width: 500px)` },
    { ...image, media: `(min-width: 500px)` },
  ]

  // Card images
  const imageWsCard0 = data.wsCard0.childImageSharp.fluid
  const imageWsCard1 = data.wsCard1.childImageSharp.fluid
  const imageWsCard2 = data.wsCard2.childImageSharp.fluid

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
        <div className={styles.imageCards}>
          <ImageCard image={imageWsCard0} />
          <ImageCard image={imageWsCard1} />
          <ImageCard image={imageWsCard2} />
        </div>
      </section>
    </Layout>
  )
}

// Add head infos
export const Head = () => <Seo />

// Query content
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
    wsPart2: markdownRemark(
      fileAbsolutePath: { regex: "/workshops-part-2.md/" }
    ) {
      html
    }
    wsCard0: file(relativePath: { regex: "/card-workshop-zazitkovy.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wsCard1: file(relativePath: { regex: "/card-workshop-2.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wsCard2: file(relativePath: { regex: "/card-workshop-3.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
