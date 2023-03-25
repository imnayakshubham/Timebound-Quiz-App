
import { Affix, Avatar, Button, Rate, Typography } from 'antd'
import React, { useState } from 'react'
import QuizBanner from "../../asserts/QuizBanner.svg"
import "./HomePage.css"
import { CommentOutlined, BookOutlined, CrownOutlined, FieldTimeOutlined, InfoCircleOutlined, PaperClipOutlined } from "@ant-design/icons"
import { StartQuizPopover } from '../StartQuizPopover/StartQuizPopover'
import { defaultQuestions } from '../../constants/contants'

const { Title, Paragraph, Text } = Typography

export const HomePage = () => {
    const [showQuizPopOver, setShowQuizPopOver] = useState(false)
    return (
        <>
            <div className='homepage'>
                <div className='banner'>
                    <div className="banner__left">
                        <div className='banner__content'>
                            <div>
                                <h3 className='banner__title'>QuizzyGo</h3>
                                <h4 className='banner__subtitle'>
                                    The Daily Quiz App
                                </h4>
                            </div>
                            <div className={`banner__actions ${showQuizPopOver ? 'hide__actions' : ""}`}>
                                <Button type="primary" onClick={() => setShowQuizPopOver(true)}>Start Quiz</Button>
                            </div>
                        </div>
                    </div>

                    <div className="banner__right">
                        <div className='banner__image'>
                            <img src={QuizBanner} alt='"banner' className='banner__image' />

                        </div>
                    </div>
                </div>
                <div className='quiz__home__page__details'>
                    <Title level={3}>{defaultQuestions[0].category}</Title>
                    <div className="quiz__home__page__info">
                        <div className='quiz__info'>
                            <Paragraph
                                ellipsis={{
                                    rows: 4,
                                    symbol: 'more',
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore accusantium odio beatae, autem quae optio dicta et quia! Obcaecati quod vero repudiandae recusandae reprehenderit esse delectus vel. Dolorum, quia!
                            </Paragraph>
                            <div className='quiz__info__detail'>
                                {
                                    <div className='quiz__popover'>
                                        <div className='confirm__quiz__start'>
                                            <div className={"start__quiz__popover"}>
                                                <Text strong>This Quiz Includes</Text>
                                                <div className='quiz__info__container'>
                                                    <div className='quiz__info__item'>
                                                        <div className="cl">
                                                            <PaperClipOutlined className='icons' />
                                                        </div>
                                                        <div className="cl">
                                                            <div className="cl">
                                                                <Text type='secondary'>50% Passing Percentage.</Text>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className='quiz__info__item'>
                                                        <div className="cl">
                                                            <InfoCircleOutlined className='icons' />
                                                        </div>
                                                        <div className="cl">
                                                            <div className="cl">
                                                                <Text type='secondary'>{10} Questions</Text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='quiz__info__item'>
                                                        <div className="cl">
                                                            <FieldTimeOutlined className='icons' />
                                                        </div>
                                                        <div className="cl">
                                                            <div className="cl">
                                                                <Text type='secondary'>1 Min</Text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='quiz__stats'>
                            <div className="quiz__home__page__info__left">
                                <div>
                                    <Button type='link' className='quiz__info__btn' icon={<CommentOutlined />}>Leave a comment</Button>
                                </div>
                                <div><Button type='link' className='quiz__info__btn' icon={<BookOutlined />}>Save Quiz</Button></div>
                                <div><Button type='link' className='quiz__info__btn' icon={<CrownOutlined />}>Challenge a Friend</Button></div>
                            </div>
                            <div className="quiz__home__page__info__right">
                                <div className='quiz__home__page__info__enrollment'>
                                    <Avatar.Group>
                                        <Avatar style={{ backgroundColor: '#f56a00' }}>Q</Avatar>
                                        <Avatar>U</Avatar>
                                        <Avatar>I</Avatar>
                                        <Avatar style={{ backgroundColor: '#f00' }}>Z</Avatar>
                                        <Avatar style={{ backgroundColor: '#000' }}>+97</Avatar>
                                    </Avatar.Group>
                                    People Enrolled
                                </div>
                                <div className='quiz__home__page__info__rating'>
                                    <Rate disabled allowHalf defaultValue={2.5} />
                                    2.5 Ratings(5.0)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showQuizPopOver && <Affix offsetBottom={0} className="popover__container"><StartQuizPopover setShowQuizPopOver={setShowQuizPopOver} /></Affix>
            }
        </>
    )
}
