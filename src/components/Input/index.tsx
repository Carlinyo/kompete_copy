import React, { InputHTMLAttributes } from 'react'
import InputStyles from './index.module.scss'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    variant: string
}

const Input: React.FC<IInput> = ({variant, ...args}) => {
  return (
    <input {...args} className={InputStyles[variant]} />
  )
}

export default Input
