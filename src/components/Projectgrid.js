import React from 'react';
import Card from './Card';
import projectData from '../projectData';

function ProjectGrid() {
  const projects = projectData.map((project) => (
    <Card
      key={project.id}
      imageUrl={project.imageUrl}
      title={project.title}
      description={project.description}
      url={project.url}
      githubUrl={project.githubUrl}
    />
  ));
  return (
    <section id="projects">
      <h1 className="text-4xl mb-5 md:text-5xl">Projects</h1>
      <div className="grid m-auto gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects}
      </div>
    </section>
  );
}

export default ProjectGrid;
