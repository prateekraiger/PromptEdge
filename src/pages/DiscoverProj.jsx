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
  Filter,
  ChevronDown,
} from "lucide-react";
import codingProjects from "../constants/codingProjects";

const SearchBar = ({
  onSearch,
  searchValue,
  onFilterChange,
  activeFilters,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const techCategories = [
    { id: "frontend", label: "Frontend", icon: <Layers className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> },
    { id: "aiModels", label: "AI Models", icon: <Cpu className="w-4 h-4" /> },
    { id: "devOps", label: "DevOps", icon: <Database className="w-4 h-4" /> },
  ];

  const handleSearch = (value) => {
    onSearch(value);
    // Generate suggestions based on search value
    if (value.length > 0) {
      const searchTerms = value.toLowerCase();
      const matches = codingProjects
        .filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerms) ||
            project.overview.objective.toLowerCase().includes(searchTerms) ||
            Object.values(project.techStack).some((tech) =>
              tech.toLowerCase().includes(searchTerms)
            )
        )
        .slice(0, 3);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearch(suggestion.title);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-full md:max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-blue-400" />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search projects by name, tech stack, or description..."
            className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md hover:border-white/20"
          />
          {searchValue && (
            <button
              onClick={() => {
                onSearch("");
                setSuggestions([]);
              }}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`px-4 py-4 rounded-2xl border transition-all duration-300 flex items-center gap-2 ${
            isFilterOpen
              ? "bg-blue-500/20 border-blue-500/50 text-blue-400"
              : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20"
          }`}
        >
          <Filter className="h-5 w-5" />
          <span className="hidden sm:inline">Filters</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isFilterOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Search Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 text-left hover:bg-white/5 transition-colors flex flex-col gap-1"
            >
              <span className="text-white font-medium">{suggestion.title}</span>
              <span className="text-sm text-slate-400 line-clamp-1">
                {suggestion.overview.objective}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Filter Dropdown */}
      {isFilterOpen && (
        <div className="absolute z-50 w-full mt-2 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-4">
          <h3 className="text-sm font-medium text-slate-400 mb-3">
            Filter by Tech Stack
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeFilters.includes(category.id)
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-gradient-to-br hover:from-blue-600/10 hover:to-cyan-500/10 hover:border-blue-500/30 transition-all duration-300 group shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-colors duration-300 mb-3">
        {project.title}
      </h3>
      <p className="text-slate-300 text-sm line-clamp-3 mb-4">
        {project.overview.objective}
      </p>
      <div className="flex flex-wrap gap-2">
        {Object.entries(project.techStack).map(([key, value], i) => (
          <span
            key={i}
            className="bg-blue-600/70 text-white text-xs px-2 py-1 rounded-full"
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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-500/20">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent pr-4">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3 border-b border-white/10 pb-2">
                Overview
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-blue-300 mb-1">
                    Objective
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {project.overview.objective}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-cyan-300 mb-1">
                    Problem Solved
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {project.overview.problemSolved}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
                Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-blue-400" />
                    <h4 className="text-sm font-medium text-slate-300">
                      Frontend
                    </h4>
                  </div>
                  <p className="text-white font-medium">
                    {project.techStack.frontend}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-5 h-5 text-blue-400" />
                    <h4 className="text-sm font-medium text-slate-300">
                      Backend
                    </h4>
                  </div>
                  <p className="text-white font-medium">
                    {project.techStack.backend}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-blue-400" />
                    <h4 className="text-sm font-medium text-slate-300">
                      AI Models
                    </h4>
                  </div>
                  <p className="text-white font-medium">
                    {project.techStack.aiModels}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-blue-400" />
                    <h4 className="text-sm font-medium text-slate-300">
                      DevOps
                    </h4>
                  </div>
                  <p className="text-white font-medium">
                    {project.techStack.devOps}
                  </p>
                </div>
              </div>
            </div>

            {project.links &&
              (project.links.liveDemo || project.links.githubRepo) && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
                    Links
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {project.links.liveDemo && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {project.links.githubRepo && (
                      <a
                        href={project.links.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <Github className="w-4 h-4" /> GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DiscoverProj = () => {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);

  const filterProjects = (projects) => {
    return projects.filter((project) => {
      // Search term filtering
      const searchMatch =
        search === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.overview.objective
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        Object.values(project.techStack).some((tech) =>
          tech.toLowerCase().includes(search.toLowerCase())
        );

      // Tech stack filtering
      const filterMatch =
        activeFilters.length === 0 ||
        activeFilters.some((filter) =>
          project.techStack[filter]
            ?.toLowerCase()
            .includes(search.toLowerCase())
        );

      return searchMatch && filterMatch;
    });
  };

  const filteredProjects = useMemo(() => {
    return filterProjects(codingProjects);
  }, [search, activeFilters]);

  const handleFilterChange = (filterId) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const hasResults = filteredProjects.length > 0;

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl mb-6 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              <div className="flex items-center justify-center gap-2">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
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
              <SearchBar
                onSearch={setSearch}
                searchValue={search}
                onFilterChange={handleFilterChange}
                activeFilters={activeFilters}
              />
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {activeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm hover:bg-blue-500/30 transition-colors"
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  <X className="h-4 w-4" />
                </button>
              ))}
            </div>
          )}

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
                No projects found matching your search criteria.
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
