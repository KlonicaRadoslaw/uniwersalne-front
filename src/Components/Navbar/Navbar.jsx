import React, { useState } from 'react';

const Navbar = () => {
  const [language, setLanguage] = useState("Polski");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src="path/to/steam-logo.png" alt="Steam Logo" className="h-10" />
        <span className="text-white font-bold text-lg">Steam</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm text-gray-300">
        <a href="#store" className="hover:text-white transition duration-200">Sklep</a>
        <a href="#community" className="hover:text-white transition duration-200">Społeczność</a>
        <a href="#info" className="hover:text-white transition duration-200">Informacje</a>
        <a href="#support" className="hover:text-white transition duration-200">Pomoc Techniczna</a>
      </div>

      {/* Additional Buttons (Log In & Language Selector) */}
      <div className="flex items-center space-x-4">
        {/* Log In Button */}
        <button className="text-white hover:text-green-500 transition duration-200">Zaloguj się</button>

        {/* Language Dropdown */}
        <select 
          value={language} 
          onChange={handleLanguageChange} 
          className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-gray-600 transition duration-200">
          <option value="Polski">Polski</option>
          <option value="English">English</option>
          <option value="Español">Español</option>
          <option value="Deutsch">Deutsch</option>
          <option value="Français">Français</option>
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
