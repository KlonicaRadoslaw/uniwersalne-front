import React, { useEffect, useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

//TODO dynamically loading data of game

// Stałe z danymi gry
const gameData = {
  title: "Microsoft Flight Simulator 2024",
  breadcrumbs: [
    "Wszystkie gry",
    "Gatunek: Symulacje",
    "Seria Xbox Game Studios",
    "Microsoft Flight Simulator 2024",
  ],
  categories: ["Symulacje", "Latanie", "Realistyczne", "VR", "Familijne"],
  mainImage: "flight_simulator_2024.jpg",
  thumbnails: [
    "flight_simulator_2024.jpg",
    "flight_simulator_2024.jpg",
    "flight_simulator_2024.jpg",
    "flight_simulator_2024.jpg",
    "flight_simulator_2024.jpg",
  ],
  description:
    "Eksploruj świat z największą flotą samolotów i przenieś symulację na nowy poziom. Rozwijaj swoją karierę lotniczą w Microsoft Flight Simulator 2024.",
  details: {
    reviews: "Brak recenzji użytkowników",
    releaseDate: "19 listopada 2024",
    developer: "Asobo Studio",
    publisher: "Xbox Game Studios",
  },
  tags: ["Symulatory", "Latanie", "Realistyczne", "VR", "Familijne"],
  price: "309,00 zł",
  features: [
    "Jednoosobowa",
    "Wieloplatformowa wieloosobowa",
    "Osiągnięcia Steam",
    "Zakupy w aplikacji",
    "Włączone HDR",
  ],
  releaseInfo: {
    date: "19 listopada 2024",
    note: "Ta gra planuje odblokowanie za około 3 dni.",
  },
};

function GameDetails() {
  

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      {/* Header Section */}
      <div className="text-sm text-gray-400 mb-2">
        {gameData.breadcrumbs.map((crumb, index) => (
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
              src={require(`../images/${gameData.mainImage}`)}
              alt="Main Game"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex space-x-2 justify-between w-full">
            <ChevronLeftIcon className="w-8 h-8 text-gray-400 cursor-pointer mt-6" />
  {gameData.thumbnails.map((thumbnail, index) => (
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
              {gameData.categories.map((cat, index) => (
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
                <strong>Wszystkie recenzje:</strong> {gameData.details.reviews}
              </li>
              <li>
                <strong>Data wydania:</strong> {gameData.details.releaseDate}
              </li>
              <li>
                <strong>Producent:</strong> {gameData.details.developer}
              </li>
              <li>
                <strong>Wydawca:</strong> {gameData.details.publisher}
              </li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Popularne tagi dla tego produktu:</h3>
            <div className="flex flex-wrap gap-2">
              {gameData.tags.map((tag, index) => (
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
            Premiera: {gameData.releaseInfo.date}
          </h4>
          <p className="text-gray-400 text-sm">{gameData.releaseInfo.note}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-sm font-semibold mb-2">Cechy produktu:</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            {gameData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
