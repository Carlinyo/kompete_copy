import React from 'react'
import CosmeticsItemStyles from '../index.module.scss'

interface ICosmeticsItem {
    title: string;
    index: number;
    description: string;
    image: string;
}

const CosmeticsItem: React.FC<ICosmeticsItem> = ({ title, index, description, image }) => {
  return (
    <div className={`${CosmeticsItemStyles.Item} ${index % 2 === 0 ? CosmeticsItemStyles.Transparent : CosmeticsItemStyles.Red}`}>
        <div className={CosmeticsItemStyles.Details}>
            <div className='header-title'>{title}</div>
            <div className='default-text'>{description}</div>
        </div>
          <img src={image} alt="" className={`${CosmeticsItemStyles.Image} ${CosmeticsItemStyles[`Image${index + 1}`]}`} />
    </div>
  )
}

export default CosmeticsItem