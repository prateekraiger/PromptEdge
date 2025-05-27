import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import logo from "../assets/logo.png";
import { useAuth, useUser, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Discover", href: "/discover" },
    { name: "Idea Generator", href: "/idea-generator" },
  ];

  const renderAuthButton = () => {
    if (isSignedIn) {
      return (
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-8 h-8 rounded-full",
              userButtonPopoverCard: "bg-gray-900 border border-white/10",
              userButtonPopoverActionButton:
                "text-gray-300 hover:text-white hover:bg-white/5",
              userButtonPopoverFooter: "border-t border-white/10",
            },
          }}
        />
      );
    }

    return (
      <SignInButton mode="modal">
        <button className="flex items-center space-x-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          <User className="w-4 h-4" />
          <span>Get Started</span>
        </button>
      </SignInButton>
    );
  };

  const renderMobileAuthButton = () => {
    if (isSignedIn) {
      return (
        <div className="flex justify-center mt-2">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-8 h-8 rounded-full",
                userButtonPopoverCard: "bg-gray-900 border border-white/10",
                userButtonPopoverActionButton:
                  "text-gray-300 hover:text-white hover:bg-white/5",
                userButtonPopoverFooter: "border-t border-white/10",
              },
            }}
          />
        </div>
      );
    }

    return (
      <SignInButton mode="modal">
        <button className="w-full flex items-center justify-center space-x-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          <User className="w-4 h-4" />
          <span>Get Started</span>
        </button>
      </SignInButton>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <a
            href="/"
            className="flex items-center group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center mr-2 sm:mr-3 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:rotate-[-12deg]">
              <img
                src={logo}
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain p-1"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-blue-500 transition-all duration-300">
              Prompt
              <span className="text-cyan-500 group-hover:text-blue-400 transition-colors duration-300">
                Edge
              </span>
            </span>
          </a>

          {/* Desktop Navigation & Auth Button Container */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm lg:text-base text-gray-300 font-medium transition-all duration-300 hover:text-white group focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-900 rounded-md"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-3/4"></span>
              </a>
            ))}
            {/* Auth Button */}
            <div className="ml-2 lg:ml-4">{renderAuthButton()}</div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-[500px] opacity-100 mt-3 pt-3 border-t border-white/10"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-base text-gray-300 font-medium rounded-lg hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-500/20 hover:text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-blue-600/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              {renderMobileAuthButton()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
