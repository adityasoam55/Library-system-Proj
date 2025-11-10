import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { booksData } from "../utils";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";

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
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        {category ? `${category} Books` : "Browse All Books"}
      </h1>

      <p className="text-gray-600 text-center mb-8">
        {category
          ? `Explore the best ${category} titles in our library.`
          : "Discover new titles, explore genres, and find your next favorite read."}
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No books found matching your search.
        </p>
      )}
    </div>
  );
};

export default BrowseBooks;
