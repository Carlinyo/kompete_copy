import React from 'react'
import Button from '../../../../../components/Button/index.tsx'
import ShopTicketItemStyles from '../index.module.scss';

interface IShopTicketItem {
    image: string;
    title: string;
    desc: string;
    btnText: string;
}

const ShopTicketItem: React.FC<IShopTicketItem> = ({image, title, desc, btnText}) => {
  return (
    <div className={ShopTicketItemStyles.ElementContainer}>
        <img src={image} alt="" />
        <div className='header-title'>{title}</div>
        <div className='default-text'>{desc}</div>
        <Button variant="red-button" style={{ width: '240px' }}>{btnText}</Button>
    </div>
  )
}

export default ShopTicketItem
