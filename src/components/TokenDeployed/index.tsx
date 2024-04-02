import React from "react"
import { TokenDeployedData, TOKEN_DEPLOYED } from './const.ts'
import TokenDeployedElement from "./components/TokenDeployedElement.tsx"
import TokenDeployedStyles from './index.module.scss'

const TokenDeployed = () => {
    return (
        <div className={TokenDeployedStyles.Container}>
            <div className={`${TokenDeployedStyles.Title} header-title`}>{TOKEN_DEPLOYED}</div>
            <div className={TokenDeployedStyles.ElementsContainer}>
            {
                TokenDeployedData.map((el, index) => {
                   return <TokenDeployedElement key={index} title={el.title} token={el.token} image={el.image} />
                })    
            }
            </div>
        </div>
    )
}

export default TokenDeployed