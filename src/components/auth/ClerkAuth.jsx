import React from "react";
import { User } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const ClerkAuth = () => {
  return (
    <div className="ml-6">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            <User className="w-5 h-5" />
            <span>Get Started</span>
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-10 h-10 rounded-full",
              userButtonPopoverCard: "bg-white border border-gray-200",
              userButtonPopoverActionButton:
                "text-black hover:text-gray-800 hover:bg-gray-100",
              userButtonPopoverFooter: "border-t border-gray-200",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default ClerkAuth;
