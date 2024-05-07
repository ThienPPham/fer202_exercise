import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:3001/question');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchQuestions();

        // Cleanup function to cancel any ongoing fetch requests when the component unmounts
        return () => {
            // Cancel ongoing fetch requests (if any)
        };
    }, []);

    const handleOptionChange = (questionId, optionIndex) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionId]: optionIndex,
        }));
    };

    return (
        <div>
            <h1>Quiz App</h1>
            <ul>
                {questions.map(question => (
                    <li key={question.id}>
                        <h3>{question.text}</h3>
                        <ul>
                            {question.options.map((option, index) => (
                                <li key={index}>
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value={index}
                                        checked={selectedOptions[question.id] === index}
                                        onChange={() => handleOptionChange(question.id, index)}
                                    />
                                    {option}
                                </li>
                            ))}
                        </ul>
                        {selectedOptions[question.id] !== undefined && (
                            <p>
                                Correct Answer: {question.options[question.correctAnswerIndex]}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;