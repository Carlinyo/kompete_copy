import React from "react"
import TokenomicsItem from "./components/TokenomicsItem.tsx"
import { TokenomicsData, TITLE_TEXTS } from './const.ts' 
import TokenomicsStyles from './index.module.scss'

const Tokenomics = () => {
    return (
        <div className={TokenomicsStyles.Container}>
            <div className={TokenomicsStyles.TitleContainer}>
                <div className="White_Red_Title medium-title">{TITLE_TEXTS.THE} <span>{TITLE_TEXTS.TOKENOMICS}</span></div>
                <img src="/images/line.png" alt="" style={{ width: '94px' }} />
            </div>
            <div className={TokenomicsStyles.TokenomicsItems}>
                {
                  TokenomicsData?.map((el, index) => <TokenomicsItem key={index} image={el.image} title={el.title} desc={el.desc} />)
                }
            </div>
        </div>
    )
}

export default Tokenomics