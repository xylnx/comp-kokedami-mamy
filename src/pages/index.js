// Gatsby
import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import Button from "../components/Button"
import { Seo } from "../components/Seo"

export default function Home({ data }) {
  // Log build time
  const lastBuild = new Date(data.site.buildTime)
  console.log(`%c${lastBuild}`, "background: #444; color: #fff")

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
    <Layout image={sources} isHome={true}>
      <section
        id="about"
        className="content flow"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Button title="e-shop" href="https://eshop.kokedamimamy.cz" />
    </Layout>
  )
}

// Append title etc. to `<head>`
export const Head = () => <Seo />

// Query data to populate the home page
export const pageQuery = graphql`
  query homePageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
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
    site {
      buildTime
    }
  }
`
