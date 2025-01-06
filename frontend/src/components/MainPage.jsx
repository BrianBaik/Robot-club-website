import React from 'react';
import './MainPage.css';


const MainPage = () => {
  return (
    <div className="main-page">
    
      <section className="intro">
        <h1>UMN ROBOT SUMO CLUB</h1>
        <p>The First Robot Sumo Club at UMN</p>
        <div className="intro-buttons">
          <button className="first-button">Join!</button>
          <button className="second-button">Learn More</button>
        </div>
      </section>

      <section className="activities">
        <h2>WHAT WE DO!</h2>
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

export default MainPage;