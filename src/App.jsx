import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import IdeaGenerator from "./pages/IdeaGenerator";
import DiscoverProj from "./pages/DiscoverProj";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/idea-generator" element={<IdeaGenerator />} />
            <Route path="/discover" element={<DiscoverProj />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
