import React from 'react';

function Market() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
      {/* Left Column - Item List */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">Community Market</h1>
        <div className="space-y-4">
          {/* Replace with dynamic items */}
          <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
            <img src="https://your-item-image.com/item1.jpg" alt="Item 1" className="w-16 h-16 object-cover rounded-md" />
            <div>
              <h3 className="font-semibold">Item Name 1</h3>
              <p className="text-sm">Price: $10.00</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
            <img src="https://your-item-image.com/item2.jpg" alt="Item 2" className="w-16 h-16 object-cover rounded-md" />
            <div>
              <h3 className="font-semibold">Item Name 2</h3>
              <p className="text-sm">Price: $15.00</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
            <img src="https://your-item-image.com/item3.jpg" alt="Item 3" className="w-16 h-16 object-cover rounded-md" />
            <div>
              <h3 className="font-semibold">Item Name 3</h3>
              <p className="text-sm">Price: $8.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Search Filters */}
      <div className="w-full md:w-1/3 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Search by Game Title</h2>
        <input
          type="text"
          placeholder="Search game titles"
          className="w-full p-2 mb-4 bg-gray-700 rounded-md text-white"
        />
        <ul className="space-y-2">
          {/* Replace with actual game titles */}
          <li className="hover:text-blue-400 cursor-pointer">Game Title 1</li>
          <li className="hover:text-blue-400 cursor-pointer">Game Title 2</li>
          <li className="hover:text-blue-400 cursor-pointer">Game Title 3</li>
          <li className="hover:text-blue-400 cursor-pointer">Game Title 4</li>
        </ul>
      </div>
    </div>
  );
}

export default Market;
