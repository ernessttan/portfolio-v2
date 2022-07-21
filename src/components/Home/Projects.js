import ProjectCard from "../ProjectCard";

function Projects() {
  const projectData = [
    {
      id: 0,
      title: "Friday Productivity App",
      description: "A simple application to help you plan and organize tasks",
      imageUrl: "/images/friday-mock.svg",
      projectUrl: "https://ernessttan.github.io/friday-productivity-app/",
      codeUrl: "https://github.com/ernessttan/friday-productivity-app",
      tags: ["React", "Tailwind", "Node"],
    },
    {
      id: 1,
      title: "Friday Productivity App",
      description: "A simple application to help you plan and organize tasks",
      imageUrl: "/images/friday-mock.svg",
      projectUrl: "https://ernessttan.github.io/friday-productivity-app/",
      codeUrl: "https://github.com/ernessttan/friday-productivity-app",
      tags: ["React", "Tailwind", "Node"],
    },
  ];

  const projects = projectData.map((project) => (
    <ProjectCard
      key={project.id}
      title={project.title}
      description={project.description}
      imageUrl={project.imageUrl}
      projectUrl={project.projectUrl}
      codeUrl={project.codeUrl}
      tagsArr={project.tags}
    />
  ));

  return (
    <section className="dark:dark-text">
      <h1 className="dark:dark-text">Projects ive worked on</h1>
      <div className="py-5">
        {projects}
      </div>
    </section>
  );
}

export default Projects;
