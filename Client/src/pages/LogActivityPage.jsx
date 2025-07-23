import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './LogActivityPage.css';

const LogActivityPage = () => {
  const [formData, setFormData] = useState({
    steps: '',
    calories: '',
    workoutMinutes: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { steps, calories, workoutMinutes } = formData;

    if (!steps || !calories || !workoutMinutes) {
      setMessage('Please fill all fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/activities/log', {
        steps: Number(steps),
        calories: Number(calories),
        workoutMinutes: Number(workoutMinutes),
      });

      setMessage('Activity logged successfully!');
    } catch (error) {
      setMessage('Error logging activity.');
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="log-container">
        <h1 className='text-black dark:text-white font-mono'>Log Your Activity</h1>
        <form className="log-form" onSubmit={handleSubmit}>
          <label>
            Steps:
            <input
              type="number"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              min="0"
            />
          </label>
          <label>
            Calories Burned:
            <input
              type="number"
              name="calories"
              value={formData.calories}
              onChange={handleChange}
              min="0"
            />
          </label>
          <label>
            Workout Minutes:
            <input
              type="number"
              name="workoutMinutes"
              value={formData.workoutMinutes}
              onChange={handleChange}
              min="0"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">*{message}</p>}
      </div>
    </div>
  );
};

export default LogActivityPage;
