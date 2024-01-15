'use client'

import { useState } from 'react';
import "./quiz.scss"

const QuizPage = ({ quiz }) => {
    console.log(quiz)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(null));

    const handleAnswerSubmit = (answer) => {
        // Lưu câu trả lời của người dùng
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestion] = answer;
        setUserAnswers(updatedUserAnswers);

        // Chuyển sang câu hỏi tiếp theo
        setCurrentQuestion(currentQuestion + 1);
    };

    const Question = ({ question, onAnswerSubmit }) => {
        console.log(question)
        return (
            <div>
                <h2 className='question'>{question.content}</h2>
                <ul className='options d-flex flex-wrap justify-content-between'>

                    {question.QuizOptions.map((option, index) => (
                        <li className='option' key={index}>
                            <button onClick={() => onAnswerSubmit(option)}>
                                <label>
                                    {option.content}
                                </label>

                            </button>
                        </li>
                    ))}

                </ul>

            </div>
        );
    };

    const QuizResult = ({ userAnswers, correctAnswers }) => {
        // Tính điểm số, hiển thị kết quả, hoặc gửi điểm số lên server...
        console.log(userAnswers)
        const calculateScore = (userAnswers) => {
            let score = 0;
            for (let i = 0; i < userAnswers.length; i++) {
                if (userAnswers[i].isCorrect) {
                    score += 1;
                }
            }
            return score * 100 / userAnswers.length;
        }
        return (
            <div className='result_page result_page_show'>
                <div className='container'>
                    <div className='result_inner'>
                        <h2>Bài kiểm tra hoàn tất</h2>
                        <p>Điểm của bạn: {calculateScore(userAnswers)}/100</p>
                    </div>

                </div>

            </div>
        );
    };

    return (
        <div>
            <h1>Quiz</h1>
            {currentQuestion < quiz.length ? (
                <Question
                    question={quiz[currentQuestion]}
                    onAnswerSubmit={handleAnswerSubmit}
                />
            ) :

                (
                    <QuizResult userAnswers={userAnswers} />
                )
            }
        </div>
    );
};

export default QuizPage;