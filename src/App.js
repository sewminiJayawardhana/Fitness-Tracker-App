import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import LogActivityPage from './pages/LogActivityPage';
import ProgressPage from './pages/ProgressPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/log" element={<LogActivityPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </Router>
  );
}

export default App;
