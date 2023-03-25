import { Tag } from 'antd'
import React, { memo } from 'react'

export const QuizHeader = memo(({ currentQuestionIndex, defaultQuestions, time }) => {
    const returnColorBasedOnTime = () => {
        if ((time < 10)) {
            return "red"
        }
        else if ((time > 10 && time <= 20)) {
            return "#f50"
        }
        else {
            return "#2db7f5"
        }
    }

    return (
        <div className="quizInfo">
            <span>
                <Tag color="green">{currentQuestionIndex + 1}/{defaultQuestions.length}</Tag>
            </span>
            <span>{defaultQuestions[currentQuestionIndex].category}</span>

            <span>
                <Tag color={returnColorBasedOnTime()}>{time} sec Left</Tag>
            </span>
        </div>
    )
})
