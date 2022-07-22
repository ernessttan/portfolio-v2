import ProjectCard from "../ProjectCard";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Friday Productivity App",
      description: "A simple application to help you plan and organize tasks",
      imageUrl: "/images/friday-mock.svg",
      projectUrl: "https://ernessttan.github.io/friday-productivity-app/",
      codeUrl: "https://github.com/ernessttan/friday-productivity-app",
      tags: ["React", "Tailwind", "Node"],
    },
    {
      id: 2,
      title: "Friday Productivity App",
      description: "A simple application to help you plan and organize tasks",
      imageUrl: "/images/friday-mock.svg",
      projectUrl: "https://ernessttan.github.io/friday-productivity-app/",
      codeUrl: "https://github.com/ernessttan/friday-productivity-app",
      tags: ["React", "Tailwind", "Node"],
    },
    {
      id: 3,
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
      <h1 className="dark:dark-text md:desktop">Projects ive worked on</h1>
      <div className="py-5 grid grid-cols-1 justify-center md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {projects}
      </div>
    </section>
  );
}

export default Projects;
