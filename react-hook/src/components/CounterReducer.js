import React from "react";
import { useReducer } from "react";

const initialState = {
    count: 0,
};

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function CounterReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h1>Counter Reducer</h1>

            <div>
                <h1>Count: {state.count}</h1>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            </div>
        </div>
    );
}

export default CounterReducer;