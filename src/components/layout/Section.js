import PropTypes from "prop-types";

function Section({ children, className }) {
  return (
    <section className={`${className} py-5`}>
      {children}
    </section>
  );
}

Section.defaultProps = {
  className: "",
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
