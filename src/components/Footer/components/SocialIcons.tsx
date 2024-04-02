import React from "react"
import SocialIcon from "../../SocialIcon/index.tsx"
import SocialIconsStyles from '../index.module.scss'
import { TITLE_TEXT, SocialIconsData } from '../const.ts'

const SocialIcons = () => {
    return (
      <div className={SocialIconsStyles.SocialIconsContainer}>
        <div className={SocialIconsStyles.SocialIconsTitleContainer}>
            <div className="White_Red_Title header-title">{TITLE_TEXT.FIRST}<span>{TITLE_TEXT.LAST}</span> </div>
            <img src="/images/line.png" style={{ width: '94px' }} alt="" />
        </div>
        <div className={SocialIconsStyles.SocialIcons}>
            {
                SocialIconsData?.map((el, index) => {
                    return <SocialIcon key={index} icon={el.icon} />
                })
            }
        </div>
      </div>
    )
}

export default SocialIcons
