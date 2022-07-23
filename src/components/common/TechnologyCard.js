import PropTypes from "prop-types";

function TechnologyCard({ name }) {
  return (
    <div
      className="flex items-center h-32 w-32 bg-white rounded-lg shadow-lg p-5 shrink-0 md:h-40 md:w-40 lg:w-52 lg:h-52"
    >
      {
        name === ("javascript" || "jest") ? (<img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`} alt="devicon" />) : (<img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original-wordmark.svg`} alt="dev icon" />)
      }
    </div>
  );
}

TechnologyCard.propTypes = {
//   icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechnologyCard;
