import React from 'react'
import { COSMETICS_ITEMS } from '../const.ts'
import CosmeticsItem from './CosmeticsItem.tsx'
import CosmeticsItemsStyles from '../index.module.scss'

const CosmeticsItems = () => {
  return (
    <div className={CosmeticsItemsStyles.ItemsContainer}>
        {
            COSMETICS_ITEMS.map((el, index) => {
                return <CosmeticsItem key={index} image={el.IMAGE} title={el.TITLE} description={el.DESC} index={index} />
            })
        }
    </div>
  )
}

export default CosmeticsItems
