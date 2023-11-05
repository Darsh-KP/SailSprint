import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/IconHorizontal.png"
import { SignInButton } from "@clerk/clerk-react"
import { SignUpButton } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import usericon from "../assets/userprofile.png"
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
                <div className='profile-dropdown'>
                    <img src={usericon} className='user-dropdown' />
                </div>
                
                <div className='login'>
                    <SignInButton className="login-button"/>
                </div>
                <div className='signup'>
                    <SignUpButton className="signup-button"/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
