import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <h1>Welcome to Arena RPG</h1>
        <p className="home-subtitle">A turn-based arena combat game</p>
      </div>
      
      <div className="home-sections">
        <div className="home-section">
          <h2>Quick Actions</h2>
          <div className="action-grid">
            <Link to="/arena" className="action-card primary">
              <h3>Enter Arena</h3>
              <p>Start a new match</p>
            </Link>
            <Link to="/players" className="action-card">
              <h3>View Players</h3>
              <p>Browse all players</p>
            </Link>
            <Link to="/characters" className="action-card">
              <h3>Characters</h3>
              <p>Manage your characters</p>
            </Link>
            <Link to="/leaderboard" className="action-card">
              <h3>Leaderboard</h3>
              <p>Top players</p>
            </Link>
          </div>
        </div>

        <div className="home-section">
          <h2>Recent Activity</h2>
          <div className="activity-placeholder">
            <p>No recent matches</p>
            <Link to="/matches">View Match History</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
