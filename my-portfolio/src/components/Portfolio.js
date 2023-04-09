import React from 'react';
import Project from './Project';
// import project1Image from '../assets/images/project1.png';
// import project2Image from '../assets/images/project2.png';
// import project3Image from '../assets/images/project3.png';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae leo lectus.',
      liveLink: 'https://project1.com',
      codeLink: 'https://github.com/my-github-profile/project1',
    //   image: project1Image
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae leo lectus.',
      liveLink: 'https://project2.com',
      codeLink: 'https://github.com/my-github-profile/project2',
    //   image: project2Image
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae leo lectus.',
      liveLink: 'https://project3.com',
      codeLink: 'https://github.com/my-github-profile/project3',
    //   image: project3Image
    }
  ];

  return (
    <section className="portfolio">
      <h2>Explore my work</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
