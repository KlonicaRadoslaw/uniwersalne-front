import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadGamesData } from '../../helperFunctions/loadGamesData';

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadGamesData();
      setGames(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-8 px-4">
      {/* Featured Section */}
      <div className="max-w-7xl w-full px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Featured & Recommended</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Game Item Cards */}
          {games.map((game) => (
            <div key={game.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={`/images/${game.image}`}
                alt={game.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{game.title}</h3>
              <p className="text-gray-400 text-sm mt-2 mb-4">{game.description}</p>
              <Link
                to={{ pathname: `/game/${game.id}`, state: { game } }}
                className="text-blue-500 hover:text-blue-300 transition duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
