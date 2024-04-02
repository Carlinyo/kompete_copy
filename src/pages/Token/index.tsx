import React from "react"
import Info from "../../components/Info/index.tsx"
import HowToBuy from "../../components/HowToBuy/index.tsx"
import Chart from "../../components/Chart/index.tsx"
import Utility from "../../components/Utility/index.tsx"
import Tokenomics from "../../components/Tokenomics/index.tsx"
import Disclosure from "../../components/Disclosure/index.tsx"
import TokenDeployed from '../../components/TokenDeployed/index.tsx'

const Token = () => {
    return (
        <>
            <Info />
            <TokenDeployed />
            <HowToBuy />
            <Chart />
            <Utility />
            <Tokenomics />
            <Disclosure />
        </>
    )
}

export default Token