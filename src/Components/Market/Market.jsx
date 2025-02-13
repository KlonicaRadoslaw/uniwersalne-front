import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadGamesData } from '../../helperFunctions/loadGamesData';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function Market() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearchResults, setFilteredSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadGamesData();
      setGames(data);
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query) {
      const results = games.filter(game =>
        game.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSearchResults(results);
    } else {
      setFilteredSearchResults([]);
    }
  };

  const item = [
    {
      name: "Skrzynia Snów i koszmarów",
      game: "CS:GO",
      price: "10zł",
      image: "s1.png",
      description: "Skrzynia Snów i koszmarów jest skrzynią ze skórkami do broni, która została wydana 20 stycznia 2022 roku. Zwycięzcy tego konkursu otrzymali udział w puli nagród o wartości $1 700 000 USD (po $100 000 USD).",
    },
    {
      name: "Klucz do skrzynki Mann Co.",
      game: "Team Fortress 2",
      price: "20zł",
      image: "s2.png",
      description: "jest narzędziem jednorazowego użytku, możliwym do zdobycia poprzez wymianę lub zakup w Sklepie Mann Co. Każdy klucz może zostać użyty raz, w celu otwarcia wybranej Skrzynki Mann C.",
    },
    {
      name: "M4A1-S | Czarny lotos",
      game: "CS:GO",
      price: "150zł",
      image: "s3.png",
      description: "Zewnętrze: po testach bojowych. Posiadający mniejszy magazynek niż jego niewytłumiony odpowiednik, karabin M4A1-S zapewnia cichsze strzały, mniejszy odrzut i lepszą celność. Ta broń została ozdobiona na zamówienie wzorem czarnego kwiatu lotosu na niebiesko-fioletowym podkładzie. Dodaje 2 zabójstwa do licznika podczas rundy karabinowej, a następnie jest wyrzucany. Kolekcja Kilowata",
    },
  ];
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 flex flex-col">
  {/* Full-width header */}
  <div className="w-full mb-6">
    <h1 className="text-3xl font-bold mb-4">Rynek społeczności</h1>
  </div>

  {/* Flex container for columns */}
  <div className="flex flex-col md:flex-row md:space-x-6">
    {/* Left Column - Item List */}
    <div className="flex-1">
      <div className="space-y-4">
        <div className="flex flex-col gap-6">
          {/* Game Item Cards */}
          {item.map((item) => (
            <div key={item.id} className="flex flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Obrazek po lewej stronie */}
              <img
                src={require(`../images/${item.image}`)}
                alt={item.title}
                className="w-40 h-40 object-cover rounded-md"
              />
              {/* Opis i cena wyśrodkowane do prawej */}
              <div className="flex flex-col justify-center items-start w-full">
                <h3 className="text-xl font-semibold text-white text-left hover:text-blue-300">{item.name}</h3>
                <p className="text-gray-400 text-sm mt-2 mb-4 text-left">{item.description}</p>
                <div className="bg-gray-800 rounded-lg">
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded-lg cursor-pointer hover:bg-gray-600">
                    {item.game}
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <div></div> {/* Placeholder to push the price div to the right */}
                  <div className="bg-green-500 text-white p-2 rounded-md shadow-lg flex items-center hover:bg-green-600 transition-all duration-300">
                    <ShoppingCartIcon className="w-6 h-6 mr-2" />
                    <p className="text-md font-semibold">{item.price}</p>
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
      <form className="w-full mx-auto mb-4 relative">
        <label htmlFor="default-search" className="w-max text-sm font-medium text-gray-900 sr-only dark:text-white">Wyszukaj</label>
        <p className="text-xl font-bold mb-6">Wyszukaj na rynku</p>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" value={searchTerm} onChange={handleSearchChange} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tytuł" required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Wyszukaj
          </button>
        </div>
        {/* Wyniki wyszukiwania */}
        {searchTerm && filteredSearchResults.length > 0 && (
          <ul className="absolute left-0 w-full mt-1 bg-gray-700 rounded-md shadow-lg z-10">
            {filteredSearchResults.map((game) => (
              <li key={game.id} className="px-4 py-2 hover:bg-gray-600 flex items-center">
                <img src={require(`../images/${game.image}`)} alt={game.title} className="w-8 h-8 object-cover rounded-md mr-2" />
                <Link
                  to={{ pathname: `/game/${game.id}`, state: { game } }}
                  className="text-white hover:text-blue-400"
                >
                  {game.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
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
</div>
  );
}

export default Market;
