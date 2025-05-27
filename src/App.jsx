import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBg from "./components/AnimatedBg";
import Home from "./pages/Home";
import About from "./pages/About";
import IdeaGenerator from "./pages/IdeaGenerator";
import DiscoverProj from "./pages/DiscoverProj";
import Features from "./pages/Features";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader size={80} color="#4f46e5" speed={2} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-base-100 relative overflow-hidden">
        <AnimatedBg />
        <Navbar />
        <main className="pt-16 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
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
