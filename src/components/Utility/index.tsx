import React from "react"
import UtilityStyles from './index.module.scss'
import UseKompete from "./components/UseKompete.tsx"
import GainExclusiveAccess from "./components/GainExclusiveAccess.tsx"
import Whitepaper from "./components/Whitepaper.tsx"
import { TITLE_TEXTS } from './const.ts'

const Utility = () => {
    return (
        <div className={UtilityStyles.Container}>
            <div className={UtilityStyles.TitleContainer}>
                <div className="White_Red_Title medium-title">{TITLE_TEXTS.FIRST} <br /> <span>{TITLE_TEXTS.LAST}</span></div>
                <img src="/images/line.png" alt="" className={UtilityStyles.line} />
            </div>
            <img src="/images/utility/Tokens/token1.png" alt="" className={UtilityStyles.token1} />
            <img src="/images/utility/Tokens/token2.png" alt="" className={UtilityStyles.token2} />
            <img src="/images/utility/Tokens/token3.png" alt="" className={UtilityStyles.token3} />
            <UseKompete />
            <GainExclusiveAccess />
            <Whitepaper />
        </div>
    )
}

export default Utility