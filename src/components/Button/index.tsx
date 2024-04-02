import React, { ButtonHTMLAttributes } from "react"
import ButtonStyles from './index.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: string
}

const Button: React.FC<IButton> = ({variant, children, ...args}) => {
    return (
        <button {...args} className={`${ButtonStyles[variant]} ${ButtonStyles.CustomButton}`}>
            {children}
        </button>
    )
}

export default Button