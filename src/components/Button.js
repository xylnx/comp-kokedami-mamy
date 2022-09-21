import React from "react"
import { Link } from "gatsby"

import "../assets/scss/buttons.scss"

const Button = ({ title, href, isBlank = true }) => {
  console.log(href)
  return (
    <>
      {isBlank && (
        <a href={href} target="_blank" rel="noreferrer" className="btn">
          <span className="btn__text">{title}</span>
        </a>
      )}
      {!isBlank && (
        <Link to={href} className="btn">
          <span className="btn__text">{title}</span>
        </Link>
      )}
    </>
  )
}

export default Button
