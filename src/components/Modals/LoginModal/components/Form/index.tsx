import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Input from "../../../../Input/index.tsx";
import Button from "../../../../Button/index.tsx";
import FormStyles from "./index.module.scss";
import { BUTTON_TEXT } from './const.ts'
import { INavbarUserInfo } from "../../../../Navbar/components/UserInfo.js";

interface IForm {
  type: string;
  setModal: any;
  setLogineduserData: Dispatch<SetStateAction<INavbarUserInfo>>;
  setRegisteredUsers: React.Dispatch<React.SetStateAction<INavbarUserInfo[]>>
  registeredUsers: INavbarUserInfo[]
}

const Form: React.FC<IForm> = ({ type, setLogineduserData, setRegisteredUsers, setModal, registeredUsers }) => {
  const [passwordType, setPasswordType] = useState("password");
  const [termsChecked, setTermsChecked] = useState(false)
  const [ageChecked, setAgeChecked] = useState(false)
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    logo: '/images/avatar.png',
    username: 'username',
    volah: '9,999,999',
    kompete: '100,000',
  })

  const buttonAction = () => {
    if (userData.email && userData.password) {
      const user = registeredUsers.find((el) => el.email === userData.email)
      if (type === 'signup' && termsChecked && ageChecked) {
        if (!user) {
          setRegisteredUsers([...registeredUsers, userData])
          setLogineduserData(userData)
          setModal(false)
        }
      } else if (type === 'login' && user?.password === userData.password) {
        setLogineduserData(userData)
        setModal(false)
      }
    }
  }
  
  const buttonText = BUTTON_TEXT[type]

  const hidePassword = () => {
    setPasswordType(passwordType === "text" ? "password" : "text");
  };

  return (
    <div className={FormStyles.FormContainer}>
      <div className={FormStyles.InputContainer}>
        <div className="footer-description" style={{ color: "#525252" }}>
          email address
        </div>
        <Input type="email" variant="black-input" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      </div>
      <div className={FormStyles.InputContainer}>
        <div className={FormStyles.TitleContainer}>
          <div className="footer-description">Password</div>
          {type === 'login' && <div>I forgot my password</div>}
        </div>
        <div className={FormStyles.PasswordInputContainer}>
          <Input type={passwordType} variant="black-input" onChange={(e) => setUserData({ ...userData, password: e.target.value})} />
          <img
            src={
              passwordType === "text" ? "/images/hide.png" : "/images/see.png"
            }
            alt=""
            className={FormStyles.HideIcon}
            onClick={() => hidePassword()}
          />
        </div>
        <div className="footer-description">
          Must have 7+ characters, at least 1 number, at least 1 letter, and no
          whitespace.
        </div>
      </div>
      {
        type === 'signup' &&
      <div className={FormStyles.Terms}>
        <div className={FormStyles.TermsContainer}>
          <div onClick={() => setTermsChecked(!termsChecked)} className={`${termsChecked ? FormStyles.ActiveCheckbox : FormStyles.DisabledCheckbox} ${FormStyles.Checkbox}`}>
            <img src="/images/checkbox.png" alt="" />
          </div>
          <div className="White_Red_Title">
            I have read and agree to the <span>KOMPETE Terms of Service</span>
          </div>
        </div>
        <div className={FormStyles.TermsContainer}>
          <div onClick={() => setAgeChecked(!ageChecked)} className={`${ageChecked ? FormStyles.ActiveCheckbox : FormStyles.DisabledCheckbox} ${FormStyles.Checkbox}`}>
            <img src="/images/checkbox.png" alt="" />
          </div>
          <div className="White_Red_Title">I am over 13 years old</div>
        </div>
      </div>
      }
      <Button variant="red-button" style={{ width: "100%" }} onClick={() => buttonAction()}>
        { buttonText }
      </Button>
    </div>
  );
};

export default Form;
