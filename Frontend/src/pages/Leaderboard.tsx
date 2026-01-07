import { useEffect, useState } from 'react';
import { getLeaderboard, LeaderboardEntry } from '../api/statsApi';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        setLeaderboard(data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div className="loading">Loading leaderboard...</div>;
  }

  return (
    <div className="leaderboard-page">
      <div className="page-header">
        <h1>Leaderboard</h1>
        <p>Top players by rating</p>
      </div>

      {leaderboard.length === 0 ? (
        <div className="empty-state">
          <p>No leaderboard data available</p>
        </div>
      ) : (
        <div className="leaderboard-table">
          <div className="table-header">
            <div className="rank-col">Rank</div>
            <div className="name-col">Player</div>
            <div className="rating-col">Rating</div>
            <div className="wins-col">Wins</div>
            <div className="losses-col">Losses</div>
            <div className="winrate-col">Win Rate</div>
          </div>
          {leaderboard.map((entry) => {
            const winRate = entry.wins + entry.losses > 0
              ? ((entry.wins / (entry.wins + entry.losses)) * 100).toFixed(1)
              : '0.0';
            
            return (
              <div key={entry.playerId} className="table-row">
                <div className="rank-col">
                  <span className={`rank-badge ${entry.rank <= 3 ? 'top' : ''}`}>
                    {entry.rank}
                  </span>
                </div>
                <div className="name-col">{entry.playerName}</div>
                <div className="rating-col">{entry.rating}</div>
                <div className="wins-col">{entry.wins}</div>
                <div className="losses-col">{entry.losses}</div>
                <div className="winrate-col">{winRate}%</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
