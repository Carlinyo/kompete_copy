import React from 'react'
import InfoStyles from './index.module.scss'
import { INFO_TEXTS } from './const.ts'

const Info = () => {
    return (
        <>
            <div className={InfoStyles.InfoContainer}>
                <img className={InfoStyles.Bg} alt='' src="/images/info/bg.svg" />
                <div className={InfoStyles.InfoContainerDetailsParent}>
                    <div className={InfoStyles.Details}>
                        <div className={`${InfoStyles.Title} big-title`}>{INFO_TEXTS.KOMPETE_TOKEN}</div>
                        <img src="/images/line.png" alt='' />
                        <div className={`${InfoStyles.description} default-text`}>{INFO_TEXTS.DESC}</div>
                    </div>
                    <img className={InfoStyles.Token} alt='' src="/images/info/token.png" />
                </div>
            </div>
        </>
    )
}

export default Info