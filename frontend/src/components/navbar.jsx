import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">UMN Robot Sumo Club</div>
      <ul className="nav-links">
        <li>About</li>
        <li>Team</li>
        <li>Leaderboard</li>
        <li>Tutorials</li>
      </ul>
      <button className="join-button">Join Us!</button>
    </nav>
  );
};

export default Navbar;