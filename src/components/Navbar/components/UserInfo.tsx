import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavbarStyles from "../index.module.scss";
import Button from "../../Button/index.tsx";
import LoginModal from "../../Modals/LoginModal/index.tsx";

export interface INavbarUserInfo {
  username?: string;
  kompete?: string;
  volah?: string;
  logo: string;
  email: string;
  password: string
}

interface INavbarData {
  userData: INavbarUserInfo;
  setLogineduserData: Dispatch<SetStateAction<INavbarUserInfo>>;
  setRegisteredUsers: Dispatch<SetStateAction<INavbarUserInfo[]>>;
  registeredUsers: INavbarUserInfo[]
}

const NavbarUserInfo: React.FC<INavbarData> = ({ userData, setLogineduserData, setRegisteredUsers, registeredUsers }) => {
  const [modal, setModal] = useState(false)

  const { email, username, kompete, volah, logo } = userData

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : 'visible'
  }, [modal])

  return (
    <>
    {
      !email ? <Button variant="white-button" style={{ minWidth: '128px', maxWidth: '140px', fontWeight: 800, maxHeight: '32px', fontSize: '12px' }} onClick={() => setModal(true)}>Sign in</Button> : 
      <div className={`${NavbarStyles.UserInfoContainer} FlexElementBetween`}>
        <div className={NavbarStyles.UserInfoContainerDetails}>
          <div className={NavbarStyles.BalanceText}>{username}</div>
          <div className={`${NavbarStyles.UserInfoContainerDetailsItems} FlexElementBetween`}>
            <div className={NavbarStyles.UserInfoContainerDetailsItem}>
              <img src="/images/kompete.png" alt="" />
              <div className={NavbarStyles.BalanceText}>{kompete}</div>
            </div>
            <div className={NavbarStyles.UserInfoContainerDetailsItem}>
              <img src="/images/volah.png" alt="" />
              <div className={NavbarStyles.BalanceText}>{volah}</div>
            </div>
          </div>
        </div>
        <div className="FlexElementBetween">
          <img src={logo} alt="" />
          <img src="/images/arrow-down.png" alt="" />
        </div>
      </div>
    }
    {
     modal && <LoginModal modal={modal} setModal={setModal} setLogineduserData={setLogineduserData} setRegisteredUsers={setRegisteredUsers} registeredUsers={registeredUsers} />
    }
    </>
  );
};

export default NavbarUserInfo;
