import React from "react"
import SocialIconStyles from './index.module.scss'

interface ISocialIcon {
  icon: string
}

const SocialIcon: React.FC<ISocialIcon> = ({icon}) => {
    return (
      <div className={SocialIconStyles.SocialIconContainer}>
        <img src="/images/SocialIconContainer.png" alt="" />
        <img src={icon} className={SocialIconStyles.Icon} alt="" />
      </div>
    )
}

export default SocialIcon
