import React from "react";
import { Brain, Target, Rocket, Globe, Shield, Zap } from "lucide-react";

const Features = () => {
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
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Private",
      description:
        "Your data is encrypted and protected. We never share your information with third parties",
      gradient: "from-indigo-500 to-blue-600",
      stats: "100% secure",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description:
        "Get project ideas instantly with our optimized AI engine and real-time processing",
      gradient: "from-yellow-500 to-orange-600",
      stats: "< 1s response",
    },
  ];

  return (
    <div className="min-h-screen text-white pt-32 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full backdrop-blur-sm border border-blue-500/20">
            <span className="text-sm font-medium text-blue-300">
              Powerful Features
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Discover What Makes
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              PromptEdge Special
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the power of AI-driven project generation with our
            cutting-edge features designed to accelerate your development
            journey.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-500"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="font-medium text-blue-400">
                    {feature.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
