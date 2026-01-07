import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Players from './pages/Players';
import PlayerDetails from './pages/PlayerDetails';
import Characters from './pages/Characters';
import Arena from './pages/Arena';
import MatchHistory from './pages/MatchHistory';
import Leaderboard from './pages/Leaderboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              Arena RPG
            </Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/players">Players</Link>
              <Link to="/characters">Characters</Link>
              <Link to="/arena">Arena</Link>
              <Link to="/matches">Match History</Link>
              <Link to="/leaderboard">Leaderboard</Link>
            </div>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/players/:id" element={<PlayerDetails />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/arena" element={<Arena />} />
            <Route path="/matches" element={<MatchHistory />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
