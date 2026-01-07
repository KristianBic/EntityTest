export interface Turn {
  id: number;
  matchId: number;
  turnNumber: number;
  playerId: number;
  playerName: string;
  action: string;
  description: string;
  timestamp: string;
}

export const getTurnsByMatch = async (matchId: number): Promise<Turn[]> => {
  return Promise.resolve([]);
};

export const getTurn = async (id: number): Promise<Turn | null> => {
  return Promise.resolve(null);
};

export const executeTurn = async (
  matchId: number,
  playerId: number,
  action: string
): Promise<Turn> => {
  return Promise.resolve({
    id: 0,
    matchId,
    turnNumber: 0,
    playerId,
    playerName: '',
    action,
    description: '',
    timestamp: new Date().toISOString(),
  });
};
