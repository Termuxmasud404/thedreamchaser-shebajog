// 6. pages/Home.jsx import React from 'react'; import { Link } from 'react-router-dom';

const Home = () => { return ( <main className="text-center py-20 px-4 bg-white shadow-inner"> <h2 className="text-4xl font-bold mb-4 text-indigo-600">Welcome to ShebaJog</h2> <p className="text-lg mb-6">Book trusted services near you in seconds. Reliable, affordable, and fast.</p> <Link to="/services" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"> Explore Services </Link> </main> ); };

export default Home;

