import React from "react";

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
          imgUrl: "industry-giant.jpg",
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
          imgUrl: "https://your-image-url.com/war-thunder.jpg",
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
          imgUrl: "https://your-image-url.com/american-truck.jpg",
          likes: 24,
          comments: 6,
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
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
                  src={article.imgUrl}
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
