// Modules
import React from "react"

// Styles
import * as styles from "../assets/scss/_socialBtns.module.scss"

const SocialBtns = () => {
  console.log(styles)
  return (
    <div className={styles.socialContainer}>
      <div className={styles.social}>
        {/* facebook btn */}
        <div className="social__link-box">
          <a
            href="https://www.facebook.com/kokedamimamy/"
            target="_blank"
            rel="noreferrer"
            className="social__link"
          >
            <div className="social__btn social__btn--fb">
              <i className="fa fa-facebook social__icon" aria-hidden="true"></i>
            </div>
          </a>
        </div>
        {/* insta btn */}
        <div className="social__link-box">
          <a
            href="https://www.instagram.com/kokedami_mamy/"
            target="_blank"
            rel="noreferrer"
            className="social__link"
          >
            <div className="social__btn">
              <i
                className="social__text fa fa-instagram social__icon"
                aria-hidden="true"
              ></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialBtns
