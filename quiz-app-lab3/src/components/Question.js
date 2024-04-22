import React from 'react';

const Question = ({ question, options, selectedAnswer, onAnswerSelect }) => (
    <div>
        <h3>{question}</h3>
        <ul>
            {options.map((option, index) => (
                <li key={index} className='list-ratio'>
                    <label>
                        <input
                            type="radio"
                            value={index}
                            checked={selectedAnswer === index}
                            onChange={() => onAnswerSelect(index)}
                        />
                        {option}
                    </label>
                </li>
            ))}
        </ul>
    </div>
);

export default Question;
