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
  Brain,
  ChevronDown,
} from "lucide-react";

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
      showToast("error", "Please fill all fields.");
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
      showToast("error", "Failed to generate idea.");
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl mb-6 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
              AI Project Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get personalized project ideas based on your skill level,
              preferred tech stack, and domain
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-full sm:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Input Section */}
              <div className="w-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="space-y-6">
                    {/* Skill Level Dropdown */}
                    <div className="relative">
                      <label
                        htmlFor="skillLevel"
                        className="block text-sm font-medium text-blue-300 mb-2"
                      >
                        Skill Level
                      </label>
                      <select
                        id="skillLevel"
                        value={skillLevel}
                        onChange={(e) => setSkillLevel(e.target.value)}
                        className="w-full bg-gray-950/50 border border-gray-800 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:bg-gray-900/50 appearance-none"
                      >
                        <option value="" disabled className="text-gray-500">
                          Select Skill Level
                        </option>
                        {skillLevels.map((level) => (
                          <option
                            key={level}
                            value={level}
                            className="bg-gray-900 text-white"
                          >
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Domain Dropdown */}
                    <div className="relative">
                      <label
                        htmlFor="domain"
                        className="block text-sm font-medium text-cyan-300 mb-2"
                      >
                        Domain
                      </label>
                      <select
                        id="domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="w-full bg-gray-950/50 border border-gray-800 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 shadow-sm hover:bg-gray-900/50 appearance-none"
                      >
                        <option value="" disabled className="text-gray-500">
                          Select Domain
                        </option>
                        {domains.map((d) => (
                          <option
                            key={d}
                            value={d}
                            className="bg-gray-900 text-white"
                          >
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tech Stack Dropdown */}
                    <div className="relative">
                      <label
                        htmlFor="techStack"
                        className="block text-sm font-medium text-purple-300 mb-2"
                      >
                        Tech Stack
                      </label>
                      <select
                        id="techStack"
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                        className="w-full bg-gray-950/50 border border-gray-800 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm hover:bg-gray-900/50 appearance-none"
                        disabled={!domain}
                      >
                        <option value="" disabled className="text-gray-500">
                          {domain ? "Select Tech Stack" : "Select Domain First"}
                        </option>
                        {domain &&
                          domainTechStacks[domain]?.map((tech) => (
                            <option
                              key={tech}
                              value={tech}
                              className="bg-gray-900 text-white"
                            >
                              {tech}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Generate Button */}
                    <button
                      onClick={handleGenerateIdea}
                      disabled={isLoading}
                      className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 transform hover:scale-105 ${
                        isLoading
                          ? "bg-blue-500/50 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500"
                      }`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Generating...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          <span>Generate Project Idea</span>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Generated Idea */}
              <div className="w-full">
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-500 h-full">
                  {/* Orb Background - Only show when no idea is generated */}
                  {!generatedIdea && (
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-blue-400/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[500px] h-[300px]">
                          <Orb hue={31} hoverIntensity={0.5} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full">
                    {generatedIdea ? (
                      <div className="space-y-6">
                        <div className="flex justify-between items-start">
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {generatedIdea.title}
                          </h2>
                          <div className="flex gap-2">
                            <button
                              onClick={handleCopyToClipboard}
                              className="p-2 text-gray-400 hover:text-white transition-colors"
                              title="Copy to clipboard"
                            >
                              <Copy className="w-5 h-5" />
                            </button>
                            <button
                              onClick={handleShare}
                              className="p-2 text-gray-400 hover:text-white transition-colors"
                              title="Share"
                            >
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-blue-300 mb-2">
                              Description
                            </h3>
                            <p className="text-gray-200 leading-relaxed">
                              {generatedIdea.description}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-sm font-medium text-cyan-300 mb-2">
                              Key Features
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-200">
                              {generatedIdea.keyFeatures.map(
                                (feature, index) => (
                                  <li key={index}>{feature}</li>
                                )
                              )}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-sm font-medium text-purple-300 mb-2">
                              Suggested Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {generatedIdea.suggestedTechStack.map(
                                (tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                )
                              )}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-sm font-medium text-green-300 mb-2">
                              Estimated Difficulty
                            </h3>
                            <p className="text-gray-200">
                              {generatedIdea.estimatedDifficulty}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                        <h3 className="text-3xl font-medium text-gray-200 mb-4">
                          No Project Idea Generated Yet
                        </h3>
                        <p className="text-gray-300 max-w-xl text-lg">
                          Fill in your preferences and click "Generate Project
                          Idea" to get started
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-xl shadow-lg flex items-center gap-2 ${
            toast.type === "success"
              ? "bg-green-500/20 border border-green-500/30 text-green-300"
              : "bg-red-500/20 border border-red-500/30 text-red-300"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <AlertCircle className="h-5 w-5" />
          )}
          <p>{toast.message}</p>
        </div>
      )}
    </div>
  );
};

export default IdeaGenerator;
