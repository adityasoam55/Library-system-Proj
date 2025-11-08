// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-semibold">Library System</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200 transition">
          Home
        </Link>
        <Link to="/browse" className="hover:text-gray-200 transition">
          Browse Books
        </Link>
        <Link to="/add" className="hover:text-gray-200 transition">
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
