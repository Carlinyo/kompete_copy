import React from "react"
import CosmeticsItems from './components/CosmeticsItems.tsx'
import CosmeticsStyles from './index.module.scss'
import { COSMETICS_TITLE_TEXT } from './const.ts'

const Cosmetics = () => {
    return (
        <div className={CosmeticsStyles.Container}>
            <div className="White_Red_Title medium-title">{COSMETICS_TITLE_TEXT.FIRST}<span>{COSMETICS_TITLE_TEXT.LAST}</span></div>
            <img src="/images/line.png" alt="" className={CosmeticsStyles.Line} />
            <CosmeticsItems />
        </div>
    )
}

export default Cosmetics
