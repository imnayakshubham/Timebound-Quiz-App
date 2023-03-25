import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import "./Result.css"
import { Button } from 'antd'

export const Result = () => {
    const { state: data = {} } = useLocation()
    const navigateTo = useNavigate()
    const confetiRef = useRef(null);

    useEffect(() => {
        if (!Object.keys(data || {}).length) {
            navigateTo("/")
        }
    }, [navigateTo, data])

    const scoreInPercentage = Math.round(((data?.score / data?.totalQuestion) * 100))

    const renderSubMessage = () => {
        if (scoreInPercentage < 50) {
            return ('Keep Pushing. We believe in You!');
        } else if (scoreInPercentage >= 50 && scoreInPercentage < 80) {
            return ('Good job!. You are very Close Keep Pushing!');
        } else {
            return ('Excellent!');
        }
    }

    const [confettiConfig, setconfettiConfig] = useState({
        showConfetti: (((data?.score / data?.totalQuestion) * 100) >= 50),
        width: confetiRef.current?.clientWidth,
        height: confetiRef.current?.clientHeight
    })

    useEffect(() => {
        setconfettiConfig({
            showConfetti: (((data?.score / data?.totalQuestion) * 100) >= 50),
            width: confetiRef.current?.clientWidth,
            height: confetiRef.current?.clientHeight
        })
    }, [data])

    useEffect(() => {
        let time = 3.5
        const timerId = setInterval(() => {
            if (time <= 0) {
                clearInterval(timerId)
                setconfettiConfig((prev) => ({
                    ...prev,
                    showConfetti: false,
                }))
            }
            time -= 1.5
            return;
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [data])


    return (
        <div className='show__result' ref={confetiRef}>
            {
                confettiConfig.showConfetti &&
                <Confetti numberOfPieces={150} width={confettiConfig.width} height={confettiConfig.height} className="show__result" tweenDuration={10} />
            }
            <div className='result__container'>
                <div className='result__header'>
                    <h2>{data?.quizCategory}</h2>

                </div>
                <div className='result__content'>
                    <div className='result__card__content'>
                        <span className='score__header__text'>You Scored: </span>
                        <span className='scoreInPercentage'>{scoreInPercentage}%</span>
                        <h4>Oh Snap, You can do better.</h4>
                        <span className='result__card__submessage'>{renderSubMessage()}</span>
                    </div>
                    <div className='result__stats'>
                        <div className='result__score__stats'>
                            <span className='result__score__stats__header__text'>You Scored: </span>
                            <span className='scoreInPercentage'>{data?.score} / {data?.totalQuestion}</span>
                        </div>
                        <div className='result__time__stats'>
                            <span className='result__score__time__header__text'>Time Taken  </span>
                            <span className='scoreInPercentage'>{data?.timetaken} seconds</span>
                        </div>

                    </div>
                </div>
                <div className='result__footer'>
                    <Button type="primary" onClick={() => navigateTo("/")}>Back To home</Button>
                </div>

            </div>
        </div>
    )
}
