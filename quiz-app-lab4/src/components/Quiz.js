import React, { useState, useEffect } from 'react';

// Define the quiz data
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
    // State to manage user input
    const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill('')); // Initialize with empty strings

    // Function to handle user input for each question
    const handleUserInput = (index, event) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[index] = event.target.value;
        setUserAnswers(updatedAnswers);
    };

    // Function to check if the selected answer is correct
    const checkAnswer = (index) => {
        return userAnswers[index] === quizData[index].correctAnswer;
    };

    // Calculate score
    const calculateScore = () => {
        let score = 0;
        for (let i = 0; i < quizData.length; i++) {
            if (checkAnswer(i)) {
                score++;
            }
        }
        return score;
    };

    // Render the questions and answer options
    useEffect(() => {
        console.log(userAnswers); // Just for demonstration, you can replace this with rendering logic
    }, [userAnswers]);

    return (
        <div>
            {quizData.map((questionData, index) => (
                <div key={index}>
                    <h3>{questionData.question}</h3>
                    <ul>
                        {questionData.answers.map((answer, answerIndex) => (
                            <li key={answerIndex}>
                                <input
                                    type="radio"
                                    name={`question${index}`}
                                    value={answer}
                                    onChange={(event) => handleUserInput(index, event)}
                                />
                                {answer}
                            </li>
                        ))}
                    </ul>
                    <p>{userAnswers[index] && checkAnswer(index) ? 'Correct!' : 'Incorrect!'}</p>
                </div>
            ))}
            <h4>Score: {calculateScore()} / {quizData.length}</h4>
        </div>
    );
};

export default Quiz;