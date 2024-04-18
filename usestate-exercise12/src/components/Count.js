import React from 'react'
import { useState } from 'react'

function Count(){
    const [count, setCount] = useState(0);

   
    const increament = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increament}>    
                click
            </button>
        </div>
    );
}

export default Count;