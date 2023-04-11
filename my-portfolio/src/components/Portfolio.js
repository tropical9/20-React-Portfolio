import React from 'react';

const projects = [
  {
    name: 'Project Dos Equis',
    description: "This webpage was created for our bootcamp's first project. This will showcase our acquired skills and knowledge to build a web application from scratch. Our focus is to execute a design that solves a real-world problem by integrating data received from mutliple server-side API requests. This project was created using agile development methodologies and implementation of feature and bug fixes using Git branch workflow and pull requests.",
    image: 'https://github.com/nanea808/01-project-dosequis-api/blob/main/assets/screenshot.JPG?raw=true',
    github: 'https://github.com/',
    liveDemo: 'https://www.example.com/'
  },
  {
    name: 'Gamesphere',
    description: 'This project was created to demonstrate an important milestone in our full-stack bootcamp: Designing and building our first full-stack web application. We have designed and built an app using the MVC paradigm, created our own server-side API, added user authentiction and connected to a database.',
    image: 'https://github.com/ianm1837/gamesphere/blob/main/public/images/login.jpg?raw=true',
    github: 'https://github.com/',
    liveDemo: 'https://www.example.com/'
  },
  {
    name: 'JATE',
    description: 'This gist project was created for my coding bootdcamp. The goal of this challenge is to build a test editor that runs in the browser.It will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by browser. This application will also function online.',
    image: 'https://github.com/tropical9/19-PWA-Text-Editor/blob/main/client/src/images/logo.png?raw=true',
    github: 'https://github.com/',
    liveDemo: 'https://www.example.com/'
  },
  {
    name: 'Tech Blog',
    description: "This project was created for the week 14 challenge of my bootcamp. The goal of this challenge is to build a CMS style blog site similar to Wordpress site, where developers can publish their blog posts and comment on another developer's posts as well.",
    image: 'https://github.com/tropical9/14-Model-View-Controller-Tech-Blog/blob/main/assets/Homepage.jpg?raw=true',
    github: 'https://github.com/tropical9/14-Model-View-Controller-Tech-Blog',
    liveDemo: 'https://www.example.com/'
  },
  {
    name: 'Ecommerce Backend',
    description: 'This project was created for the week 13 challenge of my coding bootcamp. The goal of this challenge is to build the back end for an e-commerce site.    ',
    image: '',
    github: 'https://github.com/tropical9/13-Object-Relational-Mapping-Ecommerce-Backend',
    liveDemo: 'https://www.example.com/'
  },
  {
    name: 'Work Day Scheduler',
    description: 'This project was created for the Week 5 challenge of my coding bootcamp. The goal of this challenge is to create a simple calendar application that allows a user to sace enets for each hour of the day. This app will run in the browser and feature a dynamically updated HTML and CSS powered by jQuery.',
    image: 'https://courses.bootcampspot.com/courses/2756/files/2219133/preview',
    github: 'https://github.com/',
    liveDemo: 'https://www.example.com/'
  }
];

function Portfolio() {
  return (
    <section className=''>
      <h2>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
                <div className="mt-4 flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md">GitHub</a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
