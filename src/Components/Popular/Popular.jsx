import React, { useEffect, useState } from 'react';
import { loadGamesData } from '../../helperFunctions/loadGamesData';
import { StarIcon } from '@heroicons/react/16/solid';

function Popular() {
  const [games, setGames] = useState([]);
  const [choosed, setChoosed] = useState(null); // Changed to null initially
  const [hovered, setHovered] = useState(null); // Track hovered game

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadGamesData();
        console.log("Fetched data:", data);
        if (Array.isArray(data)) {
          setGames(data);
          setChoosed(data[0]); // Set first game as chosen initially
        } else {
          console.error("Data is not an array", data);
        }
      } catch (error) {
        console.error("Error fetching games data:", error);
      }
    };
    fetchData();
  }, []);

  const handleMouseEnter = (game) => {
    setHovered(game.id);
    setChoosed(game); // Set choosed game when hovered
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-8 px-4">
      <form className="w-full mx-auto p-3">
        <label htmlFor="default-search" className="w-max mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Wyszukaj
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Czego szukasz"
            required
          />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Wyszukaj
          </button>
        </div>
      </form>

      {/* Popular Section */}
      <div className="flex flex-wrap justify-center w-full p-3 mb-0" style={{ marginBottom: -22 }}>
        <div className="w-full sm:w-1/5 bg-gray-700 text-white text-center p-4 rounded-md">Popularne nowości</div>
        <div className="w-full sm:w-1/5 bg-gray-900 text-white text-center p-4 rounded-md">Bestsellery</div>
        <div className="w-full sm:w-1/5 bg-gray-900 text-white text-center p-4 rounded-md">Popularne nadchodzące</div>
        <div className="w-full sm:w-1/5 bg-gray-900 text-white text-center p-4 rounded-md">Oferty specjalne</div>
        <div className="w-full sm:w-1/5 bg-gray-900 text-white text-center p-4 rounded-md">Nadchodzące darmowe</div>
      </div>

      <div className="w-full mx-auto p-3 mt-0 pt-0 h-100">
        <div className="flex w-full">
          {/* Game List */}
          <div className="flex-1 block w-2/3 h-100 ps-3 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div className="w-full p-4 pl-0">
              {games && games.length > 0 ? (
                games.map((game) => (
                  <div
                    key={game.id}
                    className={`flex items-center justify-between p-4 rounded-md mb-3 ${hovered === game.id ? 'bg-gray-500' : 'bg-gray-800'}`}
                    onMouseEnter={() => handleMouseEnter(game)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center space-x-4 space-y-4">
                      <div className="w-32 h-16 mb-1">
                        <img
                          src={require(`../images/${game.image}`)} // Ensure the image exists in the correct path
                          alt={game.title}
                        />
                      </div>
                      <div className="flex flex-col mt-0">
                        <h3 className="text-white font-medium">{game.title}</h3>
                        <span className="text-gray-400 text-sm">{game.category}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-8">
                      {/* Discount badge */}
                      <div className="bg-green-600 px-2 py-1 rounded text-white text-sm">
                        {((parseFloat(game.oldPrice.replace(' zł', '')) - parseFloat(game.price.replace(' zł', ''))) / parseFloat(game.oldPrice.replace(' zł', '')) * 100).toFixed(0)}%
                      </div>

                      {/* Price information */}
                      <div className="flex flex-col items-end">
                        {game.oldPrice && (
                          <span className="text-gray-400 line-through text-sm">{game.oldPrice}</span>
                        )}
                        <span className="text-white font-medium">{game.price}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No games available</p>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-1/3 ml-4 bg-gray-700 p-4 rounded-md -ms-2">
            {choosed ? (
              <>
                <div className="p-2 bg-gray-500 rounded-md h-22 ">
                  <div className="flex justify-between items-center">
                    <h5 className="text-white text-md font-medium mb-4">{choosed.title}</h5>
                    <div className="flex items-center space-x-1 -mt-4 me-2">
                      <StarIcon className="w-5 h-5 text-yellow-400" />
                      <p className="text-sm">{choosed.rating}</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-gray-500 rounded-md -mt-2">
                  <p className="text-xs">{choosed.description}</p>
                  <div className="flex flex-grow mt-4">
                    {choosed.platforms && choosed.platforms.map((platform, index) => (
                      <div key={index} className="bg-gray-600 text-white text-xs px-2 py-1 rounded mr-2 mb-2">
                        {platform}
                      </div>
                    ))}
                  </div>
                  <div className='mt-2 rounded-md'>
                    <img
                      src={require(`../images/${choosed.image}`)} // Ensure the image exists in the correct path
                      alt={choosed.title}
                      className='rounded-md w-full h-48 object-cover'
                    />
                  </div>
                </div>
              </>
            ) : (
              <p>Loading details...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
