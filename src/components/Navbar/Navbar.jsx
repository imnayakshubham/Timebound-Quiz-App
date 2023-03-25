import { Space } from 'antd'
import React from 'react'
import "./Navbar.css"
import { QuestionOutlined } from "@ant-design/icons"

export const Navbar = () => {
    return (
        <Space className="header">
            <QuestionOutlined style={{ fontSize: 20 }} />
            <Space direction="vertical" className="logo-heading">
                <h2>QuizzyGo</h2>
            </Space>
        </Space>
    )
}
