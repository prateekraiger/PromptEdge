import React from "react";
import { projects } from "../constants/projectData";
import SearchBar from "../components/SearchBar";

const DiscoverProj = () => {
  const [search, setSearch] = React.useState("");

  const filterProjects = (list) =>
    list.filter(
      (project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
    );

  const getDifficultyColor = (tier) => {
    switch (tier) {
      case "Beginner":
        return "bg-success/20 text-success border-success/30";
      case "Intermediate":
        return "bg-warning/20 text-warning border-warning/30";
      case "Advanced":
        return "bg-error/20 text-error border-error/30";
      default:
        return "bg-base-200 text-base-content border-base-300";
    }
  };

  const filteredBeginner = filterProjects(projects.beginner);
  const filteredIntermediate = filterProjects(projects.intermediate);
  const filteredAdvanced = filterProjects(projects.advanced);

  const hasResults =
    filteredBeginner.length > 0 ||
    filteredIntermediate.length > 0 ||
    filteredAdvanced.length > 0;

  return (
    <div className="min-h-screen bg-base-100 text-base-content pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Discover Projects
          </h1>
          <p className="text-xl text-base-content/80">
            Explore our curated collection of project ideas for all skill levels
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <SearchBar onSearch={setSearch} />
        </div>

        {!hasResults && search && (
          <div className="text-center py-12">
            <p className="text-xl text-base-content/80">
              No projects found matching "{search}"
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-16">
          {/* Beginner Projects */}
          {filteredBeginner.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-2 h-8 bg-success rounded-full mr-3"></span>
                Beginner Projects
              </h2>
              <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden border border-base-300">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr className="bg-base-300">
                        <th className="w-16 text-center">#</th>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th className="w-32 text-center">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBeginner.map((project, index) => (
                        <tr
                          key={index}
                          className="hover:bg-base-300/50 transition-colors"
                        >
                          <td className="text-center font-medium">
                            {index + 1}
                          </td>
                          <td className="font-medium text-primary">
                            {project.name}
                          </td>
                          <td className="text-base-content/80">
                            {project.description}
                          </td>
                          <td className="text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                                project.tier
                              )}`}
                            >
                              {project.tier}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Intermediate Projects */}
          {filteredIntermediate.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-2 h-8 bg-warning rounded-full mr-3"></span>
                Intermediate Projects
              </h2>
              <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden border border-base-300">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr className="bg-base-300">
                        <th className="w-16 text-center">#</th>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th className="w-32 text-center">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredIntermediate.map((project, index) => (
                        <tr
                          key={index}
                          className="hover:bg-base-300/50 transition-colors"
                        >
                          <td className="text-center font-medium">
                            {index + 1}
                          </td>
                          <td className="font-medium text-primary">
                            {project.name}
                          </td>
                          <td className="text-base-content/80">
                            {project.description}
                          </td>
                          <td className="text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                                project.tier
                              )}`}
                            >
                              {project.tier}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Advanced Projects */}
          {filteredAdvanced.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-2 h-8 bg-error rounded-full mr-3"></span>
                Advanced Projects
              </h2>
              <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden border border-base-300">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr className="bg-base-300">
                        <th className="w-16 text-center">#</th>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th className="w-32 text-center">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAdvanced.map((project, index) => (
                        <tr
                          key={index}
                          className="hover:bg-base-300/50 transition-colors"
                        >
                          <td className="text-center font-medium">
                            {index + 1}
                          </td>
                          <td className="font-medium text-primary">
                            {project.name}
                          </td>
                          <td className="text-base-content/80">
                            {project.description}
                          </td>
                          <td className="text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                                project.tier
                              )}`}
                            >
                              {project.tier}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverProj;
