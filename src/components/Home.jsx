import React from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";

function Home() {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery",
    "Romance",
    "History",
    "Fantasy",
    "Adventure",
  ];

  return (
    <div className="px-6 py-10 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Welcome to People's Library
      </h1>
      <p className="text-gray-700 mb-10">
        Explore a world of knowledge — choose from a wide range of categories.
      </p>

      {/* ✅ Clickable Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {categories.map((category) => (
          <Link
            to={`/books/${category}`}
            key={category}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium py-3 rounded-lg shadow-sm cursor-pointer transition block"
          >
            {category}
          </Link>
        ))}
      </div>

      <BookList />
    </div>
  );
}

export default Home;
