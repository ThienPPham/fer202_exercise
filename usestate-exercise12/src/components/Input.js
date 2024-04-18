import React from "react";
import { useState } from "react";

function Input() {
    const [input, setInput] = useState('');
    const handlerInput = (e) => {
        setInput(e.target.value);
    }
    return (
        <div>
            <input type="text" value={input} onChange={handlerInput}/>
            <h1>input text:  {input}</h1>
        </div>
    );
}

export default Input;