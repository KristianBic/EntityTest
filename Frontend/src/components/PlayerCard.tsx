import { Link } from 'react-router-dom';
import './PlayerCard.css';

interface PlayerCardProps {
  id: number;
  name: string;
  wins: number;
  losses: number;
  rating: number;
}

const PlayerCard = ({ id, name, wins, losses, rating }: PlayerCardProps) => {
  return (
    <Link to={`/players/${id}`} className="player-card">
      <div className="player-card-header">
        <h3>{name}</h3>
        <span className="rating">Rating: {rating}</span>
      </div>
      <div className="player-card-stats">
        <div className="stat">
          <span className="stat-label">Wins:</span>
          <span className="stat-value">{wins}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Losses:</span>
          <span className="stat-value">{losses}</span>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;
