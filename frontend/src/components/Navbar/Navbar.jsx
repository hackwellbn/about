import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <div className='navbar'>
                <div className="logo">
                    <img src={assets.logo} alt="" />
                </div>

                <div className={`navLinks ${menuOpen ? 'active' : ''}`}>
                    <ul className="links">
                        <li className="link">
                            <Link onClick={closeMenu}>About</Link>
                        </li>
                        <li className="link">
                            <Link onClick={closeMenu}>Services</Link>
                        </li>
                        <li className="link">
                            <Link onClick={closeMenu}>Support</Link>
                        </li>
                    </ul>
                </div>

                <div className="auth">
                    <button className="loginBtn">Login</button>
                    <button className="signupBtn">Sign Up</button>
                </div>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Navbar