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

        const isEmailExists = checkEmailExists(email);
        if (isEmailExists) {
            toast.error("Sorry, Buddy! You can't use that account.");
            return;
        }


        localStorage.setItem('userEmail', email);
        setIsLoggedIn(true);

        navigate('/'); 
    };


    const checkEmailExists = (email) => {

        const existingEmail = localStorage.getItem('userEmail');
        return existingEmail === email;
    };

    return (
        <div className="container" style={{ marginTop: '10vh' }}>
            <form className='form-register' onSubmit={handleRegister}>
                <h3 className='register-title'>Create an account</h3>
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
                <button 
                type="submit" 
                className="btn btn-primary"
                style={{ marginLeft: '1vh'}}>
                    SIGN UP
                </button>
                <p className='login-statement' style={{ marginTop: '2vh'}}>
                    Have an account? <Link to={'/login'}>Login</Link>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
