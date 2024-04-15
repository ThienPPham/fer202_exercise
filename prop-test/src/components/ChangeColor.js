import React, { useState } from 'react';

const ChangeColor = (props) => {
    const [color, changecolor] = useState('white')
    
    const newColor = () =>{
        changecolor(color === 'white' ? 'black' : 'white');
    }
    return (
        <div>
            <button onClick={() => newColor('black')}>Click me</button>
            <h1 style={{ 'backgroundColor': color }}>thien</h1>
        </div>
    );
}

export default ChangeColor;