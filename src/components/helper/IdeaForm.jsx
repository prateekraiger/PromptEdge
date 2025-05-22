import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
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
      className="lg:w-1/3 w-full space-y-6 p-6 bg-card/50 dark:glassmorphic shadow-2xl rounded-xl border border-primary/20"
    >
      <div className="flex items-center space-x-3 mb-6">
        <Settings className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-semibold gradient-text">
          Customize Your Idea
        </h2>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="skill-level" className="flex items-center text-lg">
          <Users className="mr-2 h-5 w-5 text-accent" />
          Skill Level
        </Label>
        <Select onValueChange={setSkillLevel} value={skillLevel}>
          <SelectTrigger
            id="skill-level"
            className="w-full text-base py-6 border-primary/30 focus:ring-primary"
          >
            <SelectValue placeholder="Select your skill level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Skill Level</SelectLabel>
              {skillLevels.map((level) => (
                <SelectItem
                  key={level}
                  value={level}
                  className="text-base py-2"
                >
                  {level}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="domain" className="flex items-center text-lg">
          <Lightbulb className="mr-2 h-5 w-5 text-accent" />
          Domain / Interest
        </Label>
        <Select onValueChange={setDomain} value={domain}>
          <SelectTrigger
            id="domain"
            className="w-full text-base py-6 border-primary/30 focus:ring-primary"
          >
            <SelectValue placeholder="Select your domain of interest" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Domain</SelectLabel>
              {domains.map((item) => (
                <SelectItem key={item} value={item} className="text-base py-2">
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tech-stack" className="flex items-center text-lg">
          <Code className="mr-2 h-5 w-5 text-accent" />
          Preferred Tech Stack
        </Label>
        <Select
          onValueChange={setTechStack}
          value={techStack}
          disabled={!domain}
        >
          <SelectTrigger
            id="tech-stack"
            className="w-full text-base py-6 border-primary/30 focus:ring-primary"
          >
            <SelectValue
              placeholder={
                domain ? "Select preferred tech stack" : "Select domain first"
              }
            />
          </SelectTrigger>
          <SelectContent className="absolute top-full left-0 mt-2 origin-top">
            <SelectGroup>
              <SelectLabel>Tech Stack</SelectLabel>
              {relevantTechStacks.map((tech) => (
                <SelectItem key={tech} value={tech} className="text-base py-2">
                  {tech}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={onGenerate}
        disabled={isLoading || !domain || !techStack}
        className="w-full text-lg py-7 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground transition-all duration-300 ease-in-out transform hover:scale-105 neumorphic-btn"
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
          </motion.div>
        ) : (
          <Zap className="mr-2 h-5 w-5" />
        )}
        {isLoading ? "Generating..." : "Generate Idea"}
      </Button>
    </motion.div>
  );
};

export default IdeaForm;
