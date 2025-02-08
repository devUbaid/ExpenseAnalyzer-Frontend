import React, { useState } from "react";
import axios from "axios";
import "./LoginRegister.css";

function Register({ switchPage }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {
        // Validate required fields
        if (!firstName || !lastName || !email || !password) {
            setError("All fields are required.");
            return;
        }

        try {
            await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}/users/register`, 
                { firstName, lastName, email, password }
            );

            alert("Registration successful! Please log in.");
            switchPage(); // Switch to Login page after successful registration
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Try again.");
        }
    };

    return (
        <div className="form">
            <h1>Create Account</h1>
            <input 
                type="text" 
                placeholder="First Name" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Last Name" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
            />
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
            <button className="btn-primary" onClick={handleRegister}>Sign Up</button>
            <p>Already have an account? <span onClick={switchPage} className="link">Log In</span></p>
        </div>
    );
}

export default Register;
