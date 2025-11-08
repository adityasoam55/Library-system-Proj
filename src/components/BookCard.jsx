import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/booksdetails/${book.id}`}>
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {book.title}
          </h2>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Author:</span> {book.author}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Category:</span> {book.category}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Published:</span> {book.published}
          </p>
          <p className="text-sm text-yellow-600 font-medium">
            ⭐ {book.rating} / 5
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
