import React from "react"
import SocialIcons from "./components/SocialIcons.tsx"
import FooterStyles from './index.module.scss'
import FooterAbout from "./components/About.tsx"

const Footer = () => {
    return (
        <div className={FooterStyles.FooterContainer}>
            <SocialIcons />
            <div className={FooterStyles.line} />
            <FooterAbout />
        </div>
    )
}

export default Footer