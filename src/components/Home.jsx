import React from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";

function Home() {
  const categories = [
    "Fiction",
    "Thriller",
    "Sci-Fi",
    "Mystery",
    "Romance",
    "History",
    "Fantasy",
    "Adventure",
  ];

  return (
    <div className="px-6 py-16 text-center">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 tracking-tight">
          Welcome to <span className="text-indigo-700">People's Library</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Discover, explore, and expand your imagination — dive into books
          across every genre.
        </p>
      </div>

      {/* Category Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={`/books/${category}`}
              key={category}
              className="bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 p-6 flex items-center justify-center text-blue-800 text-sm font-medium transition-transform transform hover:-translate-y-1"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="mt-4">
        <BookList />
      </div>
    </div>
  );
}

export default Home;
