import { useEffect, useState } from 'react';
import { getMatches, Match } from '../api/matchesApi';
import MatchCard from '../components/MatchCard';
import './MatchHistory.css';

const MatchHistory = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getMatches();
        setMatches(data);
      } catch (error) {
        console.error('Failed to fetch matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return <div className="loading">Loading match history...</div>;
  }

  return (
    <div className="match-history-page">
      <div className="page-header">
        <h1>Match History</h1>
        <p>View all past and current matches</p>
      </div>

      {matches.length === 0 ? (
        <div className="empty-state">
          <p>No matches found</p>
        </div>
      ) : (
        <div className="matches-list">
          {matches.map((match) => (
            <MatchCard
              key={match.id}
              id={match.id}
              player1Name={match.player1Name}
              player2Name={match.player2Name}
              winnerId={match.winnerId}
              status={match.status}
              createdAt={match.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchHistory;
