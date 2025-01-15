import React, { useState, useEffect } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Checkbox } from "@headlessui/react";
import { loadGamesData } from '../../helperFunctions/loadGamesData';

const News = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearchResults, setFilteredSearchResults] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadGamesData();
      setGames(data);
    };
    fetchData();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Przełączamy widoczność menu
  };

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

  const newsData = [
    {
      date: "DZIŚ",
      articles: [
        {
          title: "Industry Giant 4.0",
          subtitle: "Digital Extras Now Available!",
          type: "AKTUALNOŚCI",
          time: "GODZINĘ TEMU",
          description:
            "Get the package and/or additional editions and let your empire grow even further!",
          imgUrl: "industry_giant.jpg",
          likes: 9,
          comments: 0,
          link: "/news/industry-giant", // Przykładowy link
        },
        {
          title: "War Thunder",
          subtitle: "Screenshot Competition – Winter is Coming!",
          type: "KONKURS",
          badge: "NA ŻYWO",
          time: "Zakończy się za 5 dni",
          description:
            "We're ready to see your awesome screenshots! Welcome to the 146th War Thunder Steam Screenshot Competition!",
          imgUrl: "war_thunder.jpg",
          likes: 63,
          comments: 4,
          link: "/news/war-thunder", // Przykładowy link
        },
      ],
    },
    {
      date: "WCZORAJ",
      articles: [
        {
          title: "American Truck Simulator",
          subtitle: "The Making of Texas Book",
          type: "AKTUALNOŚCI",
          time: "15 GODZ. TEMU",
          description:
            "Howdy, partners! Today, we're celebrating the release of Texas, our largest map DLC for American Truck Simulator.",
          imgUrl: "american_truck_simulator.jpg",
          likes: 24,
          comments: 6,
          link: "/news/american-truck-simulator", // Przykładowy link
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-4">
      <form className="w-full mx-auto ps-0 pb-4 relative">
        <label htmlFor="default-search" className="sr-only">
          Wyszukaj
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Czego szukasz"
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
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

      <div className="flex justify-start text-center">
        {/* Przycisk z rozwijaną listą */}
        <button
          onClick={toggleMenu}
          className="text-white w-64 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 flex items-center"
        >
          <Cog6ToothIcon className="w-6 h-6 mr-2" />
          Opcje i Filtry
        </button>
      </div>

      {/* Rozwijane menu pod przyciskiem */}
      {isMenuOpen && (
        <div className="relative w-64 bg-gray-800 rounded-lg shadow-lg mb-4 mt-2 p-4 pb-0">
          <p>Sortowanie</p>
          <ul className="text-white p-2">
            <li className="hover:bg-gray-700 cursor-pointer">A-Z</li>
            <li className="hover:bg-gray-700 cursor-pointer">Z-A</li>
            <li className="hover:bg-gray-700 cursor-pointer">Data</li>
            <li className="hover:bg-gray-700 cursor-pointer">Typ</li>
          </ul>
         {/* add checkbox */}
         <p>Filtry</p>
          <div className="mb-4 mt-2 p-2">
            <label className="block text-white">
              <input
                type="checkbox"
                name="news"
                className="mr-2"
              />
              Aktualności
            </label>
            <label className="block text-white">
              <input
                type="checkbox"
                name="konkursy"
                className="mr-2"
              />
              Konkursy
            </label>
          </div>
        </div>
      )}

      {/* News Articles Section */}
      {newsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mt-6">
          {/* Section Header */}
          <h2 className="text-xl font-semibold">{section.date}</h2>
          {/* News Articles */}
          <div className="space-y-4">
            {section.articles.map((article, articleIndex) => (
              <Link
                to={"#"} // Używamy dynamicznego linku
                key={articleIndex}
                className="hover:text-blue-300 transition duration-300 p-4"
              >
                <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 hover:shadow-xl hover:shadow transition duration-100">
                  <img
                    src={require(`../images/${article.imgUrl}`)} // dynamiczny import obrazu
                    alt={article.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{article.title}</h3>
                    <h4 className="text-sm text-blue-400">{article.subtitle}</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {article.type} · {article.time}
                    </p>
                    <p className="text-sm mt-2">{article.description}</p>
                  </div>
                  <div className="text-gray-400 flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <span>👍</span>
                      <span>{article.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>💬</span>
                      <span>{article.comments}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
