import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

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
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200">
            Sklep
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Sklep Główny
                </Link>
              </MenuItem>
              
            </div>
          </MenuItems>
        </Menu>

        {/* Społeczność */}
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200">
            Społeczność
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  to="/market"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Rynek
                </Link>
              </MenuItem>
              
            </div>
          </MenuItems>
        </Menu>

        {/* Informacje */}
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200">
            Informacje
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  to="/news"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Aktualności
                </Link>
              </MenuItem>
              
            </div>
          </MenuItems>
        </Menu>

        {/* Pomoc Techniczna */}
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200">
            Pomoc techniczna
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            
          </MenuItems>
        </Menu>
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
