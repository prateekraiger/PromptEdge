import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Coffee, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center w-full">
          {/* Logo and Brand */}
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="PromptEdge Logo" className="h-8 w-auto mr-2" />
            <span className="hidden sm:inline">
              Prompt<span className="text-primary">Edge</span>
              <Coffee className="ml-2 h-4 w-4 text-primary inline" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/" className="btn btn-ghost text-base-content">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/idea-generator"
                  className="btn btn-ghost text-base-content"
                >
                  Idea Generator
                </Link>
              </li>
            </ul>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto bg-base-200 text-base-content"
              />
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost btn-circle"
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-base-content" />
              ) : (
                <Menu className="h-5 w-5 text-base-content" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 p-4 bg-base-200 rounded-lg shadow-lg">
            <ul className="menu menu-vertical gap-2">
              <li>
                <Link
                  to="/"
                  className="text-base-content hover:bg-base-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/idea-generator"
                  className="text-base-content hover:bg-base-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Idea Generator
                </Link>
              </li>
              <li className="mt-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-full bg-base-100 text-base-content"
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
