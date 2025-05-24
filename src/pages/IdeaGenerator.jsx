import React, { useState, useEffect } from "react";
import Orb from "../components/orb"; // Adjusted path to components folder
import {
  Lightbulb,
  Sparkles,
  Rocket,
  Copy,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Share2,
} from "lucide-react"; // Added Lightbulb back and Share2 icon

import { generateProjectIdea } from "../lib/aiService";

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

  const handleShare = async () => {
    if (!generatedIdea) return;
    const ideaText = `
Project Title: ${generatedIdea.title}
Description: ${generatedIdea.description}
Key Features: ${generatedIdea.keyFeatures.join(", ")}
Suggested Tech Stack: ${generatedIdea.suggestedTechStack.join(", ")}
Estimated Difficulty: ${generatedIdea.estimatedDifficulty}
    `;

    try {
      if (navigator.share) {
        await navigator.share({
          title: generatedIdea.title,
          text: ideaText.trim(),
        });
        showToast("success", "Project idea shared successfully!");
      } else {
        // Fallback to copying to clipboard if Web Share API is not available
        await navigator.clipboard.writeText(ideaText.trim());
        showToast("success", "Project idea copied to clipboard!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        showToast("error", "Failed to share project idea");
      }
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
              AI Project Generator
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get personalized project ideas based on your skill level,
              preferred tech stack, and domain
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-full sm:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 self-start relative">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Configuration
                  </h2>

                  <div className="space-y-6">
                    {/* Skill Level */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        Skill Level
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
                        {skillLevels.map((level) => (
                          <button
                            key={level}
                            className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 shadow-md border-2 focus:outline-none focus:ring-2 focus:ring-purple-400
                              ${
                                skillLevel === level
                                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-purple-500 scale-105"
                                  : "bg-white/10 text-white border-white/20 hover:bg-purple-500/30 hover:text-white"
                              }
                            `}
                            onClick={() => setSkillLevel(level)}
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
              </div>

              {/* Generated Idea Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Your Project Idea
                  </h2>
                  {generatedIdea && (
                    <div className="flex gap-3">
                      <button
                        onClick={handleGenerateIdea}
                        className="p-2.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all duration-300 hover:scale-105"
                        title="Regenerate"
                      >
                        <RefreshCw className="h-5 w-5" />
                      </button>
                      <button
                        onClick={handleShare}
                        className="p-2.5 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-xl transition-all duration-300 hover:scale-105"
                        title="Share"
                      >
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={handleCopyToClipboard}
                        className="p-2.5 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all duration-300 hover:scale-105"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-16 flex-grow">
                    <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-400 text-lg">
                      Crafting your perfect project idea...
                    </p>
                  </div>
                ) : generatedIdea ? (
                  <div className="space-y-8">
                    {/* Project Title and Difficulty */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {generatedIdea.title}
                      </h3>
                      <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium">
                        {generatedIdea.estimatedDifficulty}
                      </span>
                      <p className="text-gray-300 mt-4 leading-relaxed">
                        {generatedIdea.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6 rounded-2xl border border-white/10">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-blue-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {generatedIdea.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6 rounded-2xl border border-white/10">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-blue-400" />
                        Suggested Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {generatedIdea.suggestedTechStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-xl text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center flex-grow">
                    <div className="w-full h-64 md:h-80 lg:h-96 relative mb-4">
                      <Orb
                        hue={0}
                        hoverIntensity={0.2}
                        rotateOnHover={true}
                        forceHoverState={false}
                      />
                    </div>
                    <p className="text-gray-400 text-lg mt-4">
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
