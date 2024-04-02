import React from "react"
import { Link } from "react-router-dom"
import NavbarStyles from '../index.module.scss'
import { useLocation } from 'react-router-dom'

interface ILinkElement {
    path: string;
    text: string
}

const LinkElement: React.FC<ILinkElement> = ({path, text}) => {
    const location = useLocation()
    return (
        <div className={NavbarStyles.LineContainer}>
            <Link to={path}>{text}</Link>
            {
                location.pathname === path &&
                <img src="/images/line.png" className={NavbarStyles.line} alt="" />
            }
        </div>
    )
}

export default LinkElement