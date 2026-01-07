import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlayer, Player } from '../api/playersApi';
import { getPlayerStats, PlayerStats } from '../api/statsApi';
import './PlayerDetails.css';

const PlayerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [player, setPlayer] = useState<Player | null>(null);
  const [stats, setStats] = useState<PlayerStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        const playerData = await getPlayer(parseInt(id));
        const statsData = await getPlayerStats(parseInt(id));
        setPlayer(playerData);
        setStats(statsData);
      } catch (error) {
        console.error('Failed to fetch player data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading player details...</div>;
  }

  if (!player) {
    return (
      <div className="error-state">
        <p>Player not found</p>
        <Link to="/players">Back to Players</Link>
      </div>
    );
  }

  return (
    <div className="player-details">
      <div className="page-header">
        <Link to="/players" className="back-link">← Back to Players</Link>
        <h1>{player.name}</h1>
      </div>

      <div className="player-details-content">
        <div className="player-info-card">
          <h2>Player Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Rating</span>
              <span className="info-value">{player.rating}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Wins</span>
              <span className="info-value">{player.wins}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Losses</span>
              <span className="info-value">{player.losses}</span>
            </div>
            {stats && (
              <>
                <div className="info-item">
                  <span className="info-label">Win Rate</span>
                  <span className="info-value">{(stats.winRate * 100).toFixed(1)}%</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Total Matches</span>
                  <span className="info-value">{stats.totalMatches}</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="player-actions-card">
          <h2>Actions</h2>
          <div className="actions-list">
            <Link to="/characters" className="action-link">
              View Characters
            </Link>
            <Link to="/matches" className="action-link">
              View Match History
            </Link>
            <Link to="/arena" className="action-link primary">
              Challenge to Arena
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
