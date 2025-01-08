import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadGamesData } from '../../helperFunctions/loadGamesData';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

function Home() {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-8 px-4">
      
    <form class="w-full mx-auto p-3 -mt-6">   
        <label for="default-search" class="w-max mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Wyszukaj</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Czego szukasz" required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Wyszukaj</button>
        </div>
    </form>

      {/* Featured Section */}
      <div className="max-w-7xl w-full px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8 mt-5">Wyróżnione i polecane</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Game Item Cards */}
          {games.map((game) => (
            <div key={game.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={require(`../images/${game.image}`)}
                alt={game.title}
                className="w-full h-44 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{game.title}</h3>
              <p className="text-gray-400 text-sm mt-2 mb-4">{game.description}</p>
              <div className="flex flex-col items-end justify-start mb-1">
                <p className='text-sm text-green-400 font-semibold mb-2'>Cena: {game.price}</p>
                <Link
                  to={{ pathname: `/game/${game.id}`, state: { game } }}
                  className="text-sm text-blue-500 hover:text-blue-300 transition duration-300"
                >
                  Wyświetl szczegóły
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Oferty specjalne */}
     <div className="max-w-7xl w-full px-4">
    <h2 className="text-3xl font-bold text-center text-white mb-8 mt-5">Oferty specjalne</h2>
    {/* Zmieniono z flex-col na flex-row dla układu poziomego */}
    <div className="flex flex-col gap-6">
      {/* Game Item Cards */}
      {games.map((game) => (
        <div className="flex flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
  {/* Obrazek po lewej stronie */}
  <img
    src={require(`../images/${game.image}`)}
    alt={game.title}
    className="w-100 h-32 object-cover rounded-md"
  />
  {/* Opis i cena wyśrodkowane do prawej */}
  <div className="flex flex-col justify-center items-end w-full">
    <Link
        to={{ pathname: `/game/${game.id}`, state: { game } }}
        className="text-sm text-blue-500 hover:text-blue-300 transition duration-300 "
      >
        <h3 className="text-xl font-semibold text-white text-right hover:text-blue-300">{game.title}</h3>
      </Link>
    <p className="text-gray-400 text-sm mt-2 mb-4 text-right">{game.description}</p>
    <div className="flex flex-col items-end">
      <p className="text-lg text-red-400 font-semibold">Promocyjna cena: {game.price}</p>
      
    </div>
  </div>
</div>
      ))}
    </div>
</div>

</div>
  );
}

export default Home;
