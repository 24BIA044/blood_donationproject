import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-red-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Blood Donation System</h1>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-gray-200">Home</a></li>
        <li><a href="/about" className="hover:text-gray-200">About</a></li>
        <li><a href="/needblood" className="hover:text-gray-200">Need Blood</a></li>
        <li><a href="/donate" className="hover:text-gray-200">Donate</a></li>
        <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


