import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

function Card(props) {
  const {
    imageUrl, title, description, githubUrl, url, tagsArr,
  } = props;

  const tags = tagsArr.map((tag) => (
    <Tag
      title={tag}
    />
  ));

  return (
    <div className="flex flex-col items-center mt-4 mb-4">
      <a href={url}>
        <img className="shadow-lg border border-black" src={imageUrl} alt="Project Mockup" />
        <div className="h-1/3">
          <p className="mt-3 mb-3 font-semibold text-lg">{title}</p>
          <p className="mt-3 mb-3 font-normal text-base">{description}</p>
          <a href={githubUrl}>
            <span className="link link-underline link-underline-green text-black">View Code</span>
          </a>
          <div className="mt-3 flex gap-4">
            {tags}
          </div>
        </div>
      </a>
    </div>

  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  tagsArr: PropTypes.arrayOf.isRequired,
};

export default Card;
