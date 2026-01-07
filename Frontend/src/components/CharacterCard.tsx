import './CharacterCard.css';

interface CharacterCardProps {
  id: number;
  name: string;
  className: string;
  level: number;
  health: number;
  maxHealth: number;
}

const CharacterCard = ({ id, name, className, level, health, maxHealth }: CharacterCardProps) => {
  return (
    <div className="character-card">
      <div className="character-card-header">
        <h3>{name}</h3>
        <span className="level">Lv. {level}</span>
      </div>
      <div className="character-class">{className}</div>
      <div className="character-health">
        <HealthBar current={health} max={maxHealth} />
        <span className="health-text">{health} / {maxHealth}</span>
      </div>
    </div>
  );
};

// Simple HealthBar component for use within CharacterCard
const HealthBar = ({ current, max }: { current: number; max: number }) => {
  const percentage = Math.max(0, Math.min(100, (current / max) * 100));
  
  return (
    <div className="health-bar-container">
      <div 
        className="health-bar-fill" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default CharacterCard;
