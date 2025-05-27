import React, { useState, useEffect } from "react";
import { Code, Users, BookOpen, Rocket, Heart, Star } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = [
    {
      phase: "Research",
      title: "Deep Learning Integration",
      description:
        "We analyzed thousands of successful projects and developer journeys to understand what makes ideas stick.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      phase: "Development",
      title: "AI Engine Creation",
      description:
        "Built sophisticated algorithms that understand context, skill levels, and market trends to generate relevant ideas.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      phase: "Launch",
      title: "Community Growth",
      description:
        "Launched with a focus on developer success, growing to serve thousands of creators worldwide.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full backdrop-blur-sm border border-blue-500/20">
              <span className="text-sm font-medium text-blue-300">
                Powering the next generation of developers
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent relative group">
                PromptEdge
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing how developers discover their next project.
              Using cutting-edge AI, we transform your skills and interests into{" "}
              <span className="text-blue-400 font-semibold relative inline-block">
                personalized coding adventures
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  height="2"
                  viewBox="0 0 200 2"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 1 L200 1"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section
        id="mission"
        className="py-20 bg-gradient-to-b from-gray-800/30 to-gray-900/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-red-500/20 rounded-full blur-md animate-pulse"></div>
                <Heart className="h-8 w-8 text-red-400 relative" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Mission
              </h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-purple-600/5 to-pink-600/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-pink-500/10 blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative">
                <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                  "To empower every developer with{" "}
                  <span className="text-purple-400 font-semibold">
                    intelligent project ideas
                  </span>{" "}
                  that accelerate learning, build portfolios, and spark
                  innovation in the global tech community."
                </p>

                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="h-4 w-4 text-purple-400" />
                    <span>Serving developers in over 120 countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
                <Star className="h-8 w-8 text-blue-400 relative" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Journey
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-8 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-medium text-blue-400">
                      {item.phase}
                    </span>
                    <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
