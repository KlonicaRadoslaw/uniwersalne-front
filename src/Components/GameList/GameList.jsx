import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadGamesData } from '../../helperFunctions/loadGamesData';

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadGamesData();
      setGames(data);
    };
    fetchData();
  }, []);

  return (
    <div className="games-list">
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <h2>{game.title}</h2>
          <img src={`/images/${game.image}`} alt={game.title} className="w-full" />
          <p>{game.description}</p>
          <Link to={`/game/${game.id}`} className="text-blue-500 hover:underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
