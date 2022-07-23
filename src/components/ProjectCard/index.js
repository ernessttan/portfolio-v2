/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";
import Tags from "./Tags";

function ProjectCard({
  title, description, imageUrl, codeUrl, projectUrl, tagsArr,
}) {
  return (
    <div className="w-full h-auto p-3 transform transition duration-500 hover:scale-105 cursor-pointer">
      <img className="object-cover shadow-xl mb-6 rounded h-auto" src={imageUrl} alt="project" />
      <h2 className="dark:dark-text md:desktop lg:desktop-large">{title}</h2>
      <p className="py-1 dark:dark-text md:desktop lg:desktop-large">{description}</p>
      <div className="flex gap-5 my-2">
        <a className="font-semibold hover:text-red hover:animate-pulse transition-color duration-500 delay-200 text-lg" target="_blank" href={projectUrl} rel="noreferrer">See it Live</a>
        <a className="font-semibold hover:text-orange hover:animate-pulse transition-color duration-500 delay-200 text-lg" target="_blank" href={codeUrl} rel="noreferrer">Code</a>
      </div>
      <Tags tagsArr={tagsArr} />
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  tagsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
