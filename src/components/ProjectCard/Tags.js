/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";

function Tags({ tagsArr }) {
  const colors = ["purple", "pink", "yellow", "orange", "red", "offwhite"];
  const getRandomColor = () => `text-${colors[Math.floor(Math.random() * colors.length)]}`;

  const tags = tagsArr.map((title, index) => (
    <div key={index} className="tag">
      <p className={`${getRandomColor()} text-sm`}>{title}</p>
    </div>
  ));

  return (
    <div className="flex gap-3 max-w-full my-4">
      {tags}
    </div>
  );
}

Tags.propTypes = {
  tagsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
