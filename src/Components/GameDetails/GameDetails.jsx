import React, { useEffect, useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { useParams } from 'react-router-dom';
import { loadGamesData } from '../../helperFunctions/loadGamesData';

const gamesData = [
  {
      "id": "1",
      "title": "Microsoft Flight Simulator 2024",
      "description": "Explore the world with the largest fleet of planes and take simulation to the next level.",
      "image": "flight_simulator_2024.jpg",
      "price": "59.99 zł",
      "oldPrice": "69.99 zł",
      "rating": "4.5",
      "category": ["Simulation"],
      "platforms": ["PC", "Xbox Series", "PlayStation 5"],
      "details": {
        "reviews": "Brak recenzji użytkowników",
        "releaseDate": "19 listopada 2024",
        "developer": "Asobo Studio",
        "publisher": "Xbox Game Studios"
      },
      "tags": ["Symulatory", "Latanie", "Realistyczne", "VR", "Familijne"],
      "features": [
        "Jednoosobowa",
        "Wieloplatformowa wieloosobowa",
        "Osiągnięcia Steam",
        "Zakupy w aplikacji",
        "Włączone HDR"
      ],
      "releaseInfo": {
        "date": "19 listopada 2024",
        "note": "Ta gra planuje odblokowanie za około 3 dni."
      },
      "breadcrumbs": [
        "Wszystkie gry",
        "Gatunek: Symulacje",
        "Seria Xbox Game Studios",
        "Microsoft Flight Simulator 2024"
      ],
      "thumbnails": [
        "flight_simulator_2024.jpg",
        "flight_simulator_2024.jpg",
        "flight_simulator_2024.jpg",
        "flight_simulator_2024.jpg",
        "flight_simulator_2024.jpg"
      ]
    },
    {
      "id": "2",
      "title": "War Thunder",
      "description": "Realistic combat simulation across air, land, and sea.",
      "image": "war_thunder.jpg",
      "price": "0.00 zł",
      "oldPrice": "20.00 zł",
      "rating": "4.0",
      "category": ["Simulation"],
      "platforms": ["PC", "Xbox Series", "PlayStation 5"],
      "details": {
        "reviews": "Brak recenzji użytkowników",
        "releaseDate": "18 listopada 2024",
        "developer": "Gaijin Entertainment",
        "publisher": "Gaijin Entertainment"
      },
      "tags": ["Symulatory", "Wojenne", "Realistyczne"],
      "features": [
        "Jednoosobowa",
        "Wieloplatformowa wieloosobowa",
        "Osiągnięcia Steam",
        "Zakupy w aplikacji",
        "Włączone HDR"
      ],
      "releaseInfo": {
        "date": "18 listopada 2024",
        "note": "Ta gra planuje odblokowanie za około 4 dni."
      },
      "breadcrumbs": [
        "Wszystkie gry",
        "Gatunek: Symulacje",
        "War Thunder"
      ],
      "thumbnails": [
        "war_thunder.jpg",
        "war_thunder.jpg",
        "war_thunder.jpg",
        "war_thunder.jpg",
        "war_thunder.jpg"
      ]
    },
    {
      "id": "3",
      "title": "American Truck Simulator",
      "description": "Experience legendary American trucks and deliver various cargoes across sunny California and beyond.",
      "image": "american_truck_simulator.jpg",
      "price": "19.99 zł",
      "oldPrice": "29.99 zł",
      "rating": "4.0",
      "category": ["Simulation"],
      "platforms": ["PC", "Xbox Series", "PlayStation 5"],
      "details": {
        "reviews": "Brak recenzji użytkowników",
        "releaseDate": "20 listopada 2024",
        "developer": "SCS Software",
        "publisher": "SCS Software"
      },
      "tags": ["Symulatory", "Truck", "Realistyczne"],
      "features": [
        "Jednoosobowa",
        "Wieloplatformowa wieloosobowa",
        "Osiągnięcia Steam",
        "Zakupy w aplikacji",
        "Włączone HDR"
      ],
      "releaseInfo": {
        "date": "20 listopada 2024",
        "note": "Ta gra planuje odblokowanie za około 2 dni."
      },
      "breadcrumbs": [
        "Wszystkie gry",
        "Gatunek: Symulacje",
        "American Truck Simulator"
      ],
      "thumbnails": [
        "american_truck_simulator.jpg",
        "american_truck_simulator.jpg",
        "american_truck_simulator.jpg",
        "american_truck_simulator.jpg",
        "american_truck_simulator.jpg"
      ]
    },
    {
      "id": "4",
      "title": "The Sims 4",
      "description": "Create unique Sims, build their homes, and explore vibrant worlds.",
      "image": "the_sims_4.png",
      "price": "129.99 zł",
      "oldPrice": "149.99 zł",
      "rating": "4.3",
      "category": ["Simulation", "Life Simulation"],
      "platforms": ["PC", "Xbox Series", "PlayStation 5"],
      "details": {
        "reviews": "Brak recenzji użytkowników",
        "releaseDate": "22 listopada 2024",
        "developer": "Maxis",
        "publisher": "EA Games"
      },
      "tags": ["Symulatory", "Życie", "Rodzina"],
      "features": [
        "Jednoosobowa",
        "Wieloplatformowa wieloosobowa",
        "Osiągnięcia Steam",
        "Zakupy w aplikacji",
        "Włączone HDR"
      ],
      "releaseInfo": {
        "date": "22 listopada 2024",
        "note": "Ta gra planuje odblokowanie za około 5 dni."
      },
      "breadcrumbs": [
        "Wszystkie gry",
        "Gatunek: Symulacje",
        "Life Simulation",
        "The Sims 4"
      ],
      "thumbnails": [
        "the_sims_4.png",
        "the_sims_4.png",
        "the_sims_4.png",
        "the_sims_4.png",
        "the_sims_4.png"
      ]
    },
    {
      "id": "5",
      "title": "Cities: Skylines",
      "description": "Build the city of your dreams and manage its economy and infrastructure.",
      "image": "cities_skylines.jpg",
      "price": "39.99 zł",
      "oldPrice": "49.99 zł",
      "rating": "4.7",
      "category": ["Simulation", "Strategy"],
      "platforms": ["PC"],
      "details": {
        "reviews": "Brak recenzji użytkowników",
        "releaseDate": "24 listopada 2024",
        "developer": "Colossal Order",
        "publisher": "Paradox Interactive"
      },
      "tags": ["Symulatory", "Strategia", "Miasta"],
      "features": [
        "Jednoosobowa",
        "Wieloplatformowa wieloosobowa",
        "Osiągnięcia Steam",
        "Zakupy w aplikacji",
        "Włączone HDR"
      ],
      "releaseInfo": {
        "date": "24 listopada 2024",
        "note": "Ta gra planuje odblokowanie za około 1 dzień."
      },
      "breadcrumbs": [
        "Wszystkie gry",
        "Gatunek: Symulacje",
        "Strategia",
        "Cities: Skylines"
      ],
      "thumbnails": [
        "cities_skylines.jpg",
        "cities_skylines.jpg",
        "cities_skylines.jpg",
        "cities_skylines.jpg",
        "cities_skylines.jpg"
      ]
    },
    {
      "id": "8",
      "title": "Planet Zoo",
      "description": "Build a world for wildlife in the ultimate zoo simulation.",
      "image": "planet_zoo.png",
      "price": "89.99 zł",
      "oldPrice": "99.99 zł",
      "rating": "4.6",
      "category": ["Simulation", "Strategy"],
      "platforms": ["PC"],
      "details": {
        "reviews": "Brak recenzji użytkowników",
        "releaseDate": "25 listopada 2024",
        "developer": "Frontier Developments",
        "publisher": "Frontier Developments"
      },
      "tags": ["Symulatory", "Strategia", "Zoologia"],
      "features": [
        "Jednoosobowa",
        "Wieloplatformowa wieloosobowa",
        "Osiągnięcia Steam",
        "Zakupy w aplikacji",
        "Włączone HDR"
      ],
      "releaseInfo": {
        "date": "25 listopada 2024",
        "note": "Ta gra planuje odblokowanie za około 6 dni."
      },
      "breadcrumbs": [
        "Wszystkie gry",
        "Gatunek: Symulacje",
        "Strategia",
        "Planet Zoo"
      ],
      "thumbnails": [
        "planet_zoo.png",
        "planet_zoo.png",
        "planet_zoo.png",
        "planet_zoo.png",
        "planet_zoo.png"
      ]
    }
];

function GameDetails() {
  const { id } = useParams(); // Extract the ID from the URL
  console.log("Initial GAME DATA: ", gamesData);
  console.log("ID: ", id);
  const numericId = String(id); // If `id` in `gamesData` is a string
  const game = gamesData.find((g) => g.id === numericId);
  const gameData = game || gamesData[0]; // If no game is found, use the first one


  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <form className="w-full mx-auto p-3 ps-0 pe-0 -mt-4">
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

      {/* Header Section */}
      <div className="text-sm text-gray-400 mb-2">
        {gameData.breadcrumbs?.map((crumb, index) => (
          <span key={index}>
            <span className="hover:underline cursor-pointer">{crumb}</span>
            {index < gameData.breadcrumbs.length - 1 && " > "}
          </span>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-6">{gameData.title}</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section: Image and Media */}
        <div className="flex-1">
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <img
              src={require(`../images/${gameData.image}`)}
              alt="Main Game"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex space-x-2 justify-between w-full">
            <ChevronLeftIcon className="w-8 h-8 text-gray-400 cursor-pointer mt-6" />
            {gameData.thumbnails?.map((thumbnail, index) => (
              <img
                key={index}
                src={require(`../images/${thumbnail}`)}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 rounded-lg object-cover cursor-pointer"
              />
            ))}
            <ChevronRightIcon className="w-8 h-8 text-gray-400 cursor-pointer mt-6 -ms-3" />
          </div>
        </div>

        {/* Right Section: Description */}
        <div className="flex-1">
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="flex flex-wrap gap-2">
              {gameData.categories?.map((cat, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded-lg cursor-pointer hover:bg-gray-600"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-3">{gameData.description}</h2>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <strong>Wszystkie recenzje:</strong> {gameData.details?.reviews}
              </li>
              <li>
                <strong>Data wydania:</strong> {gameData.details?.releaseDate}
              </li>
              <li>
                <strong>Producent:</strong> {gameData.details?.developer}
              </li>
              <li>
                <strong>Wydawca:</strong> {gameData.details?.publisher}
              </li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Popularne tagi dla tego produktu:</h3>
            <div className="flex flex-wrap gap-2">
              {gameData.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded-lg cursor-pointer hover:bg-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Purchase and Additional Info */}
      <div className="mt-6 space-y-4">
        <button className="w-full bg-blue-600 text-white text-xl font-semibold py-3 rounded-lg hover:bg-blue-700">
          <ShoppingCartIcon className="w-8 h-8 inline-block mr-2 font-semibold" /> {gameData.price}
        </button>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">
            Premiera: {gameData.releaseInfo?.date}
          </h4>
          <p className="text-gray-400 text-sm">{gameData.releaseInfo?.note}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-sm font-semibold mb-2">Cechy produktu:</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            {gameData.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
