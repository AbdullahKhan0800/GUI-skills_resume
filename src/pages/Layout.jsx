import React from 'react'
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <div className="header">
                <h1 className="main">muhammad abdullah anwar</h1>
                <div className="linksvg">
                    <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="70px" width="45px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 0m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M4 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M4 21m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M6 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-3"></path>
                        <path d="M6 0h6a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2"></path>
                    </svg>
                </div>
                <h6>Shopify Expert</h6>
            </div>
            <br />
            <br />
            <Outlet />
            <hr style={{ marginBottom: '20px' }} />
        </div>
    )
}

export default Layout
