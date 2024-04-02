import React from "react"
import TokenDeployedStyles from '../index.module.scss'

interface ITokenDeployedElement {
    title: string,
    token: string,
    image: string
}

const TokenDeployedElement: React.FC<ITokenDeployedElement> = ({title, token, image}) => {
    return (
        <div className={`${TokenDeployedStyles.ElementContainer} FlexElementBetween`}>
            <div className={TokenDeployedStyles.InfoContainer}>
                <div className="small-title">{title}</div>
                <div className="small-description">{token}</div>
            </div>
            <img className={TokenDeployedStyles.image} src={image} alt="" />
        </div>
    )
}

export default TokenDeployedElement