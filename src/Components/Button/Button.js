import React from 'react';
import './Button.css'; // Import the CSS file

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    return (
        <button
            className="button"
            style={{
                background: bg,
                padding: bPad,
                borderRadius: bRad,
                color: color,
            }}
            onClick={onClick}
        >
            {icon}
            {name}
        </button>
    );
}

export default Button;
