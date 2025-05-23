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

      <div className="space-y-2">
        <label
          htmlFor="skill-level"
          className="label flex items-center text-lg text-base-content"
        >
          <Users className="mr-2 h-5 w-5 text-accent" />
          <span className="label-text">Skill Level</span>
        </label>
        <select
          id="skill-level"
          className="select select-bordered w-full text-base-content bg-base-200 border-primary/30 focus:border-primary"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
        >
          <option value="" disabled>
            Select your skill level
          </option>
          {skillLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="domain"
          className="label flex items-center text-lg text-base-content"
        >
          <Lightbulb className="mr-2 h-5 w-5 text-accent" />
          <span className="label-text">Domain / Interest</span>
        </label>
        <select
          id="domain"
          className="select select-bordered w-full text-base-content bg-base-200 border-primary/30 focus:border-primary"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        >
          <option value="" disabled>
            Select your domain of interest
          </option>
          {domains.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="tech-stack"
          className="label flex items-center text-lg text-base-content"
        >
          <Code className="mr-2 h-5 w-5 text-accent" />
          <span className="label-text">Tech Stack</span>
        </label>
        <select
          id="tech-stack"
          className="select select-bordered w-full text-base-content bg-base-200 border-primary/30 focus:border-primary"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          disabled={!domain}
        >
          <option value="" disabled>
            {domain ? "Select your tech stack" : "Select a domain first"}
          </option>
          {relevantTechStacks.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onGenerate}
        disabled={isLoading || !skillLevel || !techStack || !domain}
        className="btn btn-primary w-full mt-6 text-lg"
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
