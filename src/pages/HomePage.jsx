import React from "react";
import { Link } from "react-router-dom";
import { Coffee, Sparkles, Rocket, Code2 } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-secondary pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 relative">
                <span className="relative inline-block">
                  Project Ideas
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent"></span>
                </span>{" "}
                for Developers
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our curated collection of project ideas for all skill
                levels. From beginner-friendly apps to advanced full-stack
                projects.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/idea-generator"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Generate Custom Ideas
                </Link>
                <Link
                  to="/discover"
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg shadow hover:shadow-md transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <Rocket className="h-5 w-5" />
                  Browse Projects
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/3">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75"></div>
                <div className="relative bg-card p-6 rounded-lg shadow-xl">
                  <div className="font-mono text-xs text-muted-foreground">
                    <p>
                      <span className="text-primary">const</span>{" "}
                      <span className="text-yellow-400 font-bold">
                        projectIdea
                      </span>{" "}
                      = () =&gt; {"{"}
                    </p>
                    <p>
                      &nbsp;&nbsp;<span className="text-primary">return</span> (
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                      <span className="text-accent">div</span>&gt;"Hello,
                      Developer!"&lt;/<span className="text-accent">div</span>
                      &gt;
                    </p>
                    <p>&nbsp;&nbsp;);</p>
                    <p>{"}"}</p>
                    <p>
                      <span className="text-primary">console</span>.
                      <span className="text-pink-500 font-bold">log</span>(
                      <span className="text-accent">projectIdea</span>());
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose PromptEdge?
          </h2>
          <p className="text-xl text-muted-foreground">
            Your ultimate companion for project inspiration and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-card p-6 rounded-lg shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              AI-Powered Ideas
            </h3>
            <p className="text-muted-foreground">
              Get personalized project ideas based on your skill level and
              preferences
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card p-6 rounded-lg shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Curated Projects
            </h3>
            <p className="text-muted-foreground">
              Explore our handpicked collection of projects for all skill levels
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card p-6 rounded-lg shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Skill Growth
            </h3>
            <p className="text-muted-foreground">
              Progress from beginner to advanced with our structured project
              collection
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose your path and begin your coding journey today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/idea-generator"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5" />
              Generate Custom Ideas
            </Link>
            <Link
              to="/discover"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg shadow hover:shadow-md transition-all duration-300 font-medium flex items-center gap-2"
            >
              <Rocket className="h-5 w-5" />
              Explore Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
