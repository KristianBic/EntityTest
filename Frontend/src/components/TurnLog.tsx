import './TurnLog.css';

interface Turn {
  id: number;
  turnNumber: number;
  playerName: string;
  action: string;
  description: string;
  timestamp: string;
}

interface TurnLogProps {
  turns: Turn[];
}

const TurnLog = ({ turns }: TurnLogProps) => {
  return (
    <div className="turn-log">
      <h3 className="turn-log-title">Turn History</h3>
      <div className="turn-log-content">
        {turns.length === 0 ? (
          <div className="turn-log-empty">No turns yet</div>
        ) : (
          turns.map((turn) => (
            <div key={turn.id} className="turn-item">
              <div className="turn-header">
                <span className="turn-number">Turn {turn.turnNumber}</span>
                <span className="turn-player">{turn.playerName}</span>
                <span className="turn-time">
                  {new Date(turn.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="turn-action">{turn.action}</div>
              <div className="turn-description">{turn.description}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TurnLog;
