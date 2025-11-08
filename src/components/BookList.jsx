import React from "react";
import BookCard from "./BookCard";
import { booksData } from "../utils";

function BookList() {
  const booksdata = booksData.filter((book) => book.rating >= 4.5);

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-8">
        Most Popular
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksdata.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
