import React, { useState, useEffect } from "react";
import {
  Code,
  Users,
  Lightbulb,
  Zap,
  BookOpen,
  Github,
  Brain,
  Sparkles,
  Rocket,
  Target,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Heart,
  Coffee,
  Star,
} from "lucide-react";

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Neural Project Generation",
      description:
        "Advanced AI algorithms analyze millions of successful projects to create personalized ideas",
      gradient: "from-purple-500 to-violet-600",
      stats: "99.2% accuracy",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Smart Skill Matching",
      description:
        "Intelligent assessment of your abilities to suggest projects that challenge and grow your skills",
      gradient: "from-blue-500 to-cyan-600",
      stats: "15+ skill levels",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Trending Tech Stack",
      description:
        "Stay ahead with projects featuring the latest frameworks, tools, and industry best practices",
      gradient: "from-green-500 to-emerald-600",
      stats: "200+ technologies",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Domain Coverage",
      description:
        "From web apps to AI/ML, mobile development to DevOps - explore every corner of tech",
      gradient: "from-orange-500 to-red-600",
      stats: "12 major domains",
    },
  ];

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      number: "50,000+",
      label: "Active Developers",
      desc: "Building amazing projects",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      number: "1M+",
      label: "Ideas Generated",
      desc: "Unique project concepts created",
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "85%",
      label: "Success Rate",
      desc: "Projects completed successfully",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      number: "300%",
      label: "Skill Growth",
      desc: "Average improvement in capabilities",
    },
  ];

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
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full backdrop-blur-sm border border-purple-500/20">
              <span className="text-sm font-medium text-purple-300">
                Powering the next generation of developers
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent relative group">
                PromptEdge
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing how developers discover their next project.
              Using cutting-edge AI, we transform your skills and interests into{" "}
              <span className="text-purple-400 font-semibold relative inline-block">
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
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              .
            </p>

            <div className="flex justify-center space-x-4 mt-12">
              <a
                href="#mission"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10 hover:border-purple-500/50 group"
              >
                <Heart className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>Our Mission</span>
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10 hover:border-purple-500/50 group"
              >
                <Zap className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Features</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div
        id="mission"
        className="relative z-10 py-20 bg-gradient-to-b from-transparent to-gray-800/30"
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
      </div>

      {/* Features Grid */}
      <div
        id="features"
        className="relative z-10 py-32 bg-gradient-to-b from-gray-800/30 to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full backdrop-blur-sm border border-purple-500/20">
              <span className="text-sm font-medium text-cyan-300">
                Powered by advanced AI technology
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Intelligent Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every feature is designed with AI-first thinking to maximize your
              development potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="animate-pulse-slow">{feature.icon}</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      <span className="text-sm font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full group-hover:bg-purple-500/30 transition-colors duration-300">
                        {feature.stats}
                      </span>
                    </div>

                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Philosophy */}
      <div className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden group hover:bg-white/5 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Coffee className="h-12 w-12 text-white animate-pulse-slow" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Built by Developers, for Developers
              </h2>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                Our team of passionate developers created PromptEdge after
                experiencing firsthand the challenge of finding meaningful
                projects. We believe that the right project can transform a
                coding journey.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-10">
                <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/20 transition-colors duration-300">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  <span>Remote-First Team</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/20 transition-colors duration-300">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span>Open Source Contributors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 py-32 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Ready to Transform Your Coding Journey?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Join thousands of developers who've accelerated their growth
                with AI-powered project ideas
              </p>
              <button
                onClick={() => (window.location.href = "/idea-generator")}
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center gap-4">
                  <Brain className="h-6 w-6 group-hover:animate-pulse-slow transition-transform duration-300" />
                  <span>Start Generating Ideas</span>
                  <Sparkles className="h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
