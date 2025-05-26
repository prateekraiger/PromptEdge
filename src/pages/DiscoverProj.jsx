import React, { useState, useMemo } from "react";
import {
  Search,
  Code,
  X,
  ExternalLink,
  Github,
  Layers,
  Server,
  Cpu,
  Database,
} from "lucide-react";
import codingProjects from "../constants/codingProjects";

const SearchBar = ({ onSearch, searchValue }) => {
  return (
    <div className="relative max-w-2xl w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 " />
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search projects by name or description..."
        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
      />
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/10 transition-all duration-300 group"
    >
      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-3">
        {project.title}
      </h3>
      <p className="text-slate-300 text-sm line-clamp-3 mb-4">
        {project.overview.objective}
      </p>
      <div className="flex flex-wrap gap-2">
        {Object.entries(project.techStack).map(([key, value], i) => (
          <span
            key={i}
            className="bg-purple-600/70 text-white text-xs px-2 py-1 rounded-full"
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Overview
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-1">
                    Objective
                  </h4>
                  <p className="text-slate-300">{project.overview.objective}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-1">
                    Problem Solved
                  </h4>
                  <p className="text-slate-300">
                    {project.overview.problemSolved}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <h4 className="text-sm font-medium text-slate-400">
                      Frontend
                    </h4>
                  </div>
                  <p className="text-white">{project.techStack.frontend}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-5 h-5 text-blue-400" />
                    <h4 className="text-sm font-medium text-slate-400">
                      Backend
                    </h4>
                  </div>
                  <p className="text-white">{project.techStack.backend}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-green-400" />
                    <h4 className="text-sm font-medium text-slate-400">
                      AI Models
                    </h4>
                  </div>
                  <p className="text-white">{project.techStack.aiModels}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-sm font-medium text-slate-400">
                      DevOps
                    </h4>
                  </div>
                  <p className="text-white">{project.techStack.devOps}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiscoverProj = () => {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterProjects = (projects) => {
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.overview.objective.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredProjects = useMemo(() => {
    return filterProjects(codingProjects);
  }, [search]);

  const hasResults = filteredProjects.length > 0;

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl mb-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-2">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
              Discover Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our curated collection of AI-powered coding projects
              designed to challenge and inspire developers
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <SearchBar onSearch={setSearch} searchValue={search} />
            </div>
          </div>

          {/* Projects Grid */}
          {hasResults ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-slate-400">
                No projects found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default DiscoverProj;
