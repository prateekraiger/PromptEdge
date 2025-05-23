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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-montserrat tracking-tight">
            Generate Custom Project Ideas
          </h1>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto font-montserrat">
            Get personalized project ideas based on your preferences and skill
            level
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-base-200 p-6 rounded-lg shadow-lg border border-primary/20">
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
          <div className="bg-base-200 p-6 rounded-lg shadow-lg border border-primary/20">
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
