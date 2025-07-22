import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>🏋️‍♀️ FitTrack</h1>
      <p>Track your daily fitness activities</p>
      <button onClick={() => navigate('/home')} className="swipe-button">⬆️ Swipe Up to Start</button>
    </div>
  );
};

export default LandingPage;
