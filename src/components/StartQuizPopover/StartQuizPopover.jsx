import { Button, Card, Typography } from 'antd'
import React from 'react'
import { FieldTimeOutlined, InfoCircleOutlined, CloseOutlined } from "@ant-design/icons"
import { defaultQuestions } from '../../constants/contants'
import "./StartQuizPopover.css"
import { useNavigate } from 'react-router-dom'

const { Text } = Typography


export const StartQuizPopover = ({ setShowQuizPopOver }) => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate("/quiz", { state: { isQuizStarted: true } })
    }
    return (
        <>
            <div className='quiz__popover__container'>
                <Card className='confirm__quiz__start__popover'>
                    <div className={"start__quiz__popover__container"}>
                        <div className='popover__header'>
                            <Text strong>Quiz Rules</Text>
                            <Button onClick={() => setShowQuizPopOver(false)} type='text' icon={<CloseOutlined />}></Button>
                        </div>
                        <div className='quiz__popover__info__container'>
                            <div className='quiz__popover_info__item'>
                                <div className="cl">
                                    <FieldTimeOutlined className='icons' />
                                </div>
                                <div className="cl">
                                    <Text strong>1 min per question</Text>
                                    <div className="cl">
                                        <Text type='secondary'>Keep in mind its a time-bounded quiz.</Text>
                                    </div>

                                </div>
                            </div>

                            <div className='quiz__popover_info__item'>
                                <div className="cl">
                                    <InfoCircleOutlined className='icons' />
                                </div>
                                <div className="cl">
                                    <Text strong>{defaultQuestions.length} Question</Text>
                                    <div className="cl">
                                        <Text type='secondary'>We believe that you will ace it!</Text>
                                    </div>

                                </div>
                            </div>
                            <div className="quiz__popover_info__item">
                                <Button type="primary" onClick={() => handleStartQuiz()}>Start Quiz</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}
