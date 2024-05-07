import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Question } from './QuestionData';

const ReviewPage = () => {
  // Redux hook
  const answers = useSelector(state => state.quiz.answers);

  return (
    <div>
      <h1>Review Answers</h1>
      {Question.map((question, index) => (
        <div key={index}>
          <h3>{question.text}</h3>
          <p>Options:</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex} style={{listStyleType: 'none', backgroundColor: '#cfe2ff'}}>{option}</li>
            ))}
          </ul>
          <p>
            Selected Answer: 
            <span style={{ color: answers[index] === question.correctAnswer ? 'green' : 'red' }}>
              {answers[index]}
            </span>
          </p>
          <p>
            Correct Answer: 
            <span style={{ color: 'green' }}>{question.correctAnswer}</span>
          </p>
        </div>
      ))}
      <Link to="/quizzes">Back to Questions</Link> {/* Use Link to navigate back to questions page */}
    </div>
  );
};

export default ReviewPage;