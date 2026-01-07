import './ActionButton.css';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

const ActionButton = ({ 
  label, 
  onClick, 
  disabled = false, 
  variant = 'primary',
  fullWidth = false 
}: ActionButtonProps) => {
  return (
    <button
      className={`action-button ${variant} ${fullWidth ? 'full-width' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ActionButton;
