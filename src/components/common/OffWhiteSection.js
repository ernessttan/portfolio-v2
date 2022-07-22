import PropTypes from "prop-types";

function OffWhiteSection({ children }) {
  return (
    <section className="bg-offwhite -mx-8 p-8 dark:bg-lightblack md:-mx-14 md:p-14">
      {children}
    </section>
  );
}

OffWhiteSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default OffWhiteSection;
