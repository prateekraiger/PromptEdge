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
        <button className="flex items-center space-x-2 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
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
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
          <User className="w-4 h-4" />
          <span>Get Started</span>
        </button>
      </SignInButton>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <a
            href="/"
            className="flex items-center group transition-all duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Prompt<span className="text-purple-400">Edge</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3 py-1.5 text-sm text-gray-300 font-medium transition-all duration-300 hover:text-purple-400 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Auth Button */}
            <div className="ml-4">{renderAuthButton()}</div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-300" />
            ) : (
              <Menu className="h-5 w-5 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-300 font-medium rounded-lg hover:bg-white/5 hover:text-purple-400 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              {renderMobileAuthButton()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
