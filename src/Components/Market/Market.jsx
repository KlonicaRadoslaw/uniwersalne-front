import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadGamesData } from '../../helperFunctions/loadGamesData';

function Market() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadGamesData();
      console.log(data);
      setGames(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
      {/* Left Column - Item List */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">Rynek społeczności</h1>
        <div className="space-y-4">
          <div className="flex flex-col gap-6">
            {/* Game Item Cards */}
            {games.map((game) => (
              <div key={game.id} className="flex flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Obrazek po lewej stronie */}
                <img
                  src={require(`../images/${game.image}`)}
                  alt={game.title}
                  className="w-32 h-32 object-cover rounded-md"
                />
                {/* Opis i cena wyśrodkowane do prawej */}
                <div className="flex flex-col justify-center items-start w-full">
                <Link
                  to={{ pathname: `/game/${game.id}`, state: { game } }}
                  className="text-sm text-blue-500 hover:text-blue-300 transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-white text-left hover:text-blue-300">{game.title}</h3>
                </Link>
                <p className="text-gray-400 text-sm mt-2 mb-4 text-left">{game.description}</p>
                <div className="flex flex-row justify-between items-center w-full">
                  <div></div> {/* Placeholder to push the price div to the right */}
                  <div className="bg-green-500 text-white p-2 rounded-lg shadow-lg">
                    <p className="text-lg font-semibold">{game.price}</p>
                  </div>
                </div>
              </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Search Filters */}
      <div className="w-full md:w-1/3 bg-gray-800 p-4 rounded-lg flex flex-col">
        <form className="w-full mx-auto mb-4">
          <label htmlFor="default-search" className="w-max mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Wyszukaj</label>
          <p className="text-xl font-bold mb-2">Wyszukaj na rynku</p>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tytuł" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Wyszukaj
            </button>
          </div>
        </form>

        <div className="max-w-7xl w-full">
          <h2 className="text-sm font-bold text-white mt-5 mb-2">Przegladaj według gry</h2>
          <div className="grid grid-cols-1 gap-6">
            {/* Game Item Cards */}
            {games.map((game) => (
              <div key={game.id} className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2">
                  {/* Image Column */}
                  <img
                    src={require(`../images/${game.image}`)}
                    alt={game.title}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                  {/* Text Column */}
                  <div className="flex flex-col justify-start">
                    <h3 className="text-sm font-semibold text-white">
                      <Link
                        to={{ pathname: `/game/${game.id}`, state: { game } }}
                        className="hover:text-blue-300 transition duration-300"
                      >
                        {game.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
