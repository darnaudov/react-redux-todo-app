import React from 'react';
import logo from '../../resources/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>{"Welcome to Reacccct"}</h2>
        </div>
    );
};

export default Header;
