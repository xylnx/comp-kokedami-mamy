// Gatsby
import React from "react"

// Components
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

// Styles
import "./../assets/scss/global.scss"

const Layout = ({ image, isSocial = true, isLegal = false, children }) => {
  return (
    <>
      <header className="header">
        <Nav />
        {image && <Hero image={image} />}
      </header>
      <main className="main container flow">{children}</main>
      <Footer isSocial={isSocial} isLegal={isLegal} />
    </>
  )
}

export default Layout
