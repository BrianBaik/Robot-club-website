import React from 'react';
import './MainPage.css';


const leaderboard = () => {
  return (
    <div className="leaderboard">
      <section className="intro">
        <h1>UMN ROBOT SUMO CLUB</h1>
        <h2>Leaderboard</h2>
      </section>
      <section className="table">
        <table>
            <tr>
                <th>Standing</th>
                <th>Robot Name</th>
                <th>Team Name</th>
                <th>Win/Loss</th>
            </tr>
            <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>4</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>5</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
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

export default leaderboard;