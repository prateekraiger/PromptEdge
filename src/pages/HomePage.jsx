import React from "react";
import ProjectTable from "../components/ProjectTable";
import { Link } from "react-router-dom";
import { projects } from "../constants/projectData";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [search, setSearch] = React.useState("");
  const filterProjects = (list) =>
    list.filter(
      (project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
    );
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
                levels
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/idea-generator"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                >
                  Generate Custom Ideas
                </Link>
                <button
                  onClick={() => {
                    const beginnerSection = document.getElementById("beginner");
                    if (beginnerSection) {
                      beginnerSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg shadow hover:shadow-md transition-all duration-300 font-medium"
                >
                  Browse Projects
                </button>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">
            Discover Your First Project
          </h2>
          <p className="text-muted-foreground mt-2">
            Start your coding journey with these beginner-friendly ideas.
          </p>
        </div>
        <div className="flex justify-center mb-16">
          <SearchBar onSearch={setSearch} />
        </div>
        {/* Project Sections Aligned */}
        <div className="grid grid-cols-1 gap-16">
          {/* Beginner Projects */}
          <section id="beginner">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Beginner Projects
            </h2>
            <div className="bg-card shadow-md rounded-lg overflow-hidden border border-border/50">
              <ProjectTable
                projects={filterProjects(projects.beginner)}
                difficultyMargin={true}
              />
            </div>
          </section>
          {/* Intermediate Projects */}
          <section id="intermediate">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Intermediate Projects
            </h2>
            <div className="bg-card shadow-md rounded-lg overflow-hidden border border-border/50">
              <ProjectTable
                projects={filterProjects(projects.intermediate)}
                difficultyMargin={true}
              />
            </div>
          </section>
          {/* Advanced Projects */}
          <section id="advanced">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Advanced Projects
            </h2>
            <div className="bg-card shadow-md rounded-lg overflow-hidden border border-border/50">
              <ProjectTable
                projects={filterProjects(projects.advanced)}
                difficultyMargin={true}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
