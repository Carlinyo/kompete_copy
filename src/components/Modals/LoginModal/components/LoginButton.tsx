import React from 'react'
import LoginButtonStyles from '../index.module.scss'

interface ILoginButton {
    title: string;
    icon: string;
    action: any;
}

const LoginButton: React.FC<ILoginButton> = ({title, icon, action}) => {
  return (
    <div onClick={() => action('signup')} className={LoginButtonStyles.Button}>
        <img src={icon} alt="" className={LoginButtonStyles.Icon} />
        <div className={LoginButtonStyles.ButtonDetails}>
            <div className='small-description'>{title}</div>
            <img src="/images/arrow-right.png" alt="" />
        </div>
    </div>
  )
}

export default LoginButton
