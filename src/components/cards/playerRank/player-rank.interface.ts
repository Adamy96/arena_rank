export interface IPlayerRankProps {
  rank: number;
  points: number;
  icon: number;
  user: string;
  wins: number;
  losses: number;
  winrate: number;
  lastChampions: number[];
  className?: string;
}
