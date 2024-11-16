import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      {/* Featured Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Featured & Recommended</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Replace with dynamic items */}
          <Link className="bg-gray-800 p-4 rounded-lg" to="/game">
            <img src="https://your-game-image.com" alt="Game 1" className="w-full h-32 object-cover rounded-md" />
            <h3 className="mt-2 font-semibold">Game Title 1</h3>
          </Link>
          <Link className="bg-gray-800 p-4 rounded-lg" to="/game">
            <img src="https://your-game-image.com" alt="Game 2" className="w-full h-32 object-cover rounded-md" />
            <h3 className="mt-2 font-semibold">Game Title 2</h3>
            </Link>
          <Link className="bg-gray-800 p-4 rounded-lg" to="/game">
            <img src="https://your-game-image.com" alt="Game 3" className="w-full h-32 object-cover rounded-md" />
            <h3 className="mt-2 font-semibold">Game Title 3</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
