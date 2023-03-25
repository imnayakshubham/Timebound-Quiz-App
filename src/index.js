import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import QuizTheme from "./utils/Quiztheme.json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
    theme={{ ...QuizTheme }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider >

);
