import React from 'react'
import CustomizationItem from '../../../../components/CustomizationItem/index.tsx'
import CustomizationStyles from './index.module.scss'
import { CUSTOMIZATION_DATA, TITLE_TEXTS } from './const.ts'
import { ICustomizationItem } from '../../../../types/interfaces/Customization.ts'

const Customization = () => {
  return (
    <div className={CustomizationStyles.CustomizationContainer}>
      <div className='White_Red_Title medium-title'>
         {TITLE_TEXTS.FIRST}<span>{TITLE_TEXTS.LAST}</span>
      </div>
      <div className={CustomizationStyles.ElementsContaner}>
        {
            CUSTOMIZATION_DATA?.map((el: ICustomizationItem, index: number) => {
                return <CustomizationItem key={index} name={el.NAME} image={el.IMAGE} title={el.TITLE} desc={el.DESC} left={el.LEFT} />
            })
        }
      </div>
    </div>
  )
}

export default Customization
