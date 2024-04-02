import React, { HtmlHTMLAttributes } from 'react'
import ModalStyles from './index.module.scss'

interface IModal extends HtmlHTMLAttributes<HTMLDivElement> {
    modalBg: string;
    modalBorder: string;
    ModalSize: string;
    closeAction: any
}

export const Modal: React.FC<IModal> = ({children, modalBorder, ModalSize, modalBg, closeAction}) => {
  return (
    <div className={ModalStyles.ModalContainer}>
        <div style={{ background: modalBg, border: modalBorder }} className={`${ModalStyles.ModalDetails} ${ModalStyles[ModalSize]}`}>
            <img src="/images/navbar/close.png" alt="" className={ModalStyles.CloseIcon} onClick={() => closeAction()} />
            {children}
        </div>
    </div>
  )
}

export default Modal
