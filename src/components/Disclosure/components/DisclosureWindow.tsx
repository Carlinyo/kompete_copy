import React from "react"
import DisclosureStyles from '../index.module.scss'
import { WINDOW_DESCRIPTION, WINDOW_TITLE_DATA } from "../const.ts"

const DisclosureWindow = () => {
    return (
        <div className={DisclosureStyles.Window}>
            <div className={DisclosureStyles.texts}>
                <img src="/images/info/token.png" alt="" className={`${DisclosureStyles.token4} ${DisclosureStyles.token}`} />
                <div className="White_Red_Title header-title">{WINDOW_TITLE_DATA.FIRST} <span>{WINDOW_TITLE_DATA.LAST}</span></div>
                <div className="default-text">{WINDOW_DESCRIPTION}</div>
            </div>
            <img src="/images/utility/Tokens/token2.png" alt="" className={`${DisclosureStyles.token1} ${DisclosureStyles.token}`} />
            <img src="/images/utility/Tokens/token5.png" alt="" className={`${DisclosureStyles.token3} ${DisclosureStyles.token}`} />
                <img src="/images/utility/Tokens/token4.png" alt="" className={`${DisclosureStyles.token2} ${DisclosureStyles.token}`} />
            <img src="/images/disclosure/tokens.svg" alt="" className={DisclosureStyles.tokens} />
        </div>
    )
}

export default DisclosureWindow