import React from "react";

function LogOut() {
    const handleLogout = () => {
        // Remove token from localStorage
        localStorage.removeItem("token");

        // Redirect to the root domain or login page
        window.location.href = "/";
    };

    return (
        <div onClick={handleLogout} style={{ cursor: "pointer", width: "100%" }}>
            LogOut
        </div>
    );
}

export default LogOut;
