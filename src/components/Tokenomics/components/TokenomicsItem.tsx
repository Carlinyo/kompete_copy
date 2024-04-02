import React from "react"
import TokenomicsStyles from '../index.module.scss'

export interface ITokenomicsItem {
    image: string;
    title: string;
    desc: string;
}

const TokenomicsItem: React.FC<ITokenomicsItem> = ({image, title, desc}) => {
    return (
        <div className={TokenomicsStyles.TokenomicsItem}>
            <img src={image} alt="" />
            <div className={`${TokenomicsStyles.TokenomicsItemTitle} header-title`}>{title}</div>
            <div className={`${TokenomicsStyles.TokenomicsItemDesc} default-text`}>{desc}</div>
        </div>
    )
}

export default TokenomicsItem