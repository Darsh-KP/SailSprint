import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Icon.png"

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo'>
                        Hello
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar