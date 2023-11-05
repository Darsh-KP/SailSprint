import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/IconHorizontal.png"
import { SignInButton } from "@clerk/clerk-react"
import { SignUpButton } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { SignedIn } from '@clerk/clerk-react';
import { SignedOut } from '@clerk/clerk-react';
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
                <SignedOut>
                <div className='login'>
                    <SignInButton className="login-button">
                    <button>Sign In</button>
                    </SignInButton>
                </div>
                <div className='signup'>
                    <SignUpButton className="signup-button">
                        <button>Sign Up</button>
                    </SignUpButton>
                </div>
                </SignedOut>
                <SignedIn>
                <div className='signout'>
                    <SignOutButton className="signout-button"/>
                </div>
                </SignedIn>
            </nav>
        </>
    )
}

export default Navbar
