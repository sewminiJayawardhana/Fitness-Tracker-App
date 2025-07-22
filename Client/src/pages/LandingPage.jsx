import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 className="landing-title">Fitness Tracker App</h1>
      <p className="landing-subtitle">Track your workouts, steps, and calories with ease</p>
      <button className="landing-button" onClick={() => navigate("/home")}>
        Swipe Up to Get Started ↑
      </button>
    </div>
  );
};

export default LandingPage;
