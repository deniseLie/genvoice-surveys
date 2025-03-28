import React from "react";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <h2 className="about-me-title">👋 About Me</h2>
        <p className="about-me-text">
          Hey, I'm <span className="highlight">Denise</span>, a Year 2 Computer Science student at SMU. My passions lie at the intersection of web development and music.
        </p>

        <div className="about-me-section">
          <h3>🚀 My Tech Journey</h3>
          <p>
            My web development journey started in high school when I took Harvard’s CS50 course. I completed all 12 weeks and labs, which sparked my passion for frontend development. I independently built a ReactJS registration website for a school event, achieving 100+ sign-ups.
          </p>
          <p>
            Since then, I've freelanced as a Shopify frontend developer, transforming a physical jewelry business into an interactive e-commerce platform. Later, I joined an emerging startup, where I developed a scalable React Native mobile app, integrating:
          </p>
          <ul>
            <li>🔐 JWT-based authentication</li>
            <li>💬 Real-time messaging</li>
            <li>💳 Stripe payment integration</li>
          </ul>
        </div>

        <div className="about-me-section">
          <h3>💡 Backend & Cloud Exposure</h3>
          <p>
            My backend journey began with a university project where I worked on Java Spring Boot APIs, deploying them via AWS microservices using Docker. Currently, I'm expanding my backend skills with Node.js & Express.js.
          </p>
        </div>

        <div className="about-me-section">
          <h3>🎵 Life Beyond Code</h3>
          <p>
            Music has been a big part of my life—I’ve been playing piano since age 4 and recently joined my university’s guitar club. 
          </p>
          <p>
            I also lead teams beyond tech! I was the Vice President of Music and now serve as the President of SMU Guitarissimo. Managing a club taught me team leadership, communication, and strategic decision-making.
          </p>
        </div>

        <div className="about-me-links">
          <a href="https://www.linkedin.com/in/denise-lie/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
