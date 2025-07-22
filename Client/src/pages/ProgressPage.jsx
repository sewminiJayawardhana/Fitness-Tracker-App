import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Navbar from '../components/Navbar';

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ProgressPage = () => {
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/weekly')
      .then(res => setWeeklyData(res.data))
      .catch(err => console.error(err));
  }, []);

  const summary = {};
  weeklyData.forEach(act => {
    const date = new Date(act.date).toLocaleDateString();
    if (!summary[date]) {
      summary[date] = { steps: 0, calories: 0 };
    }
    summary[date].steps += act.steps || 0;
    summary[date].calories += act.calories || 0;
  });

  const labels = Object.keys(summary);
  const steps = labels.map(d => summary[d].steps);
  const calories = labels.map(d => summary[d].calories);

  const data = {
    labels,
    datasets: [
      { label: 'Steps', data: steps, borderColor: 'blue', tension: 0.4 },
      { label: 'Calories', data: calories, borderColor: 'red', tension: 0.4 }
    ]
  };

  return (
    <div className="page">
      <h2>Weekly Progress</h2>
      <Line data={data} />
      <Navbar />
    </div>
  );
};

export default ProgressPage;
