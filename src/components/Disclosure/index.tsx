import React from 'react'
import DisclosureWindow from './components/DisclosureWindow.tsx'
import DisclosureStyles from './index.module.scss'
import { TITLE_DATA } from './const.ts'

const Disclosure = () => {
  return (
    <div className={DisclosureStyles.Container}>
        <div className={DisclosureStyles.TitleContainer}>
            <div className='White_Red_Title medium-title'>{TITLE_DATA.FIRST} <span>{TITLE_DATA.LAST}</span></div>
            <img src="/images/line.png" alt="" style={{ width: '94px' }} />
        </div>
        <DisclosureWindow />
    </div>
  )
}

export default Disclosure