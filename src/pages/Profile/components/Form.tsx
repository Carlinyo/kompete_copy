import React from 'react'
import Input from '../../../components/Input/index.tsx'
import { FORM_DATA } from '../const.ts'
import FormStyles from '../index.module.scss'

const Form = () => {
  return (
    <div className={FormStyles.Form}>
      {
        FORM_DATA?.map((el, index) => {
          return (<div key={index}>
            <label className='footer-description' style={{ color: '#777' }}>{el.LABEL}</label>
            <Input type={el.TYPE} placeholder={el.PLACEHOLDER} variant='black-input' />
          </div>)
        })
      }
    </div>
  )
}

export default Form
