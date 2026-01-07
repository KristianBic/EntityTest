export interface Player {
  id: number;
  name: string;
  wins: number;
  losses: number;
  rating: number;
  createdAt: string;
}

export const getPlayers = async (): Promise<Player[]> => {
  return Promise.resolve([]);
};

export const getPlayer = async (id: number): Promise<Player | null> => {
  return Promise.resolve(null);
};

export const createPlayer = async (player: Omit<Player, 'id' | 'createdAt'>): Promise<Player> => {
  return Promise.resolve({
    id: 0,
    ...player,
    createdAt: new Date().toISOString(),
  });
};

export const updatePlayer = async (id: number, player: Partial<Player>): Promise<Player> => {
  return Promise.resolve({
    id,
    name: '',
    wins: 0,
    losses: 0,
    rating: 0,
    createdAt: new Date().toISOString(),
    ...player,
  });
};

export const deletePlayer = async (id: number): Promise<void> => {
  return Promise.resolve();
};
