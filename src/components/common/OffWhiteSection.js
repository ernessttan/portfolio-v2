import PropTypes from "prop-types";

function OffWhiteSection({ children }) {
  return (
    <section className="bg-offwhite -mx-8 px-8 dark:bg-lightblack">
      {children}
    </section>
  );
}

OffWhiteSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default OffWhiteSection;
