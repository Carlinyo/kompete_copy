import React from 'react'
import { PROFILE_DATA, PROFILE_TEXTS } from './const.ts'
import Form from './components/Form.tsx'
import Actions from './components/Actions.tsx'
import ProfileStyles from './index.module.scss'

const Profile = () => {
  return (
    <div className={ProfileStyles.ProfileContainer}>
        <div className={ProfileStyles.Profile}>
            <div className='medium-title' style={{ color: '#F8F3E9' }}>{PROFILE_TEXTS.TITLE}</div>
            <div className={ProfileStyles.UserContainer}>
                <img className={ProfileStyles.Image} src={PROFILE_DATA.IMAGE} alt="" />
                <div className={`${ProfileStyles.SmallTitle} small-title`}>{PROFILE_DATA.NAME}</div>
            </div>
            <Form />
            <Actions />
        </div>
    </div>
  )
}

export default Profile
