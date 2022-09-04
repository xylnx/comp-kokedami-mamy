import React from "react"

// Components
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"

const custom404 = () => {
  return (
    <Layout>
      <h1 style={{ marginTop: ".8rem" }}>Ooops!</h1>
      <p>Sorry, we could not find any content at this location.</p>
    </Layout>
  )
}

export default custom404
export const Head = () => <Seo title="Ooops... Page not found." />
