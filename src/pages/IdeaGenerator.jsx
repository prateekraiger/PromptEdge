import React, { useState, useEffect } from "react";
// import { useToast } from "@/components/ui/use-toast";
import { generateProjectIdea } from "@/lib/aiService";
import IdeaForm from "@/components/helper/IdeaForm";
import IdeaDisplay from "@/components/helper/IdeaDisplay";

const IdeaGenerator = () => {
  const [skillLevel, setSkillLevel] = useState("");
  const [techStack, setTechStack] = useState("");
  const [domain, setDomain] = useState("");
  const [generatedIdea, setGeneratedIdea] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleToast = (event) => {
      const { type, message } = event.detail;
      const toast = document.createElement("div");
      toast.className = `toast toast-end`;
      toast.innerHTML = `
        <div class="alert alert-${type}">
          <span>${message}</span>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 3000);
    };

    window.addEventListener("show-toast", handleToast);
    return () => window.removeEventListener("show-toast", handleToast);
  }, []);

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
        window.dispatchEvent(
          new CustomEvent("show-toast", {
            detail: {
              type: "success",
              message: "Project idea copied to clipboard!",
            },
          })
        );
      })
      .catch((err) => {
        window.dispatchEvent(
          new CustomEvent("show-toast", {
            detail: {
              type: "error",
              message: "Failed to copy to clipboard",
            },
          })
        );
      });
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Generate Custom Project Ideas
          </h1>
          <p className="text-xl text-base-content">
            Get personalized project ideas based on your preferences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 bg-base-200 p-6 rounded-lg shadow-lg">
            <IdeaForm
              skillLevel={skillLevel}
              setSkillLevel={setSkillLevel}
              techStack={techStack}
              setTechStack={setTechStack}
              domain={domain}
              setDomain={setDomain}
              isLoading={isLoading}
              error={error}
              onGenerate={handleGenerateIdea}
            />
          </div>
          <div className="w-full lg:w-1/2 bg-base-200 p-6 rounded-lg shadow-lg">
            <IdeaDisplay
              generatedIdea={generatedIdea}
              isLoading={isLoading}
              onRegenerate={handleGenerateIdea}
              onCopy={handleCopyToClipboard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaGenerator;
