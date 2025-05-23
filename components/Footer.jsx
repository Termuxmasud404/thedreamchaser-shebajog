// 5. components/Footer.jsx import React from 'react';

const Footer = () => { return ( <footer className="bg-gray-800 text-white py-6 mt-10"> <div className="max-w-7xl mx-auto text-center"> <p className="text-sm">© {new Date().getFullYear()} The Dream Chaser. All rights reserved.</p> <p className="text-xs mt-1">Developer By Masud</p> </div> </footer> ); };

export default Footer;

