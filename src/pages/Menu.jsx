import React, { useState } from "react";
import { foods } from "../data/foods";

function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);

  const filteredFoods = foods
    .filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((food) =>
      filterCategory
        ? food.category.localeCompare(filterCategory, undefined, {
            sensitivity: "base",
          }) === 0
        : true
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-yellow-100 p-0  mt-0 pt-0 sm:px-6 lg:px-0">
      <img
        className="mb-6 mx-0 px-0 w-full h-56 object-cover"
        src="src/assets/menu-banner.png"
        alt="Meniu banner"
      />

      <div className="py-12 px-8">
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Caută un desert..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-10 border rounded-md shadow-sm placeholder-slate-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-500 pointer-events-none">
              🔍
            </span>
          </div>

          <div className="flex gap-4">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="p-2 border rounded-md bg-orange-600 text-white font-semibold border-none"
            >
              <option value="">Toate categoriile</option>
              <option value="Tarte cu fructe">Tarte cu fructe</option>
              <option value="Torturi">Torturi</option>
              <option value="Brioșe">Brioșe</option>
              <option value="Negrese">Negrese</option>
              <option value="Crème Brûlée">Crème Brûlée</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-2 border rounded-md bg-orange-600 text-white font-semibold border-none"
            >
              <option value="">Sortează după preț</option>
              <option value="asc">Preț crescător</option>
              <option value="desc">Preț descrescător</option>
            </select>
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="flex border rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-white"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-1/2 h-48 object-cover"
              />
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold">{food.name}</h2>
                    <p className="text-orange-600 font-bold">
                      {food.price} RON
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 italic mb-2">
                    {food.category}
                  </p>
                  <p className="text-sm">
                    {food.description.slice(0, 60)}...
                    <button
                      onClick={() => setSelectedFood(food)}
                      className="text-orange-600 ml-1 underline"
                    >
                      Vezi mai mult...
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedFood && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
            <div className="bg-white p-4 sm:p-6 rounded-md w-full max-w-4xl relative flex flex-col md:flex-row gap-4 sm:gap-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedFood(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black z-10 bg-white/80 rounded-full p-1"
              >
                ✕
              </button>

              {/* Left side - image */}
              <img
                src={selectedFood.image}
                alt={selectedFood.name}
                className="w-full md:w-1/2 h-64 md:h-84 object-cover rounded-md"
              />

              {/* Right side - content */}
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedFood.name}
                  </h2>
                  <p className="text-sm text-gray-600 italic mb-1">
                    {selectedFood.category}
                  </p>
                  <p className="mb-4">{selectedFood.description}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-orange-600 mb-4">
                    Preț: {selectedFood.price} RON
                  </p>
                  <button className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700">
                    Adaugă la coșul de cumpărături
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
