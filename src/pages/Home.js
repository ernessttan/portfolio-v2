/* eslint-disable react/no-array-index-key */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/layout/Section";
import LightSection from "../components/layout/LightSection";
import TechnologyCard from "../components/TechnologyCard";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const navigate = useNavigate();
  const technologies = ["react", "webpack", "tailwindcss", "nodejs", "express", "mongodb", "python", "npm", "javascript", "git"];
  const [projectData, setProjectData] = useState();

  const handleScroll = (e) => {
    const { value } = e.currentTarget;
    const techCarousel = document.getElementById("techCarousel");
    if (value === "left") {
      techCarousel.scrollLeft -= 300;
    } else {
      techCarousel.scrollLeft += 300;
    }
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("https://ernesttan-portfolio.herokuapp.com/projects");
        const responseData = await response.json();
        setProjectData(responseData.projects);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      <Section className="py-8 md:py-14 md:flex md:items-center md:gap-24 lg:py-20">
        <img className="rounded-full h-52 w-52 md:order-2 md:h-80 md:w-80 lg:h-96 lg:w-96" src="/images/ernest.jpeg" alt="ernest hero" />
        <div className="my-5 md:order-1">
          <h1 className="dark:dark-text md:desktop lg:desktop-large">Hey there! Im Ernest</h1>
          <p className="py-3 dark:dark-text md:desktop lg:desktop-large">
            I am a software engineer from Singapore.
            I am senior at Columbia University majoring in Computer Science.
            I am currently looking for full time opportunities.
          </p>
          <button onClick={() => navigate("/contact")} className="action-button transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:text-orange duration-300 mt-5 md:desktop" type="button">
            <p className="text-offwhite">Hire Me</p>
          </button>
        </div>
      </Section>
      <LightSection>
        <h1 className="dark:dark-text md:desktop lg:desktop-large">Technologies I Use</h1>
        <p className="py-2 dark:dark-text md:desktop lg:desktop-large">
          {/* I started programming when I started college wher I learned the fundamentals of */}
        </p>
        <div className="flex items-center gap-5">
          <button onClick={handleScroll} type="button" value="left" className="hidden w-16 h-16 dark:text-offwhite md:block">
            <ChevronLeftIcon />
          </button>
          <div className="py-5 flex items-center gap-2 overflow-x-scroll md:overflow-hidden w-full" id="techCarousel">
            { technologies.map((technology, index) => (
              <TechnologyCard
                key={index}
                name={technology}
              />
            ))}
          </div>
          <button onClick={handleScroll} type="button" value="right" className="hidden w-16 h-16 dark:text-offwhite  md:block">
            <ChevronRightIcon />
          </button>
        </div>
      </LightSection>
      <Section className="dark:dark-text md:py-14 lg:py-20">
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
      </Section>
    </>
  );
}

export default Home;
