import React from 'react';
import profilePic from '../assets/images/profile.jpg';
import Portfolio from './Portfolio';
import Contact from './Contact';

function AboutMe() {
  return (
    <section className="py-12 bg-emerald">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Let's get to know each other</h2>
        <div className="flex justify-center items-center mb-8">
          <img src={profilePic} alt="Profile" className="rounded-full h-32 w-32 mr-4" />
          <p className="text-xl">
            Hello, and welcome to my portfolio website! My name is Sharmaine, and I am a web developer with a passion for creating beautiful, responsive, and user-friendly websites.
            My approach to web development is rooted in understanding the needs of my clients and creating customized solutions that are tailored to their unique requirements. I am always up for a challenge and love working on projects that push the boundaries of what is possible.
            So whether you are looking to create a new website from scratch, revamp an existing one, or simply need some technical assistance, I am here to help. Please feel free to explore my portfolio and get in touch with me to discuss your project.
          </p>
        </div>
      </div>
      <div><Portfolio/></div>
      <div><Contact/></div>
    </section>
  );
}

export default AboutMe;
