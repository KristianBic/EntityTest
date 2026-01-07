export interface PlayerStats {
  playerId: number;
  playerName: string;
  wins: number;
  losses: number;
  winRate: number;
  rating: number;
  totalMatches: number;
}

export interface CharacterStats {
  characterId: number;
  characterName: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  averageDamage: number;
}

export interface LeaderboardEntry {
  rank: number;
  playerId: number;
  playerName: string;
  rating: number;
  wins: number;
  losses: number;
}

export const getPlayerStats = async (playerId: number): Promise<PlayerStats | null> => {
  return Promise.resolve(null);
};

export const getCharacterStats = async (characterId: number): Promise<CharacterStats | null> => {
  return Promise.resolve(null);
};

export const getLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  return Promise.resolve([]);
};
