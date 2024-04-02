import React from "react"
import NavbarStyles from '../index.module.scss'
import LinkElement from "./LinkElement.tsx"
const NavbarLinks = () => {
    return (
        <div className={`${NavbarStyles.links} FlexElementBetween`}>
            <LinkElement path='/' text='Home' />
            <LinkElement path='/download' text="download" />
            <LinkElement path='/locker' text='locker' />
            <LinkElement path='/shop' text='shop' />
            <LinkElement path='/economy' text='economy' />
            <LinkElement path='/token' text='token' />
            <LinkElement path='/news' text='news' />
            <LinkElement path='/team' text='team' />
        </div>
    )
}

export default NavbarLinks
