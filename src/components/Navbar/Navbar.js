import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href="#projects">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#contact">Contact me</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
