import React from "react";
import { useState } from "react";

function ChangeColor() {
    const [theme, setColor] = useState('');

    const handleTheme = (e) => {
        setColor(e.targer.value);
    }

    return (
        <div>
            <select onClick={theme} onChange={handleTheme}>
                <option>select color</option>
                <option value='red'>Red</option>
                <option value='blue'>blue</option>
                <option value='green'>green</option>
                <option value='yellow'>yellow</option>
            </select>

            <div style={{
                width: '200px',
                height: '200px',
                backgroundColor: theme
            }}>
            </div>
        </div>
    );
}

export default ChangeColor;