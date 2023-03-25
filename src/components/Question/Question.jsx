import { Button } from 'antd'
import React, { memo, useMemo } from 'react'
import "./Question.css"

export const Question = memo(({ questions, currentQuestionIndex, setCurrentQuestionIndex, handleSubmitQuiz, setSelectedAnswer, selectedAnswer }) => {

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prev) => prev + 1)
    }

    const shuffledOptions = useMemo(() => [questions[currentQuestionIndex].correct_answer, ...questions[currentQuestionIndex].incorrect_answers].sort(() => Math.random() - 0.5), [questions, currentQuestionIndex])

    const handleSelectAnswer = (questionIdx, selectedOption) => {
        setSelectedAnswer((prev) => {
            const arr = [...prev]
            arr[questionIdx] = selectedOption
            return arr
        })
    }

    return (
        <div className='question'>
            <div className="question__header">
                <h3>{questions[currentQuestionIndex].question}</h3>
            </div>
            <div className='question__details'>
                <div className="question__options">
                    {!!shuffledOptions.length && shuffledOptions.map((option) => <Button key={option} className={`option ${selectedAnswer[currentQuestionIndex] === (option) ? "selected__option" : ""}`} onClick={() => handleSelectAnswer(currentQuestionIndex, option)}>
                        {option}
                    </Button>)
                    }
                </div>
                <div className='question__actions'>
                    {
                        currentQuestionIndex >= 9 ? <Button type="primary" size='large' onClick={() => handleSubmitQuiz("submit")} className='submit__question_btn'>Submit</Button> : <Button type="primary" size='large' className='next__question_btn' onClick={handleNextQuestion}>Next</Button>
                    }
                </div>
            </div>

        </div>
    )
})
