import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <main className="px-5 dark:bg-black md:px-14">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
