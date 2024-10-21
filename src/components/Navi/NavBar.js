import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Navi/NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/Login');
    };

    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/ToDo">Home</Link></li>
                <li><a href="#" onClick={handleLogout}>Logout</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;