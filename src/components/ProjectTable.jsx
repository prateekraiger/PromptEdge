import React from "react";

const ProjectTable = ({ projects, title }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
              Project Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
              Difficulty
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="hover">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium">{project.name}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm">{project.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`badge ${
                    // Using DaisyUI badge component
                    project.tier === "Beginner"
                      ? "badge-success"
                      : project.tier === "Intermediate"
                      ? "badge-warning"
                      : "badge-error"
                  } badge-outline ml-5`}
                >
                  {project.tier}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
