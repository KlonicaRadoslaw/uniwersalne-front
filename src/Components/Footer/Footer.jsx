import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-8 text-center">
      <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
        <a href="#valve" className="hover:text-white transition duration-200">Informacje o Valve</a>
        <a href="#jobs" className="hover:text-white transition duration-200">Praca</a>
        <a href="#steamworks" className="hover:text-white transition duration-200">Steamworks</a>
        <a href="#support" className="hover:text-white transition duration-200">Pomoc</a>
        <a href="#giftCards" className="hover:text-white transition duration-200">Karty podarunkowe</a>
      </div>
      <div className="text-xs text-gray-500 mt-4">
        © 2024 Valve Corporation. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
