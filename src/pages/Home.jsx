import React, { useState, useEffect } from "react";
import {
  Code,
  Brain,
  Sparkles,
  ArrowRight,
  Cpu,
  Zap,
  Target,
  Star,
  ChevronDown,
  Rocket,
  Play,
} from "lucide-react";
import AnimatedBg from "../components/AnimatedBg";
import HeroVideoDialog from "../components/HeroVideoDialog";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <AnimatedBg />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS02IDBoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDBIMzZ2Mmgtc3YtMnptMC00aDJ2MmgtMnYtMnptMiAwaDJ2MmgtMnYtMnptMi00aDJ2MmgtMnYtMnptLTQgMGgydjJoLTJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTRoMnYyaC0ydi0yem0yIDBIMzZ2Mmgtc3YtMnptLTQgMGgydjJoLTJ2LTJ6bS0yIDBIMzB2Mmgtc3YtMnptLTQgNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS0yIDRoMnYyaC0ydi0yem0yIDBIMzZ2Mmgtc3YtMnptLTQgMGgydjJoLTJ2LTJ6bS0yIDBIMzB2Mmgtc3YtMnptLTIgMGgydjJoLTJ2LTJ6bS00IDBoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80"></div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div
            className={`max-w-6xl mx-auto text-center transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main Headline */}
            <div className="mb-16 text-center">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-gradient">
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

              {/* Video Showcase */}
              <div className="mt-8 mb-16 max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-500/20 border border-blue-500/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/30">
                  <div className="relative pt-[56.25%] w-full bg-gray-900">
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dk3pg4zly/video/upload/v1748456663/cursorful-video-1748456489610_q2ti3l.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => (window.location.href = "/idea-generator")}
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
                className="group relative bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-white transition-colors duration-300 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg font-bold">Discover Projects</span>
                  <ArrowRight className="h-5 w-5 text-white transition-colors duration-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <HeroVideoDialog
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://res.cloudinary.com/dk3pg4zly/video/upload/v1748456663/cursorful-video-1748456489610_q2ti3l.mp4"
      />

      {/* Features Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose Our Platform
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the power of AI-driven project generation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* AI-Powered Generation */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
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
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
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
              <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
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

      {/* How It Works Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-gray-900/50 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get started in just a few simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-blue-400">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Enter Your Skills
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Tell us about your technical expertise and experience level
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-purple-400">
                      2
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Set Preferences
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Choose your preferred tech stack and project complexity
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-green-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-green-400">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Generate Ideas
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Let our AI create personalized project suggestions
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-yellow-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-yellow-400">
                      4
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Start Building
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Begin your project with detailed guidelines and resources
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
