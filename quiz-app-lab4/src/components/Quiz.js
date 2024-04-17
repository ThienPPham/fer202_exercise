import React, { useState, useEffect, useContext } from 'react';

export const quizData = [
    {
        question: 'What is ReactJS?',
        answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
        correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
        question: 'What is JSX?',
        answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
        correctAnswer: 'A syntax extension for JavaScript'
    }
];

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));

    return (
        <div>
            {quizData.map((questionData, index) => (
                <div key={index}>
                    <h3>{questionData.question}</h3>
                    <ul>
                        {questionData.answers.map((answer, answerIndex) => (
                            <li key={answerIndex}>
                                <label>
                                    <input
                                        type="radio"
                                        checked={userAnswers[index] === answer}
                                        onChange={() => {
                                            const updatedUserAnswers = [...userAnswers];
                                            updatedUserAnswers[index] = answer;
                                            setUserAnswers(updatedUserAnswers);
                                        }}
                                    />
                                    {answer}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div>
                {quizData.map((questionData, index) => (
                    <p key={index}>
                        Your answer for question {index + 1} is {userAnswers[index] === questionData.correctAnswer ? 'correct' : 'incorrect'}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
