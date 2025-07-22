import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/daily')
      .then(res => setActivities(res.data))
      .catch(err => console.error(err));
  }, []);

  const totalSteps = activities.reduce((sum, a) => sum + (a.steps || 0), 0);
  const totalCalories = activities.reduce((sum, a) => sum + (a.calories || 0), 0);
  const totalDuration = activities.reduce((sum, a) => sum + (a.duration || 0), 0);

  return (
    <div className="page">
      <h2>Today's Summary</h2>
      <div className="summary-box">
        <p>🚶‍♂️ Steps: {totalSteps}</p>
        <p>🔥 Calories: {totalCalories}</p>
        <p>⏱ Duration: {totalDuration} mins</p>
      </div>
      <Navbar />
    </div>
  );
};

export default HomePage;
