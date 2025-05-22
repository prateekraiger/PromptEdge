import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, RefreshCw, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IdeaDisplay = ({ generatedIdea, isLoading, onRegenerate, onCopy }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <div className="lg:w-2/3 w-full">
      <AnimatePresence mode="wait">
        {generatedIdea ? (
          <motion.div
            key={generatedIdea.title}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Card className="w-full shadow-2xl border-2 border-primary/30 dark:glassmorphic bg-card/70 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-3xl font-bold gradient-text leading-tight">
                    {generatedIdea.title}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onCopy}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <Copy className="h-6 w-6" />
                    <span className="sr-only">Copy to clipboard</span>
                  </Button>
                </div>
                <CardDescription className="text-lg text-muted-foreground pt-1">
                  {generatedIdea.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-base text-foreground/90">
                    {generatedIdea.keyFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Suggested Tech Stack:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {generatedIdea.suggestedTechStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm shadow-md"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + index * 0.1,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Estimated Difficulty:
                  </h3>
                  <p
                    className={`text-lg font-medium ${
                      generatedIdea.estimatedDifficulty === "Beginner"
                        ? "text-green-500"
                        : generatedIdea.estimatedDifficulty === "Intermediate"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {generatedIdea.estimatedDifficulty}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="pt-6">
                <Button
                  onClick={onRegenerate}
                  disabled={isLoading}
                  variant="outline"
                  className="w-full text-md py-6 border-accent text-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    >
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    </motion.div>
                  ) : (
                    <RefreshCw className="mr-2 h-5 w-5" />
                  )}
                  {isLoading
                    ? "Regenerating..."
                    : "Regenerate with Same Settings"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center justify-center h-[calc(100vh-250px)] text-center p-8 border-2 border-dashed border-primary/30 rounded-xl bg-card/30 dark:glassmorphic"
          >
            <Lightbulb className="h-20 w-20 text-primary/70 mb-6 animate-pulse" />
            <h2 className="text-3xl font-semibold text-foreground/80 mb-3">
              Let's Spark Some Creativity!
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Fill in your preferences on the left, and we'll generate a unique
              software project idea tailored just for you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IdeaDisplay;
