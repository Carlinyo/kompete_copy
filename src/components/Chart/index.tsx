import React from "react"
import ChartStyles from './index.module.scss'
import { CHART_TITILE } from './const.ts'

const Chart = () => {
    return (
        <div className={ChartStyles.ChartContainer}>
            <div className='White_Red_Title medium-title'>{CHART_TITILE.FIRST} <span>{CHART_TITILE.LAST}</span></div>
            <img src="/images/chart/chart.png" alt="" />
        </div>
    )
}

export default Chart