// 4. components/Header.jsx import React from 'react'; import { Link } from 'react-router-dom';

const Header = () => { return ( <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"> <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"> <h1 className="text-2xl font-bold">The Dream Chaser</h1> <nav className="space-x-4"> <Link to="/" className="hover:underline">Home</Link> <Link to="/services" className="hover:underline">Services</Link> <Link to="/booking" className="hover:underline">Booking</Link> <Link to="/contact" className="hover:underline">Contact</Link> <Link to="/dashboard" className="hover:underline">Dashboard</Link> </nav> </div> </header> ); };

export default Header;
