import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/IconHorizontal.png"
import { SignInButton } from "@clerk/clerk-react"
import { SignUpButton } from "@clerk/clerk-react";
import "./navbar.css"
function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/">
                        <img src={logo} className='navbar-logo' />
                    </Link>
                    
                </div>
                <div className='login-button'>
                    <SignInButton />
                </div>
                <div className='signup-button'>
                    <SignUpButton />
                </div>
            </nav>
        </>
    )
}

export default Navbar
