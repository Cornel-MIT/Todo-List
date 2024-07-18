import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate checking if email already exists (replace with your actual check)
        const isEmailExists = checkEmailExists(email);
        if (isEmailExists) {
            toast.error("Sorry, Buddy! You can't use that account.");
            return;
        }

        // Save user email to local storage or send to server (for real application)
        localStorage.setItem('userEmail', email);
        setIsLoggedIn(true);
        // Navigate to a different route (e.g., home page) after successful registration
        navigate('/'); // Replace with your desired route
    };

    // Simulated function to check if email exists (replace with your actual logic)
    const checkEmailExists = (email) => {
        // Example: Check if email already exists in local storage
        const existingEmail = localStorage.getItem('userEmail');
        return existingEmail === email;
    };

    return (
        <div className="container" style={{ marginTop: '10vh' }}>
            <form onSubmit={handleRegister}>
                <h2>Create an account</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address:
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    SIGN UP
                </button>
                <p style={{ marginTop: '2vh' }}>
                    Have an account? <Link to={'/login'}>Login</Link>
                </p>
            </form>
            <ToastContainer /> {/* Ensure ReactToastify.css is imported correctly */}
        </div>
    );
};

export default Register;
