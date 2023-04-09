import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2023 My Portfolio</p>
        <div className="social-links">
          <a href="https://github.com/my-github-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/my-linkedin-profile/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/my-twitter-profile/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
