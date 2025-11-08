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
    <div className="px-6 py-10 text-center mt-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Welcome to People's Library
      </h1>
      <p className="text-gray-700 mb-8">
        Explore a world of knowledge — choose from a wide range of categories.
      </p>

      {/* Smaller Category Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-3xl mx-auto mb-10">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-blue-50 hover:bg-blue-200 text-blue-700 font-medium py-2 px-3 rounded-lg shadow-sm cursor-pointer text-sm transition"
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
