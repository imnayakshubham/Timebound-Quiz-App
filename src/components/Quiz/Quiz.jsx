import { Empty } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { defaultQuestions, quizDuration } from "../../constants/contants";
import { Question } from "../Question/Question";
import { QuizHeader } from "../QuizHeader/QuizHeader";
import "./Quiz.css"


export const Quiz = () => {
    const navigateTo = useNavigate()
    const { state: routerData = {} } = useLocation()

    const [timeExcedded, setTimeExcedded] = useState(quizDuration)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState([])

    const handleSubmitQuiz = useCallback((from = null, answers) => {
        if (!!defaultQuestions.length) {
            const userSelectedAnswer = from === "limit__exceed" ? answers : selectedAnswer
            const score = defaultQuestions.filter((question) => question.correct_answer && userSelectedAnswer.includes(question.correct_answer))
            navigateTo("/result", { state: { score: score.length, totalQuestion: defaultQuestions.length, quizCategory: defaultQuestions[0]?.category, timetaken: (from === "submit" ? timeExcedded : quizDuration) / 1000 } })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigateTo, selectedAnswer])

    useEffect(() => {
        let remainingTime = quizDuration
        const timerId = setInterval(() => {
            remainingTime -= 1000;
            setTimeExcedded(remainingTime)
            if (remainingTime <= 0) {
                clearInterval(timerId);
            }
        }, 1000)

        return () => {
            clearInterval(timerId);
        }
    }, [])

    useEffect(() => {
        if (timeExcedded === 0) {
            handleSubmitQuiz("limit__exceed", selectedAnswer)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeExcedded, selectedAnswer])



    useEffect(() => {
        if (!routerData?.isQuizStarted) {
            navigateTo("/")
        }
    }, [routerData?.isQuizStarted, navigateTo])

    return (
        <div className='quiz'>
            <div className='quiz__container'>
                {!!defaultQuestions.length ? (
                    <>
                        <QuizHeader currentQuestionIndex={currentQuestionIndex} defaultQuestions={defaultQuestions} time={timeExcedded / 1000} />
                        <Question
                            currentQuestionIndex={currentQuestionIndex}
                            setCurrentQuestionIndex={setCurrentQuestionIndex}
                            questions={defaultQuestions}
                            handleSubmitQuiz={handleSubmitQuiz}
                            setSelectedAnswer={setSelectedAnswer}
                            selectedAnswer={selectedAnswer}
                        />
                    </>
                ) : (
                    <>
                        <Empty description={"No Questions Available At the moment"} />
                    </>
                )}
            </div>
        </div>
    )
}