import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [summary, setSummary] = useState({
    steps: 0,
    calories: 0,
    workoutMinutes: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/activities/summary');
        setSummary(res.data);
      } catch (err) {
        console.error('Error fetching summary', err);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Today's Summary</h1>
        <div className="summary-box">
          <p><strong>🚶 Steps:</strong> {summary.steps}</p>
          <p><strong>🔥 Calories Burned:</strong> {summary.calories}</p>
          <p><strong>⏱ Workout Minutes:</strong> {summary.workoutMinutes}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
