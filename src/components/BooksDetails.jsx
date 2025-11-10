import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.list);
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-2xl font-semibold text-gray-600">
          Book not found.
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-16 px-6 animate-fadeIn">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header / Back Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-blue-600 text-white">
          <h1 className="text-2xl font-semibold">{book.title}</h1>
          <Link
            to="/browse-books"
            className="flex items-center gap-2 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          >
            <ArrowLeft size={18} /> Back
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-8">
          {/* Book Image */}
          <div className="shrink-0">
            <img
              src={book.image}
              alt={book.title}
              className="w-64 h-80 object-cover rounded-lg shadow-md border-4 border-blue-100 hover:border-blue-300 transition"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          {/* Book Info */}
          <div className="text-left space-y-3 max-w-xl">
            <h2 className="text-3xl font-bold text-blue-700">{book.title}</h2>
            <p className="text-gray-700">
              <span className="font-medium">Author:</span> {book.author}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Category:</span> {book.category}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Published:</span> {book.published}
            </p>

            <p className="text-yellow-600 font-semibold">
              ⭐ {book.rating} / 5
            </p>

            <p className="text-gray-600 leading-relaxed">
              {book.short_description || "No description available."}
            </p>

            <p className="text-gray-800 font-semibold">
              Copies Sold:{" "}
              <span className="text-blue-600">{book.copies_sold}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
