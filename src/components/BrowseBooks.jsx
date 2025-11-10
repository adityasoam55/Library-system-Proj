import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { Search } from "lucide-react";

const BrowseBooks = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const books = useSelector((state) => state.books.list);

  // Filter by category if present
  let filteredBooks = books;
  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Further filter by search
  filteredBooks = filteredBooks.filter((book) => {
    const query = searchQuery.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  });

  return (
    <div className="px-6 py-16 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-3">
          {category ? `${category} Books` : "Browse All Books"}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {category
            ? `Explore the best ${category} titles in our library.`
            : "Discover new titles, explore genres, and find your next favorite read."}
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
          animate-fadeIn"
        >
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg mb-4">
            No books found matching your search.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;
