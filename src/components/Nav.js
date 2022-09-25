// Gatsby
import React from "react"
import { Link } from "gatsby"

// Static assets
import logo from "../assets/img/logo.png"

// Styles
import * as styles from "../assets/scss/Nav.module.scss"

const Nav = ({ isHome }) => {
  const handleClick = () => {
    const check = document.querySelector("#navi-toggle")
    if (check.checked) {
      check.checked = false
    }
  }

  return (
    <nav className={styles.navWrapper}>
      {/* toggle mobile nav */}
      <input
        type="checkbox"
        id="navi-toggle"
        className={styles.nav__checkbox}
      />
      <label htmlFor="navi-toggle" className={styles.nav__button}>
        <div className={styles.nav__background}></div>
        <div className={styles.nav__icon}>&nbsp;</div>
      </label>

      <Link className={styles.nav__brand} to="/" aria-label="go to hompage">
        <img className={styles.nav__logo} src={logo} alt="" />
      </Link>

      <div className={styles.nav__list}>
        <Link
          className={`${styles.nav__link} ${isHome ? "active" : ""}`}
          to="/#about"
          onClick={handleClick}
        >
          o nás
        </Link>
        <Link
          className={styles.nav__link}
          to="/workshops"
          onClick={handleClick}
          activeClassName="active"
        >
          workshopy
        </Link>
        <a
          className={styles.nav__link}
          href="https://eshop.kokedamimamy.cz/"
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
        >
          e-shop
        </a>
        <Link
          className={styles.nav__link}
          to="/contact"
          onClick={handleClick}
          activeClassName="active"
        >
          kontakt
        </Link>
      </div>
    </nav>
  )
}

export default Nav
