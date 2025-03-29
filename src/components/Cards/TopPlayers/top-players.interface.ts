export interface IPlayerRankProps {
  rank: 1 | 2 | 3;
  points: number;
  icon: number;
  user: string;
  wins: number;
  losses: number;
  winrate: number;
  lastChampions: number[];
  className?: string;
}
