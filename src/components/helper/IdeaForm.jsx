import React, { useMemo } from "react";
{
  /* import { Button } from "@/components/ui/button"; */
}
{
  /* import { Label } from "@/components/ui/label"; */
}
{
  /* import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; */
}
{
  /* import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"; */
}
import {
  AlertCircle,
  Settings,
  Users,
  Code,
  Lightbulb,
  Zap,
  RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";

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

const IdeaForm = ({
  skillLevel,
  setSkillLevel,
  techStack,
  setTechStack,
  domain,
  setDomain,
  isLoading,
  error,
  onGenerate,
}) => {
  // Reset tech stack when domain changes
  React.useEffect(() => {
    setTechStack("");
  }, [domain, setTechStack]);

  // Get relevant tech stacks based on selected domain
  const relevantTechStacks = useMemo(() => {
    return domain ? domainTechStacks[domain] || [] : [];
  }, [domain]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full space-y-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <Settings className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-semibold text-primary">
          Customize Your Idea
        </h2>
      </div>

      {error && (
        <div className="alert alert-error bg-error/20 text-error-content mb-4">
          <AlertCircle className="h-4 w-4" />
          <div>
            <h3 className="font-bold">Error</h3>
            <div className="text-xs">{error}</div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-3">
          <label className="label flex items-center text-lg text-base-content">
            <Users className="mr-2 h-5 w-5 text-accent" />
            <span className="label-text">Skill Level</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {skillLevels.map((level) => (
              <button
                key={level}
                onClick={() => setSkillLevel(level)}
                className={`btn flex-1 min-w-[120px] transition-all duration-200 ${
                  skillLevel === level
                    ? "btn-primary text-primary-content shadow-lg scale-105"
                    : "btn-outline hover:bg-primary/10"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="label flex items-center text-lg text-base-content">
            <Lightbulb className="mr-2 h-5 w-5 text-accent" />
            <span className="label-text">Domain / Interest</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {domains.map((item) => (
              <button
                key={item}
                onClick={() => setDomain(item)}
                className={`btn transition-all duration-200 ${
                  domain === item
                    ? "btn-primary text-primary-content shadow-lg scale-105"
                    : "btn-outline hover:bg-primary/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="label flex items-center text-lg text-base-content">
            <Code className="mr-2 h-5 w-5 text-accent" />
            <span className="label-text">Tech Stack</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {relevantTechStacks.map((tech) => (
              <button
                key={tech}
                onClick={() => setTechStack(tech)}
                disabled={!domain}
                className={`btn transition-all duration-200 ${
                  techStack === tech
                    ? "btn-primary text-primary-content shadow-lg scale-105"
                    : "btn-outline hover:bg-primary/10"
                } ${!domain ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={isLoading || !skillLevel || !techStack || !domain}
        className={`btn btn-primary w-full mt-6 text-lg transition-all duration-200 ${
          !isLoading && skillLevel && techStack && domain
            ? "shadow-lg hover:scale-105"
            : ""
        }`}
      >
        {isLoading ? (
          <RefreshCw className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <Zap className="h-5 w-5 mr-2" />
            Generate Idea
          </>
        )}
      </button>
    </motion.div>
  );
};

export default IdeaForm;
