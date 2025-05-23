import React, { useState, useEffect } from "react";
import {
  Lightbulb,
  Sparkles,
  Rocket,
  Copy,
  RefreshCw,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

import { generateProjectIdea } from "@/lib/aiService";

const skillLevels = ["Beginner", "Intermediate", "Advanced"];

const domainTechStacks = {
  // Web Development
  "Web Development": [
    "HTML & CSS",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
  ],
  "Full Stack Development": [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "PostgreSQL",
    "MongoDB",
  ],
  "Frontend Development": [
    "HTML & CSS",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "TypeScript",
    "Tailwind CSS",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "PostgreSQL",
    "MongoDB",
  ],
  // Mobile Development
  "Mobile App Development": [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Firebase",
  ],
  "Cross-platform Development": ["React Native", "Flutter", "Electron"],
  // AI/ML
  "AI/ML": ["Python", "TensorFlow", "PyTorch", "Jupyter"],
  // Other Domains
  "Game Development": ["Unity", "Unreal Engine", "Godot", "C#", "C++"],
  Blockchain: ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Truffle"],
  DevOps: ["Docker", "Kubernetes", "AWS", "Azure", "Jenkins", "GitHub Actions"],
  "Cloud Computing": ["AWS", "Azure", "Google Cloud", "Docker"],
};

const domains = [
  // Web Development
  "Web Development",
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  // Mobile Development
  "Mobile App Development",
  "Cross-platform Development",
  // AI/ML
  "AI/ML",
  // Other Domains
  "Game Development",
  "Blockchain",
  "DevOps",
  "Cloud Computing",
];

const IdeaGenerator = () => {
  const [skillLevel, setSkillLevel] = useState("");
  const [techStack, setTechStack] = useState("");
  const [domain, setDomain] = useState("");
  const [generatedIdea, setGeneratedIdea] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(null);

  // Reset tech stack when domain changes
  useEffect(() => {
    setTechStack("");
  }, [domain]);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleGenerateIdea = async () => {
    if (!skillLevel || !techStack || !domain) {
      setError("Please select skill level, preferred tech stack, and domain.");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const idea = await generateProjectIdea(skillLevel, techStack, domain);
      setGeneratedIdea(idea);
    } catch (error) {
      setError(
        error.message || "Failed to generate project idea. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (!generatedIdea) return;
    const ideaText = `
Project Title: ${generatedIdea.title}
Description: ${generatedIdea.description}
Key Features: ${generatedIdea.keyFeatures.join(", ")}
Suggested Tech Stack: ${generatedIdea.suggestedTechStack.join(", ")}
Estimated Difficulty: ${generatedIdea.estimatedDifficulty}
    `;
    navigator.clipboard
      .writeText(ideaText.trim())
      .then(() => {
        showToast("success", "Project idea copied to clipboard!");
      })
      .catch(() => {
        showToast("error", "Failed to copy to clipboard");
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
              AI Project Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get personalized project ideas based on your skill level,
              preferred tech stack, and domain
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <Sparkles className="h-6 w-6 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    Configuration
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Skill Level */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Skill Level
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {skillLevels.map((level) => (
                        <button
                          key={level}
                          onClick={() => setSkillLevel(level)}
                          className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium capitalize ${
                            skillLevel === level
                              ? "border-purple-500 bg-purple-500/20 text-white"
                              : "border-gray-700 hover:border-purple-500 text-gray-300 hover:bg-purple-500/10"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Domain */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Domain
                    </label>
                    <select
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full p-4 border-2 border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200 bg-gray-800/50 text-gray-200"
                    >
                      <option value="" className="bg-gray-800 text-gray-300">
                        Select domain
                      </option>
                      {domains.map((domain) => (
                        <option
                          key={domain}
                          value={domain}
                          className="bg-gray-800 text-gray-300"
                        >
                          {domain}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Preferred Tech Stack
                    </label>
                    <select
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      disabled={!domain}
                      className={`w-full p-4 border-2 border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200 bg-gray-800/50 text-gray-200 ${
                        !domain ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <option value="" className="bg-gray-800 text-gray-300">
                        {domain ? "Select tech stack" : "Select domain first"}
                      </option>
                      {domain &&
                        domainTechStacks[domain].map((tech) => (
                          <option
                            key={tech}
                            value={tech}
                            className="bg-gray-800 text-gray-300"
                          >
                            {tech}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Error Display */}
                  {error && (
                    <div className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                      <span className="text-red-300">{error}</span>
                    </div>
                  )}

                  {/* Generate Button */}
                  <button
                    onClick={handleGenerateIdea}
                    disabled={isLoading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="h-5 w-5 animate-spin" />
                        Generating Ideas...
                      </>
                    ) : (
                      <>
                        <Rocket className="h-5 w-5" />
                        Generate Project Idea
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Generated Idea Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <Lightbulb className="h-6 w-6 text-blue-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">
                      Your Project Idea
                    </h2>
                  </div>
                  {generatedIdea && (
                    <div className="flex gap-2">
                      <button
                        onClick={handleCopyToClipboard}
                        className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors duration-200"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-5 w-5" />
                      </button>
                      <button
                        onClick={handleGenerateIdea}
                        className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-200"
                        title="Regenerate"
                      >
                        <RefreshCw className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-400 text-lg">
                      Crafting your perfect project idea...
                    </p>
                  </div>
                ) : generatedIdea ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {generatedIdea.title}
                      </h3>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                        {generatedIdea.estimatedDifficulty}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {generatedIdea.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {generatedIdea.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Suggested Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {generatedIdea.suggestedTechStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="h-12 w-12 text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-lg">
                      Configure your preferences and generate your first project
                      idea!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div
            className={`flex items-center p-4 rounded-lg shadow-lg ${
              toast.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaGenerator;
