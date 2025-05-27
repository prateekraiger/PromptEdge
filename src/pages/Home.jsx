import React, { useState, useEffect } from "react";
import {
  Code,
  Users,
  Lightbulb,
  Zap,
  BookOpen,
  Github,
  ArrowRight,
  Brain,
  Sparkles,
  Rocket,
  Stars,
  ChevronDown,
  Play,
} from "lucide-react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Ideas",
      description:
        "Smart algorithms generate unique project concepts tailored to you",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Generation",
      description: "Get dozens of ideas in seconds with our lightning-fast AI",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Skill Adaptive",
      description: "Projects that grow with your expertise and challenge you",
      gradient: "from-blue-700 to-cyan-700",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Trending Tech",
      description: "Stay ahead with projects using the latest technologies",
      gradient: "from-blue-800 to-cyan-800",
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
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
                className="group relative bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-600 hover:to-cyan-600 border border-blue-500/30 hover:border-blue-400/50 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/15"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative flex items-center gap-3">
                  <Code className="h-6 w-6 text-white transition-colors duration-300 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg font-bold">Discover Projects</span>
                </div>
              </button>
            </div>

            {/* Scroll Indicator with improved styling */}
            <div className="animate-bounce bg-white/5 backdrop-blur-sm rounded-full p-2 w-12 h-12 flex items-center justify-center mx-auto border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <ChevronDown className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-32 bg-gradient-to-b from-transparent to-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Powerful Capabilities
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Supercharged Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to generate, explore, and build amazing
              projects with AI-powered assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-white/20"
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-700"></div>

                <div className="relative">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="relative z-10 py-32 bg-gradient-to-b from-gray-800/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Play className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Simple Process
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Three Steps to Genius
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined process makes it easy to go from idea to
              implementation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line with animation */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 transform -translate-y-1/2 hidden lg:block rounded-full overflow-hidden">
                <div className="absolute inset-0 w-1/2 bg-white/30 blur-sm animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>

              <div className="grid lg:grid-cols-3 gap-16 relative">
                {[
                  {
                    step: "01",
                    title: "Tell Us Your Vibe",
                    desc: "Share your skills, interests, and the tech you love",
                  },
                  {
                    step: "02",
                    title: "AI Works Magic",
                    desc: "Our neural networks craft perfect project ideas for you",
                  },
                  {
                    step: "03",
                    title: "Start Building",
                    desc: "Get detailed specs, resources, and start coding immediately",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center group relative">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-600/20">
                        {item.step}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 py-32 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Join thousands of developers who've accelerated their coding
                journey with AI-powered project ideas
              </p>
              <button
                onClick={() => (window.location.href = "/idea-generator")}
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center gap-4">
                  <Stars className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Start Creating Now</span>
                  <ArrowRight className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
