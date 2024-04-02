import React from "react"
import Button from "../../Button/index.tsx"
import HowToBuyStyles from '../index.module.scss'
import { HOW_TO_BUY_TEXTS } from '../const.ts'

const HowToBuyItem = ({ title, token }) => {
    return (
        <div className={HowToBuyStyles.ElementContainer}>
            <img className={HowToBuyStyles.TokenImage} src={`/images/tokens/${title}.png`} alt="" />
            <div className={`${HowToBuyStyles.elementTitle} small-title`}>{title.toUpperCase()}</div>
            <Button variant="how-to-buy-button">{HOW_TO_BUY_TEXTS.BUY_WITH} {token.toUpperCase()}</Button>
        </div>
    )
}

export default HowToBuyItem