import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageNotFoundImg from "../../asserts/PageNotFound.svg"

export const PageNotFound = () => {
    const navigateTo = useNavigate()
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100vw", height: "95vh" }}>
            <img src={PageNotFoundImg} alt="PageNotFound" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            <Button type='primary' onClick={() => navigateTo("/")}>Back to Home</Button>
        </div>
    )
}
