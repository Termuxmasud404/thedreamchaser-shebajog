/* Project: TheDreamChaser-ShebaJog.com Tech: React + Tailwind CSS */

// 1. main.jsx (Entry point) import React from 'react'; import ReactDOM from 'react-dom/client'; import App from './App.jsx'; import './index.css'; import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render( <BrowserRouter> <App /> </BrowserRouter> );

