import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-600/70 to-indigo-600/70 backdrop-blur-md text-white border-t border-white/10 shadow-[0_-2px_10px_rgba(255,255,255,0.1)] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section */}
        <h2 className="text-lg font-semibold flex items-center gap-2">
          📚 <span>People's Library</span>
        </h2>

        {/* Middle Section */}
        <p className="text-sm mt-3 md:mt-0 text-gray-200">
          © {new Date().getFullYear()} People's Library. All rights reserved.
        </p>

        {/* Right Section - Social Links */}
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a
            href="#"
            className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
