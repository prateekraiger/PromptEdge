import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import IdeaGenerator from "./pages/IdeaGenerator";
import DiscoverProjects from "./pages/DiscoverProjects";

const AppContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-background"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "6rem 4rem",
          opacity: "var(--grid-opacity)",
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/idea-generator" element={<IdeaGenerator />} />
        <Route path="/discover" element={<DiscoverProjects />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
