import React from "react";
import { useState } from "react";

function Show(){
    const [visible, setVisible] = useState('false')

    const handleVisible = () =>{
        setVisible(!visible);
    }

    return(
        <div>
            {visible ?(
                <div>
                    <p>toggle me!</p>
                    <button onClick={handleVisible}>Hide</button>
                </div> 
            ): (
                <button onClick={handleVisible}>show</button>
            )}
        </div>
    );
}

export default Show;