import { useState } from "react";
import logPic from "../assets/log.png";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed w-full top-0 left-0 z-50
      bg-white/70 dark:bg-gray-900/80
      backdrop-blur-md
      border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logPic}
              alt="Mohsin Ali Logo"
              className="h-10 w-auto object-contain rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link
              to="/"
              className="hover:text-indigo-600 dark:hover:text-emerald-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-indigo-600 dark:hover:text-emerald-400 transition"
            >
              About
            </Link>

            <Link
              to="/projects"
              className="hover:text-indigo-600 dark:hover:text-emerald-400 transition"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="hover:text-indigo-600 dark:hover:text-emerald-400 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col text-center py-6 space-y-4 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
