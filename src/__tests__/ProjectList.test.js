import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";
import React from "react";
import ProjectItem from "./ProjectItem";


const projects = [
  {
    id: 1,
    name: "Reciplease",
    about: "A recipe tracking app",
    technologies: ["Rails", "Bootstrap CSS"],
  },
  {
    id: 2,
    name: "Kibbles N Bitz",
    about: "Tinder for dogs",
    technologies: ["React", "Redux"],
  },
  {
    id: 3,
    name: "Alienwares",
    about: "Etsy for aliens",
    technologies: ["React", "Redux", "Rails"],
  },
];
function ProjectList({ projects }) {
  const projectItems = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
test("gives each <ProjectItem> a key based on the project id", () => {
  let errorSpy = jest.spyOn(global.console, "error");
  render(<ProjectList projects={projects} />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders a <ProjectItem> for each project passed in as a prop", () => {
  render(<ProjectList projects={projects} />);

  for (const project of projects) {
    expect(screen.queryByText(project.name)).toBeInTheDocument();
  }
});
