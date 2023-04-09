import React from 'react';

function Project(props) {
  return (
    <div className="project">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="links">
        <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
