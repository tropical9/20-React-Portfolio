import React from "react";
// import "../styles/Resume.css";
// import resume from "../assets/SharmainePinedaResume0423.pdf";

function Resume() {
  return (
    <section className="resume">
      <h2 className="resume-title">Resume</h2>
      <div className="resume-text">
        <p>
          Here's a list of my Professional Adventures. You can also download it{" "}
          {/* <a href={resume} target="_blank" rel="noreferrer">
            here
          </a> */}
          .
        </p>
      </div>
      <div className="resume-download">
        <div className="resume-icon"></div>
        <div className="download-link">
          {/* <a href={resume} target="_blank" rel="noreferrer">
            Download Resume
          </a> */}
        </div>
      </div>
      <div className="resume-skills">
        <h3 className="skills-title">Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node</li>
          <li>SQL</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
