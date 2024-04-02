import React from "react"
import Info from "./components/Info.tsx"
import Customization from "./components/Customization/Customization.tsx"
import Cosmetics from "./components/Cosmetics/index.tsx"
import ShopTicket from "./components/ShopTicket/index.tsx"
import BuySell from "./components/BuySell/index.tsx"
import EconomyPageStyles from './index.module.scss'

const Economy = () => {
    return <div className={EconomyPageStyles.Container}>
       <Info />
       <Customization />
       <Cosmetics />
       <ShopTicket />
       <BuySell />
    </div>
}

export default Economy