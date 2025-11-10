import React from "react";
import { Link, useParams } from "react-router-dom";
import { booksData } from "../utils"; // adjust path if needed

function BookDetails() {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-semibold text-gray-600">Book not found.</h2>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/browse-books"
        className="text-blue-700 absolute left-6 hover:underline"
      >
        Back to Browse
      </Link>
      <div className="px-6 py-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Book Image */}
        <img
          src={book.image}
          alt={book.title}
          className="w-64 h-80 object-cover rounded-lg shadow-lg"
        />

        {/* Book Info */}
        <div className="max-w-xl text-left">
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            {book.title}
          </h1>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Author:</span> {book.author}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Category:</span> {book.category}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Published:</span> {book.published}
          </p>
          <p className="text-yellow-600 font-medium mb-4">
            ⭐ {book.rating} / 5
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {book.short_description}
          </p>

          <p className="text-gray-800 font-semibold">
            Copies Sold:{" "}
            <span className="text-blue-600">{book.copies_sold}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
