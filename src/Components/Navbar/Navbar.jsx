import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <Link className="flex items-center space-x-4" to="/">
        <img src={require('../images/logo.png')} alt="Steam 2.0 Logo" className="w-40" />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-gray-300 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-8 text-sm text-gray-300 flex-col md:flex-row md:items-center w-full md:w-auto`}
      >
        {/* Sklep */}
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-transparent transition duration-200">
            Sklep
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems className="absolute right-0 z-10 mt-0 w-40 origin-top-center rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                <Link
                  to="#"
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

        {/* Log In & Language Selector */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 mt-4 md:mt-0 ps-10">
          <Link
            to="/login"
            className="text-white hover:text-green-500 transition duration-200 w-full md:w-auto text-sm font-semibold"
          >
            Zaloguj się
          </Link>
          <div className="flex items-center space-x-2 bg-transparent rounded-md focus-within:ring-2 focus-within:ring-green-500 transition duration-200">
            <GlobeAltIcon className="h-4 w-4 text-white -me-2" />
            <select className="px-2 appearance-none text-sm font-semibold bg-transparent text-white rounded-md focus:outline-none focus:bg-gray-900 hover:bg-transparent transition duration-200">
              <option>Polski</option>
              <option>English</option>
              <option>Español</option>
              <option>Deutsch</option>
              <option>Français</option>
            </select>
          </div>
          <button className="text-sm font-semibold bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition duration-200 -ps-10">
            <ArrowDownTrayIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
