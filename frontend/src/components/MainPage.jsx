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
        </div>
      </section>

      <section className="activities">
        <h2>WHAT WE DO!</h2>
      </section>

      <section className="about-section">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        We are the first Robot Sumo Club at UMN!
        </p>
         <p className="about-text">
        Our <span className="about-highlight">mission</span> is 
        </p>
   
    </section>

      <footer className="footer">
      <h3>Connect with us</h3>
        <div className="social-links">
          <div className="social-link">Instagram</div>
          <div className="social-link">LinkedIn</div>
          <div className="social-link">Discord</div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">Robot Sumo Club</div>
          <div className="footer-nav">
            <span>Instagram</span>
            <span>Discord</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;