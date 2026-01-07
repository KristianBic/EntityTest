import { useEffect, useState } from 'react';
import { getPlayers, Player } from '../api/playersApi';
import PlayerCard from '../components/PlayerCard';
import './Players.css';

const Players = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers();
        setPlayers(data);
      } catch (error) {
        console.error('Failed to fetch players:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return <div className="loading">Loading players...</div>;
  }

  return (
    <div className="players-page">
      <div className="page-header">
        <h1>Players</h1>
        <p>Browse all registered players</p>
      </div>

      {players.length === 0 ? (
        <div className="empty-state">
          <p>No players found</p>
        </div>
      ) : (
        <div className="players-grid">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              id={player.id}
              name={player.name}
              wins={player.wins}
              losses={player.losses}
              rating={player.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Players;
