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
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

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
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                PromptEdge
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing how developers discover their next project.
              Using cutting-edge AI, we transform your skills and interests into{" "}
              <span className="text-purple-400 font-semibold">
                personalized coding adventures
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-transparent to-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-red-400" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Mission
              </h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500">
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                "To empower every developer with{" "}
                <span className="text-purple-400 font-semibold">
                  intelligent project ideas
                </span>
                that accelerate learning, build portfolios, and spark innovation
                in the global tech community."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 py-32 bg-gradient-to-b from-gray-800/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
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
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      <span className="text-sm font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
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
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 rounded-full">
                <Coffee className="h-12 w-12 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built by Developers, for Developers
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              We understand the struggle of finding the perfect next project.
              That's why we've poured our hearts into creating an AI that truly
              gets what developers need -{" "}
              <span className="text-purple-400 font-semibold">
                challenging, relevant, and exciting project ideas
              </span>{" "}
              that push you forward.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Ready to Transform Your Coding Journey?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who've accelerated their growth with
            AI-powered project ideas
          </p>
          <button
            onClick={() => (window.location.href = "/idea-generator")}
            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <Brain className="h-6 w-6" />
            <span>Start Generating Ideas</span>
            <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
