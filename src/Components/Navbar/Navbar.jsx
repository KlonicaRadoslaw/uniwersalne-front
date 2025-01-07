import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Navbar = () => {

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
        <Link className="flex items-center space-x-4" to="/">
        <img src={require('../images/logo.png')} alt="Steam 2.0 Logo" className="h-12 " />
        </Link>

      {/* Navigation Links */}
        <div className="flex space-x-8 text-sm text-gray-300">
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-transparent transition duration-200">
          Sklep
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-0 w-40 origin-top-center rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="py-0">
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
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:transparent transition duration-200">
            Społeczność
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems className="absolute right-0 z-10 mt-0 w-40 origin-top-center rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                <Link
                  to="/market"
                  className="block px-4 py-2 text-sm text-gray-300 bg-gray-800 hover:bg-gray-700"
                >
                  Rynek
                </Link>
              </MenuItem>
              
            </div>
          </MenuItems>
        </Menu>

        {/* Informacje */}
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:transparent transition duration-200">
            Informacje
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems className="absolute right-0 z-10 mt-0 w-40 origin-top-center rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
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
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-transparent transition duration-200">
            Pomoc techniczna
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems className="absolute right-0 z-10 mt-0 w-40 origin-top-center rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
          </MenuItems>
        </Menu>
      </div>

      {/* Additional Buttons (Log In & Language Selector) */}
      <div className="flex items-center space-x-4">
        {/* Log In Button */}
              <Link to="/login" className="text-white hover:text-green-500 transition duration-200 w-20 text-sm font-semibold ml-2">Zaloguj się</Link>
              {/* Language Dropdown */}

        <div className="flex items-center space-x-0 bg-transparent rounded-md focus-within:ring-2 focus-within:ring-green-500 transition duration-200">
        <GlobeAltIcon className="h-4 w-4 text-white" />
        <select className="px-2 appearance-none text-sm font-semibold bg-transparent text-white rounded-md focus:outline-none focus:bg-gray-900 hover:bg-transparent transition duration-200 hover:appearance-none">
          <option>Polski</option>
          <option>English</option>
          <option>Español</option>
          <option>Deutsch</option>
          <option>Français</option>
        </select>
      </div>


        {/* Install Steam Button */}
        <button className="text-sm font-semibold bg-green-600 text-white py-2 px-2 rounded-lg shadow-md hover:bg-green-500 transition duration-200">
          Zainstaluj Steam
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
