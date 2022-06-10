import React from 'react';
import PropTypes from 'prop-types';

function Tag({ title }) {
  return (
    <div className="p-2 pl-3 pr-3 border border-forestgreen text-forestgreen rounded hover:text-white hover:bg-forestgreen">
      {title}
    </div>
  );
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tag;
