import React from "react"

// Components
import Nav from "../components/Nav"
import SocialLinks from "../components/SocialLinks"

// Styles
import "./../assets/scss/global.scss"

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <SocialLinks />
      </footer>
    </>
  )
}

export default Layout
