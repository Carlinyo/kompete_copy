import React from 'react'
import { LOGIN_ICONS } from '../const.ts'
import LoginButton from './LoginButton.tsx'
import LoginWithStyles from '../index.module.scss'

const LoginWith = ({ loginAction }) => {
  return (
    <div className={LoginWithStyles.ButtonsContainer}>
      {
        LOGIN_ICONS.map((el, index) => {
          return <LoginButton key={index} title={el.TITLE} icon={el.ICON} action={loginAction} />
        })
      }
    </div>
  )
}

export default LoginWith
