// Modules
import React from "react"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"

// Styles
import * as styles from "../assets/scss/_socialBtns.module.scss"

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.social}>
        {/* facebook btn */}
        <a
          href="https://www.facebook.com/kokedamimamy/"
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          <FontAwesomeIcon
            className="social__icon"
            aria-hidden="true"
            icon={faFacebookF}
          />
        </a>
        {/* insta btn */}
        <a
          href="https://www.instagram.com/kokedami_mamy/"
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          <FontAwesomeIcon
            className="social__icon"
            aria-hidden="true"
            icon={faInstagram}
          />
        </a>
      </div>
    </div>
  )
}

export default SocialLinks
