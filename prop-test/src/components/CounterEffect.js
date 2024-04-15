import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function CounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Current count is: ${count}`);

        return () => {
            console.log(`Cleaning up after count: ${count}`);
        };
    }, [count]);

    return (
        <div>
            <h1>Counter Effect</h1>
            
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default CounterEffect;