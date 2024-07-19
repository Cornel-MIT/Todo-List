import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/toDo');
    };

    return (
        <div className="container">
            <form className="login-form">
                <h4 className='login-title'>Login to your account</h4>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                    />
                </div>
                <button type="button" onClick={handleLogin}>LOG IN</button>
            </form>
        </div>
    );
}
