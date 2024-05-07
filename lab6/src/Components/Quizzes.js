import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAnswer, resetQuiz } from './quizSlice'; // Import resetQuiz action
import { Question } from './QuestionData';
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const QuestionsPage = () => {
    // Redux hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const answers = useSelector(state => state.quiz.answers);

    // Component state
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Add event handlers
    const handleSelectAnswer = (questionId, answerId) => {
        dispatch(selectAnswer({ questionId, answerId }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < Question.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        navigate('/review'); // Navigate to review page after submission
    };

    const handleReviewQuiz = () => {
        navigate('/review'); // Navigate to review page
    };

    const handleResetQuiz = () => {
        dispatch(resetQuiz()); // Reset answers state in Redux store
        setCurrentQuestionIndex(0); // Reset current question index to start the quiz again
    };

    // Get the current question
    const currentQuestion = Question[currentQuestionIndex];

    return (
        <div>
            <h1>Quiz</h1>
            <div className='questionList'>
                <h3>{currentQuestion.text}</h3>
                <ul className="list-unstyled">
                    <Row>
                        {currentQuestion.options.map((option, optionIndex) => (
                            <Col key={optionIndex} md='6'>
                                <li className="d-flex justify-content-center align-items-center">
                                    <label className="mb-0">
                                        <input
                                            type="radio"
                                            name={`question${currentQuestionIndex}`}
                                            value={option}
                                            checked={answers[currentQuestionIndex] === option}
                                            onChange={() => handleSelectAnswer(currentQuestionIndex, option)}
                                            className="mr-2"
                                        />
                                        {option}
                                    </label>
                                </li>
                            </Col>
                        ))}
                    </Row>
                </ul>
            </div>
            <Button className='questionButton' onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
            <Button className='questionButton' onClick={handleNextQuestion} disabled={currentQuestionIndex === Question.length - 1}>Next</Button>
            <Button className='questionButton' onClick={handleSubmit}>Submit</Button>
            <Button className='questionButton' onClick={handleReviewQuiz}>Review Quiz</Button> {/* Button to review the entire quiz */}
            <Button className='questionButton' onClick={handleResetQuiz}>Reset Answers</Button> {/* Button to reset answers */}
        </div >
    );
};

export default QuestionsPage;