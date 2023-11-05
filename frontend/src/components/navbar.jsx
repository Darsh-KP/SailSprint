import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/IconHorizontal.png"
import { SignInButton } from "@clerk/clerk-react"

import "./navbar.css"
function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/">
                        <img src={logo} className='navbar-logo' />
                    </Link>
                    <Link to="/">
                        Clerk App
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar