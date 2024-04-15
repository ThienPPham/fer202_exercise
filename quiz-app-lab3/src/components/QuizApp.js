import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';

class QuizApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionIndex: 0,
            selectedAnswer: null,
            score: 0,
            questions: [
                {
                    question: "What is the capital of France?",
                    options: ["Paris", "London", "Berlin", "Rome"],
                    correctAnswerIndex: 0
                },
                {
                    question: "What is 2 + 2?",
                    options: ["3", "4", "5", "6"],
                    correctAnswerIndex: 1
                },
                // Add more questions here
            ]
        };
    }

    handleAnswerSelect = (selectedAnswerIndex) => {
        this.setState({ selectedAnswer: selectedAnswerIndex });
    };

    checkAnswerAndMoveNext = () => {
        const { currentQuestionIndex, selectedAnswer, score, questions } = this.state;
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswerIndex) {
            this.setState({ score: score + 1 });
        }
        this.setState({
            selectedAnswer: null,
            currentQuestionIndex: currentQuestionIndex + 1
        });
    };

    render() {
        const { currentQuestionIndex, selectedAnswer, score, questions } = this.state;
        const currentQuestion = questions[currentQuestionIndex];

        if (!currentQuestion) {
            return <Result score={score} />;
        }

        return (
            <div>
                <Question
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    selectedAnswer={selectedAnswer}
                    onAnswerSelect={this.handleAnswerSelect}
                />
                {currentQuestionIndex < questions.length && (
                    <button onClick={this.checkAnswerAndMoveNext}>Next Question</button>
                )}
            </div>
        );
    }
}

export default QuizApp;
