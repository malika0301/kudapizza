import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterMemo from './Footer'
import HeaderMemo from './Header'

const Layout = () => {
    return (
        <>
            <HeaderMemo />
            <main>
                <Outlet />
            </main>
            <FooterMemo />
        </>

    )
}

export default Layout