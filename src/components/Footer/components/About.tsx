import React from "react"
import FooterStyles from '../index.module.scss'
import { FOOTER_ABOUT_TEXTS } from '../const.ts'

const FooterAbout = () => {
    return (
        <div className={FooterStyles.AboutContainer}>
            <div className={FooterStyles.AboutLogoDesc}>
                <img src="/images/footer/logo.png" alt="" className={FooterStyles.logo} />
                <div className={`${FooterStyles.AboutDescription} footer-description`}>{FOOTER_ABOUT_TEXTS.TITLE}</div>
            </div>
            <div className={FooterStyles.AboutItems}>
                <div className={`${FooterStyles.AboutItem} footer-small-description`}>{FOOTER_ABOUT_TEXTS.PRIVACY}</div>
                <div className={`${FooterStyles.AboutItem} footer-small-description`}>{FOOTER_ABOUT_TEXTS.TERMS}</div>
                <div className={`${FooterStyles.AboutItem} footer-small-description`}>{FOOTER_ABOUT_TEXTS.COOKIES}</div>
            </div>
        </div>
    )
}

export default FooterAbout