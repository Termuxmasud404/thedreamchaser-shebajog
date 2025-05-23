/* Project: TheDreamChaser-ShebaJog.com Tech: React + Tailwind CSS */

// 1. main.jsx (Entry point) import React from 'react'; import ReactDOM from 'react-dom/client'; import App from './App.jsx'; import './index.css'; import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render( <BrowserRouter> <App /> </BrowserRouter> );

// 2. App.jsx (Routing setup) import React from 'react'; import { Routes, Route } from 'react-router-dom'; import Home from './pages/Home'; import Services from './pages/Services'; import Booking from './pages/Booking'; import Contact from './pages/Contact'; import Login from './pages/Login'; import Register from './pages/Register'; import Profile from './pages/Profile'; import Dashboard from './pages/Dashboard'; import Header from './components/Header'; import Footer from './components/Footer';

const App = () => { return ( <div className="font-sans"> <Header /> <Routes> <Route path="/" element={<Home />} /> <Route path="/services" element={<Services />} /> <Route path="/booking" element={<Booking />} /> <Route path="/contact" element={<Contact />} /> <Route path="/login" element={<Login />} /> <Route path="/register" element={<Register />} /> <Route path="/profile" element={<Profile />} /> <Route path="/dashboard" element={<Dashboard />} /> </Routes> <Footer /> </div> ); };

export default App;

// 3. index.css (with Tailwind) @tailwind base; @tailwind components; @tailwind utilities;

body { background: #f5f7fa; color: #333; margin: 0; padding: 0; }

// Note: Tailwind must be installed and configured via postcss.config.js and tailwind.config.js // Pages/components will be provided next one by one...

