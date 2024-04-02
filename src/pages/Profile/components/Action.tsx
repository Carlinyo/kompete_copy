import React from 'react'
import Button from '../../../components/Button/index.tsx'
import ActionStyles from '../index.module.scss'

interface IAction {
  title: string;
  desc?: string;
  message: string;
  btnText: string;
}

const Action: React.FC<IAction> = ({title, desc, message, btnText}) => {
  return (
    <div className={ActionStyles.Action}>
      <div className={ActionStyles.Line} />
        <div className={ActionStyles.TitleContainer}>
            <div className='title'>{title}</div>
            <div className={`${ActionStyles.MessageTextTop} message-text`}>{message}</div>
        </div>
        {
          desc && <div style={{ color: '#FFF' }} className={`${ActionStyles.Desc} message-text`}>{desc}</div>
        }
        <Button variant='bold-white-btn'>{btnText}</Button>
        <div className={`${ActionStyles.MessageTextBottom} message-text`}>
          {message}
        </div>
    </div>
  )
}

export default Action
