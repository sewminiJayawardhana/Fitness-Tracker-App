import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './ProgressPage.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressPage = () => {
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/activities/weekly');
        setWeeklyData(res.data);
      } catch (err) {
        console.error('Error fetching weekly data', err);
      }
    };

    fetchWeeklyData();
  }, []);

  // Prepare data for chart
  const labels = weeklyData.map(item => item.date);
  const stepsData = weeklyData.map(item => item.steps);
  const caloriesData = weeklyData.map(item => item.calories);
  const workoutData = weeklyData.map(item => item.workoutMinutes);

  const data = {
    labels,
    datasets: [
      {
        label: 'Steps',
        data: stepsData,
        borderColor: 'rgba(40, 167, 69, 1)',
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
      },
      {
        label: 'Calories Burned',
        data: caloriesData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Workout Minutes',
        data: workoutData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Last 7 Days Fitness Progress',
      },
    },
  };

  return (
    <div>
      <Navbar />
      <div className="progress-container">
        <h1>Weekly Progress</h1>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default ProgressPage;
