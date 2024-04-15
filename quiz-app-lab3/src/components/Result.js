import React from 'react';

const Result = ({ score }) => (
    <div>
        <h2>Quiz Completed!</h2>
        <p>Your score: {score}</p>
        {/* Add options such as replaying or sharing the result */}
    </div>
);

export default Result;
