import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Copy, RefreshCw, Lightbulb, Share2 } from "lucide-react";
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

  const handleShare = async () => {
    if (!generatedIdea) return;

    const shareData = {
      title: generatedIdea.title,
      text: `${
        generatedIdea.description
      }\n\nKey Features: ${generatedIdea.keyFeatures.join(
        ", "
      )}\n\nTech Stack: ${generatedIdea.suggestedTechStack.join(
        ", "
      )}\n\nDifficulty: ${generatedIdea.estimatedDifficulty}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        // Show success toast
        window.dispatchEvent(
          new CustomEvent("show-toast", {
            detail: {
              type: "success",
              message: "Project idea shared successfully!",
            },
          })
        );
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(shareData.text);
        window.dispatchEvent(
          new CustomEvent("show-toast", {
            detail: {
              type: "info",
              message: "Share text copied to clipboard!",
            },
          })
        );
      }
    } catch (error) {
      window.dispatchEvent(
        new CustomEvent("show-toast", {
          detail: {
            type: "error",
            message: "Failed to share project idea",
          },
        })
      );
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {generatedIdea ? (
          <motion.div
            key={generatedIdea.title}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* <Card className="w-full shadow-2xl border-2 border-primary/30 dark:glassmorphic bg-card/70 backdrop-blur-sm"> */}
            <div className="card w-full bg-base-200 border border-primary/30">
              {/* <CardHeader className="pb-4"> */}
              <div className="card-body pb-4">
                <div className="flex justify-between items-start">
                  {/* <CardTitle className="text-3xl font-bold gradient-text leading-tight"> */}
                  <h2 className="card-title text-3xl font-bold text-primary leading-tight">
                    {generatedIdea.title}
                  </h2>
                  {/* </CardTitle> */}
                  {/* <Button
                    variant="ghost"
                    size="icon"
                    onClick={onCopy}
                    className="text-primary hover:text-accent transition-colors"
                  > */}
                  <div className="flex gap-2">
                    <button
                      onClick={onCopy}
                      className="btn btn-ghost btn-circle text-primary hover:text-accent transition-colors"
                    >
                      <Copy className="h-6 w-6" />
                      <span className="sr-only">Copy to clipboard</span>
                    </button>
                    <button
                      onClick={handleShare}
                      className="btn btn-ghost btn-circle text-primary hover:text-accent transition-colors"
                    >
                      <Share2 className="h-6 w-6" />
                      <span className="sr-only">Share project idea</span>
                    </button>
                  </div>
                </div>
                {/* <CardDescription className="text-lg text-muted-foreground pt-1"> */}
                <p className="text-lg text-base-content/80 pt-1">
                  {generatedIdea.description}
                </p>
                {/* </CardHeader> */}
              </div>
              {/* <CardContent className="space-y-5"> */}
              <div className="card-body space-y-5 pt-0">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-base-content">
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
                        className="px-4 py-1.5 bg-gradient-to-r from-primary/20 to-accent/20 text-primary hover:from-primary/30 hover:to-accent/30 border border-primary/30 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
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
                        ? "text-success"
                        : generatedIdea.estimatedDifficulty === "Intermediate"
                        ? "text-warning"
                        : "text-error"
                    }`}
                  >
                    {generatedIdea.estimatedDifficulty}
                  </p>
                </div>
              </div>
              {/* </CardContent> */}
              {/* <CardFooter className="pt-6"> */}
              <div className="card-actions justify-end p-6 pt-0">
                {/* <Button
                  onClick={onRegenerate}
                  disabled={isLoading}
                  variant="outline"
                  className="w-full text-md py-6 border-accent text-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 transform hover:scale-105"
                > */}
                <button
                  onClick={onRegenerate}
                  disabled={isLoading}
                  className="btn btn-outline btn-accent w-full"
                >
                  {isLoading ? (
                    <RefreshCw className="h-5 w-5 animate-spin" />
                  ) : (
                    <RefreshCw className="h-5 w-5 mr-2" />
                  )}
                  {isLoading
                    ? "Regenerating..."
                    : "Regenerate with Same Settings"}
                </button>
                {/* </CardFooter> */}
              </div>
              {/* </Card> */}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center justify-center h-[calc(100vh-250px)] text-center p-8 border-2 border-dashed border-primary/30 rounded-xl bg-base-200"
          >
            <Lightbulb className="h-20 w-20 text-primary/70 mb-6 animate-pulse" />
            <h2 className="text-3xl font-semibold text-primary mb-3">
              Let's Spark Some Creativity!
            </h2>
            <p className="text-lg text-base-content/80 max-w-md">
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
