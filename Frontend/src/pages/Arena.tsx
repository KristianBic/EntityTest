import { useState } from 'react';
import { getMatches, createMatch, startMatch, Match } from '../api/matchesApi';
import { executeTurn, Turn } from '../api/turnsApi';
import CharacterCard from '../components/CharacterCard';
import HealthBar from '../components/HealthBar';
import ActionButton from '../components/ActionButton';
import TurnLog from '../components/TurnLog';
import './Arena.css';

const Arena = () => {
  const [currentMatch, setCurrentMatch] = useState<Match | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [currentTurn, setCurrentTurn] = useState<number>(1);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);

  // Mock character data for display
  const player1Character = {
    id: 1,
    name: 'Warrior',
    className: 'Fighter',
    level: 5,
    health: 80,
    maxHealth: 100,
  };

  const player2Character = {
    id: 2,
    name: 'Mage',
    className: 'Wizard',
    level: 5,
    health: 60,
    maxHealth: 100,
  };

  const handleStartMatch = async () => {
    try {
      const match = await createMatch(1, 2);
      const startedMatch = await startMatch(match.id);
      setCurrentMatch(startedMatch);
      setTurns([]);
      setCurrentTurn(1);
      setIsPlayer1Turn(true);
    } catch (error) {
      console.error('Failed to start match:', error);
    }
  };

  const handleAction = async (action: string) => {
    if (!currentMatch) return;

    const playerId = isPlayer1Turn ? currentMatch.player1Id : currentMatch.player2Id;
    
    try {
      const turn = await executeTurn(currentMatch.id, playerId, action);
      setTurns([...turns, turn]);
      setCurrentTurn(currentTurn + 1);
      setIsPlayer1Turn(!isPlayer1Turn);
    } catch (error) {
      console.error('Failed to execute turn:', error);
    }
  };

  return (
    <div className="arena-page">
      <div className="page-header">
        <h1>Arena</h1>
        <p>Engage in turn-based combat</p>
      </div>

      {!currentMatch ? (
        <div className="arena-setup">
          <div className="setup-card">
            <h2>Start a New Match</h2>
            <p>Select your character and opponent to begin</p>
            <ActionButton
              label="Start Match"
              onClick={handleStartMatch}
              variant="primary"
              fullWidth
            />
          </div>
        </div>
      ) : (
        <div className="arena-battle">
          <div className="battle-header">
            <div className="match-info">
              <span>Match #{currentMatch.id}</span>
              <span className="turn-indicator">
                Turn {currentTurn} - {isPlayer1Turn ? 'Player 1' : 'Player 2'}
              </span>
            </div>
          </div>

          <div className="battle-arena">
            <div className="character-section">
              <CharacterCard
                id={player1Character.id}
                name={player1Character.name}
                className={player1Character.className}
                level={player1Character.level}
                health={player1Character.health}
                maxHealth={player1Character.maxHealth}
              />
              {isPlayer1Turn && (
                <div className="current-turn-badge">Your Turn</div>
              )}
            </div>

            <div className="vs-divider">VS</div>

            <div className="character-section">
              <CharacterCard
                id={player2Character.id}
                name={player2Character.name}
                className={player2Character.className}
                level={player2Character.level}
                health={player2Character.health}
                maxHealth={player2Character.maxHealth}
              />
              {!isPlayer1Turn && (
                <div className="current-turn-badge">Your Turn</div>
              )}
            </div>
          </div>

          <div className="battle-actions">
            <h3>Actions</h3>
            <div className="actions-grid">
              <ActionButton
                label="Attack"
                onClick={() => handleAction('attack')}
                disabled={!isPlayer1Turn}
                variant="primary"
              />
              <ActionButton
                label="Defend"
                onClick={() => handleAction('defend')}
                disabled={!isPlayer1Turn}
                variant="secondary"
              />
              <ActionButton
                label="Special"
                onClick={() => handleAction('special')}
                disabled={!isPlayer1Turn}
                variant="danger"
              />
            </div>
          </div>

          <div className="battle-log">
            <TurnLog turns={turns} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Arena;
