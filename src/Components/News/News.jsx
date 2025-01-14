import React from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const News = () => {
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
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <form className="w-full mx-auto ps-0 pb-4">
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

      <div className="flex justify-start mb-4 text-center ">
      <button className="text-white w-64 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 flex items-center">
    <Cog6ToothIcon className="w-6 h-6 mr-2" />
    Opcje i Filtry
  </button>
</div>


      {newsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          {/* Section Header */}
          <h2 className="text-xl font-semibold mb-4">{section.date}</h2>
          {/* News Articles */}
          <div className="space-y-4">
            {section.articles.map((article, articleIndex) => (
              <div
                key={articleIndex}
                className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
              >
                {/* Article Image */}
                <img
                  src={require(`../images/${article.imgUrl}`)} // fixed dynamic image import
                  alt={article.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                {/* Article Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{article.title}</h3>
                  <h4 className="text-sm text-blue-400">{article.subtitle}</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {article.type} · {article.time}
                  </p>
                  <p className="text-sm mt-2">{article.description}</p>
                </div>
                {/* Article Stats */}
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
