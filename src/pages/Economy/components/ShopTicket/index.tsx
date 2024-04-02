import React from 'react'
import ShopTicketItem from './components/ShopTicketItem.tsx'
import { SHOP_TICKETS_DATA } from './const.ts'
import ShopTicketStyles from './index.module.scss'
import { TITLE_TEXT } from './const.ts'

const ShopTicket = () => {
  return (
    <div className={ShopTicketStyles.ShopTicketContainer}>
        <div className='White_Red_Title medium-title'>{TITLE_TEXT.FIRST} <br /><span>{TITLE_TEXT.LAST}</span></div>
        <img src="/images/line.png" alt="" />
        <div className={ShopTicketStyles.ElementsContainer}>
          {
            SHOP_TICKETS_DATA.map((el, index) => {
              return <ShopTicketItem key={index} image={el.IMAGE} title={el.TITLE} desc={el.DESC} btnText={el.BTN_TEXT} />
            })
          }
        </div>
    </div>
  )
}

export default ShopTicket
