import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialValue }) => {
    const [timeRemaining, setTimeRemaining] = useState(initialValue);

    useEffect(() => {
        if (timeRemaining <= 0) return;

        const timerId = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeRemaining]);

    return (
        <div>
            {timeRemaining > 0 ? `Time Remaining: ${timeRemaining}` : 'Timer stopped'}
        </div>
    );
};

export default CountdownTimer;