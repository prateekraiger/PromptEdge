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
          <div className="text-left mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-300 to-cyan-300 bg-clip-text text-transparent mb-6">
              AI Project Generator
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Get personalized project ideas based on your skill level,
              preferred tech stack, and domain
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-full sm:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Input Section */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300">
                  <div className="space-y-6 mb-8">
                    {/* Skill Level Dropdown */}
                    <div>
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
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:bg-white/15"
                      >
                        <option value="" disabled className="text-gray-500">
                          Select Skill Level
                        </option>
                        {skillLevels.map((level) => (
                          <option
                            key={level}
                            value={level}
                            className="bg-gray-800 text-white"
                          >
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Domain Dropdown */}
                    <div>
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
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 shadow-sm hover:bg-white/15"
                      >
                        <option value="" disabled className="text-gray-500">
                          Select Domain
                        </option>
                        {domains.map((d) => (
                          <option
                            key={d}
                            value={d}
                            className="bg-gray-800 text-white"
                          >
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tech Stack Dropdown */}
                    <div>
                      <label
                        htmlFor="techStack"
                        className="block text-sm font-medium text-blue-300 mb-2"
                      >
                        Tech Stack
                      </label>
                      <select
                        id="techStack"
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:bg-white/15"
                        disabled={!domain}
                      >
                        <option value="" disabled className="text-gray-500">
                          {domain ? "Select Tech Stack" : "Select Domain First"}
                        </option>
                        {domain &&
                          domainTechStacks[domain].map((tech) => (
                            <option
                              key={tech}
                              value={tech}
                              className="bg-gray-800 text-white"
                            >
                              {tech}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <div className="flex justify-start">
                    <button
                      onClick={handleGenerateIdea}
                      disabled={isLoading}
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative flex items-center gap-3">
                        {isLoading ? (
                          <RefreshCw className="h-5 w-5 animate-spin" />
                        ) : (
                          <Sparkles className="h-5 w-5" />
                        )}
                        <span className="text-lg">
                          {isLoading
                            ? "Generating..."
                            : "Generate Project Idea"}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    <p>{error}</p>
                  </div>
                )}
              </div>

              {/* Right Side - Generated Idea Section */}
              <div className="lg:sticky lg:top-24">
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300 min-h-[600px]">
                  {/* Orb Component */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-blue-400/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[300px] h-[300px]">
                        <Orb />
                      </div>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10">
                    {generatedIdea ? (
                      <>
                        <div className="flex justify-between items-start mb-6">
                          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                            {generatedIdea.title}
                          </h2>
                          <div className="flex gap-2">
                            <button
                              onClick={handleCopyToClipboard}
                              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110 transform"
                              title="Copy to clipboard"
                            >
                              <Copy className="h-5 w-5 text-blue-400" />
                            </button>
                            <button
                              onClick={handleShare}
                              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110 transform"
                              title="Share project idea"
                            >
                              <Share2 className="h-5 w-5 text-blue-400" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-blue-300 mb-2">
                              Description
                            </h3>
                            <p className="text-gray-300 leading-relaxed selection:bg-blue-500/20 selection:text-white">
                              {generatedIdea.description}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-blue-300 mb-2">
                              Key Features
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 selection:bg-blue-500/20 selection:text-white">
                              {generatedIdea.keyFeatures.map(
                                (feature, index) => (
                                  <li key={index}>{feature}</li>
                                )
                              )}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-blue-300 mb-2">
                              Suggested Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {generatedIdea.suggestedTechStack.map(
                                (tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors duration-200"
                                  >
                                    {tech}
                                  </span>
                                )
                              )}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-blue-300 mb-2">
                              Estimated Difficulty
                            </h3>
                            <p className="text-gray-300 selection:bg-blue-500/20 selection:text-white">
                              {generatedIdea.estimatedDifficulty}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <p className="text-lg">
                            Fill in the details and generate your project idea
                          </p>
                        </div>
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

// Add this to your global CSS or a style tag
/*
::selection {
  background: rgba(59, 130, 246, 0.2);
  color: white;
}
*/
