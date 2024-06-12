"use client";
import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            toast.success(`Success login: ${user.email} `, {
                position: "bottom-center",
            });
            onLoginSuccess(); // Notify the parent component of successful login
        } catch (error) {
            console.error(error);
            toast.error(`Error: ${error.message}`, {
                position: "bottom-center" // Set position to bottom-center
            });
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login Page</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Your Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <ToastContainer position="bottom-center" /> {/* Set default position to bottom-center */}
            </div>
        </div>
    );
};

export default Login;
