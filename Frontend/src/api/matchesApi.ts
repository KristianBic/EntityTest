export interface Match {
  id: number;
  player1Id: number;
  player2Id: number;
  player1Name: string;
  player2Name: string;
  winnerId: number | null;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: string;
  completedAt: string | null;
}

export const getMatches = async (): Promise<Match[]> => {
  return Promise.resolve([]);
};

export const getMatch = async (id: number): Promise<Match | null> => {
  return Promise.resolve(null);
};

export const createMatch = async (player1Id: number, player2Id: number): Promise<Match> => {
  return Promise.resolve({
    id: 0,
    player1Id,
    player2Id,
    player1Name: '',
    player2Name: '',
    winnerId: null,
    status: 'pending',
    createdAt: new Date().toISOString(),
    completedAt: null,
  });
};

export const startMatch = async (id: number): Promise<Match> => {
  return Promise.resolve({
    id,
    player1Id: 0,
    player2Id: 0,
    player1Name: '',
    player2Name: '',
    winnerId: null,
    status: 'in_progress',
    createdAt: new Date().toISOString(),
    completedAt: null,
  });
};

export const endMatch = async (id: number, winnerId: number): Promise<Match> => {
  return Promise.resolve({
    id,
    player1Id: 0,
    player2Id: 0,
    player1Name: '',
    player2Name: '',
    winnerId,
    status: 'completed',
    createdAt: new Date().toISOString(),
    completedAt: new Date().toISOString(),
  });
};
