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
        <div className="tutorial-link">
          <a href="https://projecthub.arduino.cc/lakshyajhalani56/l298n-motor-driver-arduino-motors-motor-driver-l298n-7e1b3b" target="_blank" rel="noopener noreferrer">
            <img src="/images/L298N.jpg" alt="L298N Motor Driver" className="thumbnail" />
            <p>L298N Motor Driver</p>
          </a>
        </div>
        <div className="tutorial-link">
          <a href="https://docs.arduino.cc/tutorials/nano/nano-getting-started/" target="_blank" rel="noopener noreferrer">
            <img src="/images/ArduinoNano.jpg" alt="Arduino Nano" className="thumbnail" />
            <p>Arduino Nano</p>
          </a>
        </div>
        <div className="tutorial-link">
          <a href="https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/" target="_blank" rel="noopener noreferrer">
            <img src="/images/HCSR04.jpg" alt="HC-SR04 Ultrasonic Distance Sensor" className="thumbnail" />
            <p>HC-SR04 Ultrasonic Distance Sensor</p>
          </a>
        </div>
        <div className="tutorial-link">
          <a href="https://projecthub.arduino.cc/Isaac100/getting-started-with-the-hc-sr04-ultrasonic-sensor-7cabe1" target="_blank" rel="noopener noreferrer">
            <img src="/images/HCSR04GettingStarted.jpg" alt="Getting Started with HC-SR04" className="thumbnail" />
            <p>Getting Started with HC-SR04</p>
          </a>
        </div>
        <div className="tutorial-link">
          <a href="https://projecthub.arduino.cc/abhilashpatel121/using-ir-sensor-tcrt-5000-with-arduino-60cc92" target="_blank" rel="noopener noreferrer">
            <img src="/images/TCRT5000.jpg" alt="TCRT 5000 IR Sensor" className="thumbnail" />
            <p>TCRT 5000 IR Sensor</p>
          </a>
        </div>
        <div className="tutorial-link">
          <a href="https://fablab.ruc.dk/trigger-action-by-sound-with-arduino/" target="_blank" rel="noopener noreferrer">
            <img src="/images/MAX4466.jpg" alt="MAX4466" className="thumbnail" />
            <p>MAX4466</p>
          </a>
        </div>
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
