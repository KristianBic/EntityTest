export interface Character {
  id: number;
  name: string;
  className: string;
  level: number;
  health: number;
  maxHealth: number;
  playerId: number;
}

export const getCharacters = async (): Promise<Character[]> => {
  return Promise.resolve([]);
};

export const getCharacter = async (id: number): Promise<Character | null> => {
  return Promise.resolve(null);
};

export const createCharacter = async (character: Omit<Character, 'id'>): Promise<Character> => {
  return Promise.resolve({
    id: 0,
    ...character,
  });
};

export const updateCharacter = async (id: number, character: Partial<Character>): Promise<Character> => {
  return Promise.resolve({
    id,
    name: '',
    className: '',
    level: 1,
    health: 100,
    maxHealth: 100,
    playerId: 0,
    ...character,
  });
};

export const deleteCharacter = async (id: number): Promise<void> => {
  return Promise.resolve();
};
