import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadGamesData } from '../../helperFunctions/loadGamesData';
import { StarIcon } from '@heroicons/react/16/solid';


function Home() {
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
      
    <form class="w-full mx-auto p-3 -mt-6 max-w-7xl w-full px-4">   
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

    {/*Popularne gry*/}
    {/* Popular Section */}
      <div className="flex flex-wrap justify-center w-full p-3 mb-0 w-full mx-auto p-3 max-w-7xl w-full px-4 mt-3" style={{ marginBottom: -22 }}>
        <div className="w-full sm:w-1/5 bg-gray-700 text-white text-center p-4 rounded-md">Popularne nowości</div>
        <div className="w-full sm:w-1/5 bg-gray-900 text-white text-center p-4 rounded-md">Bestsellery</div>
        <div className="w-full sm:w-1/5 bg-gray-900 text-white text-center p-4 rounded-md">Popularne nadchodzące</div>
        <div className="w-full sm:w-1/5 bg-gray-900 text-white text-center p-4 rounded-md">Oferty specjalne</div>
        <div className="w-full sm:w-1/5 bg-gray-900 text-white text-center p-4 rounded-md">Nadchodzące darmowe</div>
      </div>

      <div className="w-full mx-auto p-3 mt-0 pt-0 h-100 w-full mx-auto p-3 -mt-6 max-w-7xl w-full px-4">
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

      {/* Featured Section */}
      <div className="max-w-7xl w-full px-4 mt-3">
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
     <div className="max-w-7xl w-full px-4 mt-8">
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
