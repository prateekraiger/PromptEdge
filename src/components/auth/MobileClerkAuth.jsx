import React from "react";
import { User } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const MobileClerkAuth = () => {
  return (
    <div className="pt-4 border-t border-white/10">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            <User className="w-5 h-5" />
            <span>Get Started</span>
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-center mt-3">
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
        </div>
      </SignedIn>
    </div>
  );
};

export default MobileClerkAuth;
