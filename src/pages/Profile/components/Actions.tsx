import React from 'react'
import Action from './Action.tsx'
import { ACTIONS } from '../const.ts'
import ActionsStyles from '../index.module.scss'

const Actions = () => {
  return (
    <div className={ActionsStyles.Actions}>
        {
            ACTIONS?.map((el, index) => {
                return <Action key={index} title={el.title} desc={el.desc} message={el.message} btnText={el.btnText} />
            })
        }
    </div>
  )
}

export default Actions
