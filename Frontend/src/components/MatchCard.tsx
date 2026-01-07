import { Link } from 'react-router-dom';
import './MatchCard.css';

interface MatchCardProps {
  id: number;
  player1Name: string;
  player2Name: string;
  winnerId: number | null;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: string;
}

const MatchCard = ({ id, player1Name, player2Name, winnerId, status, createdAt }: MatchCardProps) => {
  const statusColors = {
    pending: '#f39c12',
    in_progress: '#3498db',
    completed: '#27ae60'
  };

  return (
    <Link to={`/matches/${id}`} className="match-card">
      <div className="match-card-header">
        <span className="match-id">Match #{id}</span>
        <span 
          className="match-status" 
          style={{ backgroundColor: statusColors[status] }}
        >
          {status.replace('_', ' ').toUpperCase()}
        </span>
      </div>
      <div className="match-players">
        <div className="player-info">
          <span className="player-name">{player1Name}</span>
          {winnerId === 1 && <span className="winner-badge">Winner</span>}
        </div>
        <span className="vs">VS</span>
        <div className="player-info">
          <span className="player-name">{player2Name}</span>
          {winnerId === 2 && <span className="winner-badge">Winner</span>}
        </div>
      </div>
      <div className="match-date">{new Date(createdAt).toLocaleDateString()}</div>
    </Link>
  );
};

export default MatchCard;
