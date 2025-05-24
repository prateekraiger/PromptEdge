import React, { useState, useMemo } from "react";
import {
  Search,
  Star,
  Clock,
  Code,
  Lightbulb,
  Zap,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { mockProjects } from "../constants/projectData";

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

const ProjectTable = ({ projects, tier, tierColor, tierIcon }) => {
  const getDifficultyStars = (difficulty) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.ceil(difficulty / 2)
            ? "text-yellow-400 fill-current"
            : "text-slate-400"
        }`}
      />
    ));
  };

  return (
    <section className="mb-16">
      <div className="flex items-center mb-6">
        <div
          className={`flex items-center justify-center w-12 h-12 ${tierColor} rounded-xl mr-4`}
        >
          {tierIcon}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">{tier} Projects</h2>
          <p className="text-slate-400">{projects.length} projects available</p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 w-16">
                  #
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 min-w-[200px]">
                  Project Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 min-w-[300px]">
                  Description
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 w-32">
                  Difficulty
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 w-28">
                  Time
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 w-40">
                  Tags
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.name}
                    </div>
                    <div
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${tierColor.replace(
                        "bg-gradient-to-r",
                        "bg-gradient-to-r"
                      )} text-white`}
                    >
                      {tier}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      {getDifficultyStars(project.difficulty)}
                    </div>
                    <div className="text-xs text-slate-400">
                      {project.difficulty}/10
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-blue-400 mr-1" />
                    </div>
                    <div className="text-sm font-medium text-white">
                      {project.estimatedTime}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags && project.tags.length > 0 ? (
                        project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-purple-600/70 text-white text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="text-slate-400 text-xs">No tags</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const DiscoverProj = () => {
  const [search, setSearch] = useState("");
  const [selectedTier, setSelectedTier] = useState("all");
  const [sortBy, setSortBy] = useState("difficulty");

  const filterProjects = (projects) => {
    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
    );
  };

  const sortProjects = (projects) => {
    return [...projects].sort((a, b) => {
      switch (sortBy) {
        case "difficulty":
          return b.difficulty - a.difficulty;
        case "time":
          return b.estimatedTime - a.estimatedTime;
        default:
          return 0;
      }
    });
  };

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = {
      beginner: sortProjects(filterProjects(mockProjects.beginner)),
      intermediate: sortProjects(filterProjects(mockProjects.intermediate)),
      advanced: sortProjects(filterProjects(mockProjects.advanced)),
    };

    if (selectedTier === "all") {
      return filtered;
    }

    return {
      beginner: selectedTier === "beginner" ? filtered.beginner : [],
      intermediate:
        selectedTier === "intermediate" ? filtered.intermediate : [],
      advanced: selectedTier === "advanced" ? filtered.advanced : [],
    };
  }, [search, selectedTier, sortBy]);

  const totalProjects =
    filteredAndSortedProjects.beginner.length +
    filteredAndSortedProjects.intermediate.length +
    filteredAndSortedProjects.advanced.length;

  const hasResults = totalProjects > 0;

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
              Explore our curated collection of coding projects designed to
              challenge and inspire developers at every level
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <SearchBar onSearch={setSearch} searchValue={search} />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              >
                <option value="all" className="bg-gray-900">
                  All Levels
                </option>
                <option value="beginner" className="bg-gray-900">
                  Beginner
                </option>
                <option value="intermediate" className="bg-gray-900">
                  Intermediate
                </option>
                <option value="advanced" className="bg-gray-900">
                  Advanced
                </option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              >
                <option value="difficulty" className="bg-gray-900">
                  Difficulty
                </option>
                <option value="time" className="bg-gray-900">
                  Time Required
                </option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          {search && (
            <div className="mb-8 text-center">
              <p className="text-gray-300">
                {hasResults ? (
                  <>
                    Found{" "}
                    <span className="font-bold text-white">
                      {totalProjects}
                    </span>{" "}
                    projects matching{" "}
                    <span className="font-bold text-purple-300">
                      "{search}"
                    </span>
                  </>
                ) : (
                  <>
                    No projects found matching{" "}
                    <span className="font-bold text-purple-300">
                      "{search}"
                    </span>
                  </>
                )}
              </p>
            </div>
          )}

          {!hasResults && search && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 rounded-full mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No Projects Found
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Try adjusting your search terms or filters to find the perfect
                project for you.
              </p>
            </div>
          )}

          {/* Project Tables */}
          <div className="space-y-12">
            {filteredAndSortedProjects.beginner.length > 0 && (
              <ProjectTable
                projects={filteredAndSortedProjects.beginner}
                tier="Beginner"
                tierColor="bg-gradient-to-r from-emerald-400 to-teal-500"
                tierIcon={<Lightbulb className="w-6 h-6 text-white" />}
              />
            )}

            {filteredAndSortedProjects.intermediate.length > 0 && (
              <ProjectTable
                projects={filteredAndSortedProjects.intermediate}
                tier="Intermediate"
                tierColor="bg-gradient-to-r from-amber-400 to-orange-500"
                tierIcon={<Zap className="w-6 h-6 text-white" />}
              />
            )}

            {filteredAndSortedProjects.advanced.length > 0 && (
              <ProjectTable
                projects={filteredAndSortedProjects.advanced}
                tier="Advanced"
                tierColor="bg-gradient-to-r from-red-400 to-pink-500"
                tierIcon={<Trophy className="w-6 h-6 text-white" />}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProj;
