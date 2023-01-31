import React from 'react';
import logo from '../../images/logo.webp'
import './Header.css'
const Header = () => {
    return (
        <div>
           <div className='header'>
            <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;