import HowToBuyItem from "./components/HowToBuyItem.tsx"
import React from "react"
import HowToBuyStyles from './index.module.scss'
import { tokens, HOW_TO_BUY_TEXTS } from './const.ts'
const { HOW_TO, BUY } = HOW_TO_BUY_TEXTS

const HowToBuy = () => {
    return (
      <>
        <div className={HowToBuyStyles.Container}>
            <div className={HowToBuyStyles.TitleContainer}>
              <div className='White_Red_Title medium-title'>{HOW_TO} <span>{BUY}</span></div>
              <img src="/images/line.png" className={HowToBuyStyles.line} alt="" />
            </div>
            <div className={`${HowToBuyStyles.ElementsContainer} FlexElementBetween`}>
              {
                tokens.map((el, index) => {
                  return <HowToBuyItem key={index} title={el.title} token={el.token}  />
                })
              }
            </div>
        </div>
      </>
    )
}

export default HowToBuy