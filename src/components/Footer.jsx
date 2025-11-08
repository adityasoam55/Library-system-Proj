import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10 shadow-inner shadow-blue-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section */}
        <h2 className="text-lg font-semibold">📚 People's Library</h2>

        {/* Middle Section */}
        <p className="text-sm mt-2 md:mt-0">
          © {new Date().getFullYear()} People's Library. All rights reserved.
        </p>

        {/* Right Section */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
