import React from 'react';
import './TutorialPage.css';

const TutorialPage = () => {
  return (
    <div className="tutorial-page">

      <section className="intro">
        <h1>UMN ROBOT SUMO CLUB TUTORIALS</h1>
        <p>Learn and build amazing projects with our step-by-step guides!</p>
      </section>

      <section className="tutorial">
        <h2>Arduino Project Hub</h2>
        <p>Explore Arduino tutorials and projects tailored for Robot Sumo enthusiasts.</p>
        <button className="tutorial-button">View Arduino Tutorials</button>
      </section>

      <section className="CAD-tutorial-section">
        <h2>CAD Tutorials</h2>
        <p>Learn how to design and simulate your robot using CAD tools.</p>
        <button className="tutorial-button">Start Learning CAD</button>
      </section>

      <section className="3D-tutorial-section">
        <h2>3D Printing in Anderson Labs</h2>
        <p>Discover how to use 3D printing resources at Anderson Labs for your projects.</p>
        <button className="tutorial-button">Learn About 3D Printing</button>
      </section>

      <footer className="footer">
        <h3>Connect with us!</h3>
        <div className="social-media-links">
          <div className="social-link">Instagram</div>
          <div className="social-link">LinkedIn</div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">UMN Robot Sumo Club</div>
        </div>
        
      </footer>

    </div>
  );
};

export default TutorialPage;
 