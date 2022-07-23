import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";

function Projects() {
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("https://ernesttan-portfolio.herokuapp.com/projects");
        const responseData = await response.json();
        console.log(responseData.projects);
        setProjectData(responseData.projects);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProjects();
  }, []);

  return (
    <section className="dark:dark-text md:py-14 lg:py-20">
      <h1 className="dark:dark-text md:desktop lg:desktop-large">Projects ive worked on</h1>
      {
        projectData && (
        <div className="py-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {
            projectData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                projectUrl={project.projectUrl}
                codeUrl={project.codeUrl}
                tagsArr={JSON.parse(project.tags)}
              />
            ))
          }
        </div>
        )
      }

    </section>
  );
}

export default Projects;
