import React, { useState, useEffect } from "react";
import {
  Code,
  Brain,
  Sparkles,
  ArrowRight,
  Cpu,
  Zap,
  Target,
} from "lucide-react";
import AnimatedBg from "../components/AnimatedBg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <AnimatedBg />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div
            className={`max-w-6xl mx-auto text-center transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main Headline */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">
                  AI-Powered Project Generator
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Build Smarter
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                  Projects with AI
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Instantly generate project ideas tailored to your tech stack,
                skill level, and goals — all powered by advanced AI.
                <br />
                <span className="text-blue-400 font-semibold">
                  Build your dream portfolio. Learn faster. Create more.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => (window.location.href = "/generator")}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center gap-3">
                  <Brain className="h-6 w-6 text-white transition-colors duration-300 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg font-bold">Generate Ideas Now</span>
                  <ArrowRight className="h-5 w-5 text-white transition-colors duration-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                onClick={() => (window.location.href = "/discover")}
                className="group relative bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-600 hover:to-cyan-600 border border-blue-500/30 hover:border-blue-400/50 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/15"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative flex items-center gap-3">
                  <Code className="h-6 w-6 text-white transition-colors duration-300 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg font-bold">Discover Projects</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* AI-Powered Generation */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="h-12 w-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    AI-Powered Generation
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our advanced AI analyzes your preferences to create
                    perfectly tailored project ideas.
                  </p>
                </div>
              </div>

              {/* Instant Results */}
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Instant Results
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Get multiple project ideas instantly, complete with tech
                    stack recommendations.
                  </p>
                </div>
              </div>

              {/* Skill-Based Matching */}
              <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-green-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-12 w-12 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Skill-Based Matching
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Projects are matched to your skill level, ensuring the
                    perfect learning curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
