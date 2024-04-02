import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Links from './components/Links.tsx'
import NavbarUserInfo from "./components/UserInfo.tsx"
import NavbarStyles from './index.module.scss'
import Footer from "../Footer/index.tsx"

const Layout = () => {
    const [loginedUserData, setLogineduserData] = useState({
        username: '',
        logo: '',
        volah: '9,999,999',
        kompete: '100,000',
        email: '',
        password: ''
    })
    const [registeredUsers, setRegisteredUsers] = useState([])

    return (
        <div className={NavbarStyles.Container}>
            <div className={`${NavbarStyles.NavbarContainer} FlexElementBetween`}>
                <img src="/images/logo.png" alt="" />
                <Links />
                <NavbarUserInfo userData={loginedUserData} setLogineduserData={setLogineduserData} setRegisteredUsers={setRegisteredUsers} registeredUsers={registeredUsers} />
                <div className={NavbarStyles.MobileMenu}>
                  <img src="/images/menu_icon.png" alt="" className={NavbarStyles.MenuIcon} />
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout