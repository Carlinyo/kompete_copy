import React from 'react'
import InfoStyles from '../index.module.scss'
import { TITLE_TEXTS, DESC } from './const.ts'

const Info = () => {
  return (
    <div className={InfoStyles.Info}>
        <img src="/images/Economy/Info/bg.png" alt="" className={InfoStyles.BigBg} />
        <img src="/images/Economy/Info/mobile-bg.png" alt="" className={InfoStyles.SmallBg} />
        <div className={InfoStyles.InfoDetails}>
            <div className={`${InfoStyles.TitleText} White_Red_Title medium-title`}>{TITLE_TEXTS.FIRST[0]} <span>{TITLE_TEXTS.LAST}</span>{TITLE_TEXTS.FIRST.slice(1)} </div>
            <img src="/images/line.png" alt="" />
            <div className={`${InfoStyles.Desc} big-description`}>{DESC}</div>
        </div>
    </div>
  )
}

export default Info
