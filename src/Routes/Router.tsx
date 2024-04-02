import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Navbar/index.tsx'
import Home from '../pages/Home/index.tsx'
import Token from '../pages/Token/index.tsx'
import Profile from '../pages/Profile/index.tsx'
import Economy from '../pages/Economy/index.tsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/token' element={<Token />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/economy' element={<Economy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
