import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/browse-books", label: "Browse Books" },
    { path: "/add", label: "Add Book" },
  ];

  return (
    <nav className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 flex justify-between items-center fixed w-full top-0 z-20 shadow-lg">
      {/* Brand Logo & Name */}
      <Link to="/" className="flex items-center gap-2 font-bold text-xl">
        <BookOpen className="w-6 h-6 text-white" />
        <span>People's Library</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex space-x-6">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`transition-all duration-200 ${
              location.pathname === path
                ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                : "hover:text-yellow-200"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Animated Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-linear-to-r from-blue-600 to-indigo-600 flex flex-col items-center py-5 space-y-3 sm:hidden shadow-md"
          >
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`text-lg ${
                  location.pathname === path
                    ? "text-yellow-300 font-semibold"
                    : "hover:text-yellow-200"
                } transition-all duration-200`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
