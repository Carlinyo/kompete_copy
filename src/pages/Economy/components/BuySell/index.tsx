import React from "react"
import Button from "../../../../components/Button/index.tsx"
import BuySellStyles from './index.module.scss'
import { BUY_SELL_TEXTS, BUY_SELL_TITLE_TEXTS } from './const.ts'

const BuySell = () => {
    const firstPart = BUY_SELL_TITLE_TEXTS.FIRST.slice(0, BUY_SELL_TITLE_TEXTS.FIRST.length - 6)
    const lastPart = BUY_SELL_TITLE_TEXTS.FIRST.split(' ').at(-1)

    return (
        <div className={BuySellStyles.Container}>
            <div className="White_Red_Title medium-title"><span>{firstPart} <br /> {lastPart}</span>{BUY_SELL_TITLE_TEXTS.LAST}</div>
            <img src="/images/line.png" alt="" />
            <div className={BuySellStyles.DetailsContainer}>
                <img src="/images/Economy/Tokens/kompete.png" alt="" />
                <div className={BuySellStyles.Details}>
                    <div className="header-title">{BUY_SELL_TEXTS.TITLE}</div>
                    <div className="default-text">{BUY_SELL_TEXTS.DESCRIPTION}</div>
                    <Button variant="red-button" style={{ width: '240px' }}>{BUY_SELL_TEXTS.BTN_TEXT}</Button>
                </div>
            </div>
        </div>
    )
}

export default BuySell
