import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes

const Layout = () => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <Sidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
