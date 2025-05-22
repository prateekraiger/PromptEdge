import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
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
  const { toast } = useToast();

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
      toast.add({
        title: "Idea Generated!",
        description: "A new project idea has been cooked up for you.",
        duration: 3000,
      });
    } catch (error) {
      setError(
        error.message || "Failed to generate project idea. Please try again."
      );
      toast.add({
        title: "Error",
        description:
          error.message || "Failed to generate project idea. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
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
        toast.add({
          title: "Copied to Clipboard!",
          description: "Project idea details copied successfully.",
          duration: 2000,
        });
      })
      .catch((err) => {
        toast.add({
          title: "Copy Failed",
          description: "Could not copy text. Please try again.",
          variant: "destructive",
          duration: 2000,
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Generate Custom Project Ideas
        </h1>
        <p className="text-xl text-gray-600">
          Get personalized project ideas based on your preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
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
        <IdeaDisplay
          generatedIdea={generatedIdea}
          isLoading={isLoading}
          onRegenerate={handleGenerateIdea}
          onCopy={handleCopyToClipboard}
        />
      </div>
    </div>
  );
};

export default IdeaGenerator;
