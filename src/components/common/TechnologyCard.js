import PropTypes from "prop-types";

function TechnologyCard({ name }) {
  return (
    <div className="flex items-center h-32 w-32 bg-white rounded-md shadow p-5 shrink-0">
      <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original-wordmark.svg`} alt="dev icon" />
    </div>
  );
}

TechnologyCard.propTypes = {
//   icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechnologyCard;
