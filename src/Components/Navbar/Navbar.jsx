import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
        <Link className="flex items-center space-x-4" to="/">
        <img src="path/to/steam-logo.png" alt="Steam 2.0 Logo" className="h-10" />
        <span className="text-white font-bold text-lg">Steam 2.0</span>
        </Link>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm text-gray-300">
        <Link href="#store" className="hover:text-white transition duration-200" to="/">Sklep</Link>
        <a href="#community" className="hover:text-white transition duration-200">Społeczność</a>
        <a href="#info" className="hover:text-white transition duration-200">Informacje</a>
        <a href="#support" className="hover:text-white transition duration-200">Pomoc Techniczna</a>
      </div>

      {/* Additional Buttons (Log In & Language Selector) */}
      <div className="flex items-center space-x-4">
        {/* Log In Button */}
        <Link to="/login" className="text-white hover:text-green-500 transition duration-200">Zaloguj się</Link>

        {/* Language Dropdown */}
        <select className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-gray-600 transition duration-200">
          <option>Polski</option>
          <option>English</option>
          <option>Español</option>
          <option>Deutsch</option>
          <option>Français</option>
        </select>

        {/* Install Steam Button */}
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition duration-200">
          Zainstaluj Steam
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
