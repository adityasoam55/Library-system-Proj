import React, { useState } from "react";
import { booksData } from "../utils";
import BookCard from "../components/BookCard";

const BrowseBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = booksData.filter((book) => {
    const query = searchQuery.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  });

  return (
    <div className="px-6 py-10 mt-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Browse All Books
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Discover new titles, explore genres, and find your next favorite read.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
