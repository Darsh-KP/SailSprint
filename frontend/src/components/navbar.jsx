import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/IconHorizontal.png"

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
            </nav>
        </>
    )
}

export default Navbar