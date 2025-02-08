import React, { useState } from "react";
import axios from "axios";
import "./LoginRegister.css";

function Login({ setIsLoggedIn, switchPage }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}/auth/login`, 
                { email, password }
            );

            // Store token in localStorage
            localStorage.setItem("token", data.data);
            setIsLoggedIn(true);
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="form">
            <h1>Welcome Back!</h1>
            <h5>demoAccount@gmail.com | @Demo123</h5>
            <p>Please enter your details</p>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            {error && <p className="error">{error}</p>}
            <button className="btn-primary" onClick={handleLogin}>Login</button>
            <p>Don’t have an account? <span onClick={switchPage} className="link">Sign Up</span></p>
        </div>
    );
}

export default Login;
