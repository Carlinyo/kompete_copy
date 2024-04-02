import { IAction, IFormData, IProfileData, IProfileTexts, IWalletData } from "../../types/interfaces/Profile.ts"

export const PROFILE_DATA: IProfileData = {
    NAME: 'JUSTIN12345',
    IMAGE: '/images/avatar-big.png'
}

export const WALLET_DATA: IWalletData = {
    ADDRESS: '0X3334...2939',
    CONNECTED: false
}

const CHANGE_PASSOWD_BTN_TEXT: string = WALLET_DATA.ADDRESS && WALLET_DATA.CONNECTED ? 'UPDATE' : 'REQUEST PASSWORD'

export const ACTIONS: IAction[] = [
    {
        title: 'Change Password',
        desc: '',
        message: 'Password requested!',
        btnText: CHANGE_PASSOWD_BTN_TEXT
    },
    {
        title: 'Update Wallet',
        desc: '',
        message: 'Wallet updated successfully!',
        btnText: 'UPDATE'
    },
    {
        title: 'TWO-FACTOR AUTHENTICATION',
        desc: 'Two-factor authentication (2FA) can be used to help protect your account from unauthorized access. You’ll be required to enter a security code each time you sign in. Use an Authenticator App as your two-factor authentication (2FA). Check out our how-to video or help article.',
        message: '2FA set up successfully!',
        btnText: 'SET UP'
    }
]


const FORM_WALLET_PLACEHOLDER: string = WALLET_DATA.ADDRESS && WALLET_DATA.CONNECTED ? WALLET_DATA.ADDRESS : 'None'

export const FORM_DATA: IFormData[] = [
    {
        LABEL: 'username',
        TYPE: 'text',
        PLACEHOLDER: '@justin12345'
    },
    {
        LABEL: 'email address',
        TYPE: 'email',
        PLACEHOLDER: 'justin@kompete.com'
    },
    {
        LABEL: 'LINKED Wallet',
        TYPE: 'text',
        PLACEHOLDER: FORM_WALLET_PLACEHOLDER
    }
]

export const PROFILE_TEXTS: IProfileTexts = {
    TITLE: 'Profile Settings'
}