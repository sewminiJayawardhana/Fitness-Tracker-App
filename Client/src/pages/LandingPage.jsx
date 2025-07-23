import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();


  return (
    <div className="landing-container">
      <h2 className="landing-title">Empower Your Fitness Journey with Smart Tracking and Real Progress. ⏱</h2>
      <p className="landing-subtitle">Track your workouts, steps, and calories with ease.All in one place.Stay consistent, stay motivated, and reach your fitness goals faster.🎯🚶</p>
      <button className="landing-button" onClick={() => navigate("/home")}>
        Swipe Up to Get Started 
      </button>
    </div>
  );
};

export default LandingPage;
