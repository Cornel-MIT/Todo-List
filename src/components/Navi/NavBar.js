import React from 'react';
import { Link } from 'react-router-dom';
import '../Navi/NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/ToDo">Home</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;