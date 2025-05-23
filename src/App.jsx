import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import IdeaGenerator from "./pages/IdeaGenerator";
import { ThemeProvider } from "@/components/ThemeProvider";

import Footer from "@/components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dracula" storageKey="theme">
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/idea-generator" element={<IdeaGenerator />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
