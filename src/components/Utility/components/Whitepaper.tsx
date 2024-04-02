import React from 'react'
import Button from '../../Button/index.tsx'
import UtilityStyles from '../index.module.scss'
import { WHITEPAPER_TEXTS, WHITEPAPER_TITLE_TEXTS } from '../const.ts'

const Whitepaper = () => {
  return (
    <div className={UtilityStyles.Whitepaper}>
      <div className={UtilityStyles.WhitepaperTitleContainer}>
        <div className='White_Red_Title medium-title'>{WHITEPAPER_TITLE_TEXTS.FIRST} <span>{WHITEPAPER_TITLE_TEXTS.LAST} <br /> Our Whitepaper!</span></div>
        <img src="/images/line.png" alt="" className={UtilityStyles.line} />
      </div>
        <div className={UtilityStyles.WhitepaperDetails}>
            <img src="/images/utility/Whitepaper/book.png" alt="" className={UtilityStyles.Book} />
            <div className={UtilityStyles.WhitepaperButtonTitle}>
              <div className={`${UtilityStyles.WhitepaperTitle} small-title`}>{WHITEPAPER_TEXTS.TITLE}</div>
              <Button variant='green-button'>{WHITEPAPER_TEXTS.BTN_TEXT}</Button>
            </div>
            <div className={`${UtilityStyles.WhitepaperDescription} default-text`}>
              {WHITEPAPER_TEXTS.DESC}
            </div>
            <Button variant='red-button' style={{ width: '212px' }}>{WHITEPAPER_TEXTS.BTN_TEXT}</Button>
        </div>
    </div>
  )
}

export default Whitepaper