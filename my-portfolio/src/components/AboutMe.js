import React from 'react';
// import profilePic from '../assets/images/profile-pic.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2>Let's get to know each other</h2>
      <div className="profile-pic-container">
        {/* <img src={profilePic} alt="Profile" /> */}
      </div>
      <p>
      Hello, and welcome to my portfolio website! My name is Sharmaine, and I am a web developer with a passion for creating beautiful, responsive, and user-friendly websites.
My approach to web development is rooted in understanding the needs of my clients and creating customized solutions that are tailored to their unique requirements. I am always up for a challenge and love working on projects that push the boundaries of what is possible.
So whether you are looking to create a new website from scratch, revamp an existing one, or simply need some technical assistance, I am here to help. Please feel free to explore my portfolio and get in touch with me to discuss your project.
      </p>
    </section>
  );
}

export default AboutMe;
