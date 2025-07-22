import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const LogActivityPage = () => {
  const [form, setForm] = useState({
    type: '',
    duration: '',
    calories: '',
    steps: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/log', form);
    alert('Activity logged!');
    setForm({ type: '', duration: '', calories: '', steps: '' });
  };

  return (
    <div className="page">
      <h2>Log Activity</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="type" placeholder="Exercise Type" value={form.type} onChange={handleChange} required />
        <input type="number" name="duration" placeholder="Duration (mins)" value={form.duration} onChange={handleChange} />
        <input type="number" name="calories" placeholder="Calories Burned" value={form.calories} onChange={handleChange} />
        <input type="number" name="steps" placeholder="Steps Taken" value={form.steps} onChange={handleChange} />
        <button type="submit">Log</button>
      </form>
      <Navbar />
    </div>
  );
};

export default LogActivityPage;
