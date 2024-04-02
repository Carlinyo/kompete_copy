import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import Modal from "../../Modal/index.tsx"
import LoginWith from "./components/LoginWith.tsx"
import Button from "../../Button/index.tsx"
import LoginModalStyles from './index.module.scss'
import Form from "./components/Form/index.tsx"
import { BUTTON_TEXT } from "./const.ts"
import { INavbarUserInfo } from "../../Navbar/components/UserInfo.tsx"

interface ILoginModal {
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
    setLogineduserData: Dispatch<SetStateAction<INavbarUserInfo>>;
    setRegisteredUsers: Dispatch<SetStateAction<INavbarUserInfo[]>>
    registeredUsers: INavbarUserInfo[]
}

const LoginModal: React.FC<ILoginModal> = ({ modal, setModal, setLogineduserData, setRegisteredUsers, registeredUsers }) => {
    const [modalType, setModalType] = useState('create')

    const ButtonText = BUTTON_TEXT[modalType]
    const DescriptionText = BUTTON_TEXT[modalType]

    const ModalButtonAction = () => {
        if (['create', 'signup'].includes(modalType)) {
            setModalType('login')
        } else if (modalType === 'login') {
            setModalType('signup')
        }
    }

    useEffect(() => {
        return () => {
            setModalType('create')
        }
    }, [])

    return (
        <>
        {
            modal &&
            <Modal ModalSize={"sm"} closeAction={setModal} modalBg="#000" modalBorder="1px solid #141414">
                <div className="header-title">CREATE YOUR KOMPETE ACCOUNT</div>
                {
                    modalType?.includes('create') && <LoginWith loginAction={setModalType} />
                }
                {
                    ['signup', 'login']?.includes(modalType) && <Form type={modalType} setModal={setModal} setLogineduserData={setLogineduserData} setRegisteredUsers={setRegisteredUsers} registeredUsers={registeredUsers} />
                }
                <div className={LoginModalStyles.ButtonContainer}>
                    <div className="footer-description">{DescriptionText}</div>
                    <Button variant="red-button-border" style={{ width: '100%' }} onClick={() => ModalButtonAction()}>{ButtonText}</Button>
                </div>
                <div className={LoginModalStyles.PoweredByContainer}>
                    <div className="link-text">Privacy Policy</div>
                    <img src="/images/PoweredBy.png" alt="" />
                </div>
            </Modal>
        }
        </>
    )
}

export default LoginModal
