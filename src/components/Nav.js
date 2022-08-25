import React from "react"
import { Link } from "gatsby"

import logo from "../assets/img/logo.png"
import "../assets/scss/nav.scss"

const Nav = () => {
  const handleClick = () => {
    const check = document.querySelector("#navi-toggle")
    if (check.checked) {
      check.checked = false
    }
  }

  return (
    <nav className="nav wrapper">
      {/* toggle mobile nav */}
      <input type="checkbox" id="navi-toggle" className="nav__checkbox" />
      <label htmlFor="navi-toggle" className="nav__button">
        <div className="nav__background"></div>
        <div className="nav__icon">&nbsp;</div>
      </label>

      <Link className="nav__brand" to="/" aria-label="go to hompage">
        <img className="nav__logo" src={logo} alt="" />
      </Link>

      <div className="nav__list">
        <Link className="nav__link" to="/#about" onClick={handleClick}>
          o nás
        </Link>
        <Link className="nav__link" to="/workshops">
          workshopy
        </Link>
        <a
          className="nav__link"
          href="https://eshop.kokedamimamy.cz/"
          target="_blank"
          rel="noreferrer"
        >
          e-shop
        </a>
        <Link className="nav__link" to="/contact" onClick={handleClick}>
          kontakt
        </Link>
      </div>
    </nav>
  )
}

export default Nav
