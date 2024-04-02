import React from "react"
import CustomizationItemStyles from './index.module.scss'

interface ICustomizationItem {
    image: string;
    title: string;
    desc: string;
    left: boolean;
    name: string;
}

const CustomizationItem: React.FC<ICustomizationItem> = ({ image, title, desc, left, name }) => {
    return (
    <div className={`${left ? CustomizationItemStyles.Left : CustomizationItemStyles.Right} ${CustomizationItemStyles.Container} ${CustomizationItemStyles[`${name}-item`]}`}>
        <div className={CustomizationItemStyles.TitleContainer}>
            <div className="header-title">{title}</div>
            <div className="default-text">{desc}</div>
        </div>
        <img src={image} alt="" className={CustomizationItemStyles.Image} />
    </div>
    )
}

export default CustomizationItem