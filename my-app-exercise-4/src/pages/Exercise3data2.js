import React from 'react';

function combineArguments(...args) {
    const resultArray = [];

    args.forEach(arg => {
        if (Array.isArray(arg)) {
            resultArray.push(...arg);
        } else {
            resultArray.push(arg);
        }
    });

    return resultArray;
}

function DisplayResult() {
    const result = combineArguments(1, 2, [3, 4], 5, [6, 7]);

    return (
        <div>
            <h2>Result:</h2>
            <p>{JSON.stringify(result)}</p>
        </div>
    );
}

export default DisplayResult;
