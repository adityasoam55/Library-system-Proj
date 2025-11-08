import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ icon library (lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md fixed w-full top-0 z-10 shadow-blue-300">
      {/* Left spacer for centering title */}
      <div className="w-6 sm:hidden" />

      {/* Centered Title */}
      <h1 className="text-xl font-semibold max-md:text-center flex-1">
        People's Library
      </h1>

      {/* Desktop Links */}
      <div className="hidden sm:flex space-x-6">
        <Link to="/" className="hover:text-gray-200 transition">
          Home
        </Link>
        <Link to="/browse-books" className="hover:text-gray-200 transition">
          Browse Books
        </Link>
        <Link to="/add" className="hover:text-gray-200 transition">
          Add Book
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-600 flex flex-col items-center py-4 space-y-3 sm:hidden shadow-md">
          <Link
            to="/"
            className="hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/browse-books"
            className="hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Browse Books
          </Link>
          <Link
            to="/add"
            className="hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Add Book
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
