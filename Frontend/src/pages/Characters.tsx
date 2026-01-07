import { useEffect, useState } from 'react';
import { getCharacters, Character } from '../api/charactersApi';
import CharacterCard from '../components/CharacterCard';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div className="loading">Loading characters...</div>;
  }

  return (
    <div className="characters-page">
      <div className="page-header">
        <h1>Characters</h1>
        <p>Manage your combat characters</p>
      </div>

      {characters.length === 0 ? (
        <div className="empty-state">
          <p>No characters found</p>
        </div>
      ) : (
        <div className="characters-grid">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              className={character.className}
              level={character.level}
              health={character.health}
              maxHealth={character.maxHealth}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
