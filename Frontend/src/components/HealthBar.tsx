import './HealthBar.css';

interface HealthBarProps {
  current: number;
  max: number;
  label?: string;
  showText?: boolean;
}

const HealthBar = ({ current, max, label, showText = true }: HealthBarProps) => {
  const percentage = Math.max(0, Math.min(100, (current / max) * 100));
  const isLow = percentage < 30;
  const isMedium = percentage >= 30 && percentage < 60;

  return (
    <div className="health-bar-wrapper">
      {label && <div className="health-bar-label">{label}</div>}
      <div className="health-bar-container">
        <div 
          className={`health-bar-fill ${isLow ? 'low' : isMedium ? 'medium' : 'high'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showText && (
        <div className="health-bar-text">
          {current} / {max} ({Math.round(percentage)}%)
        </div>
      )}
    </div>
  );
};

export default HealthBar;
