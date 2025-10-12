import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">PosturePulse</div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Improve Your Posture While You Work</h1>
        

        {/* Analytics Button */}
        <div className="button-wrapper">
          <Link to="/analytics" className="analytics-button">
            View Posture Analytics
          </Link>
        </div>
      </section>
      

{/* NEW: Start Button */}
<div className="start-button-wrapper">
  <button className="start-button">START</button>
</div>


      {/* Info Section */}
      <section className="info">
        <div className="info-block">
          <h2>How it Works</h2>
          <ul>
            <li>Real-time posture tracking</li>
            <li>Instant feedback</li>
            <li>Personalized guidance</li>
            <li>Progress tracking</li>
          </ul>
        </div>

        <div className="info-block">
          <h2>Why Posture Matters</h2>
          <p>
            <strong>65</strong>% of desk workers develop back pain due to poor posture, and <strong>42–63%</strong> experience neck strain annually, leading to discomfort and lost productivity. <strong>PosturePulse</strong> helps prevent these issues.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} PosturePulse. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
