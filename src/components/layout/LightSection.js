import PropTypes from "prop-types";

function LightSection({ children }) {
  return (
    <section className="bg-offwhite -mx-5 px-5 dark:bg-lightblack md:-mx-14 md:p-14">
      {children}
    </section>
  );
}

LightSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LightSection;
