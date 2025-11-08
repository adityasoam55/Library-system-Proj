import React from "react";
import BookList from "./BookList";

function Home() {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery",
    "Romance",
    "History",
    "Fantasy",
    "Biography",
  ];

  return (
    <div className="px-6 py-10 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Welcome to People's Library
      </h1>
      <p className="text-gray-700 mb-10">
        Explore a world of knowledge — choose from a wide range of categories.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-4 rounded-xl shadow-sm cursor-pointer transition"
          >
            {category}
          </div>
        ))}
      </div>
      <BookList />
    </div>
  );
}

export default Home;
