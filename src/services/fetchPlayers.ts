export interface IPlayer {
  colocacao: number;
  delta_mmr: number;
  last_games: number[];
  losses: number;
  nome: string;
  pontuacao: number;
  profile_icon_id: number;
  puuid: string;
  riot_id: string;
  streak: {
    tipo: string;
    valor: number;
  };
  ultima_atualização: string;
  winrate: number;
  wins: number;
}

interface ISystem {
  total_jogadores: number;
}

interface IResponse {
  players: IPlayer[];
  sistema: ISystem;
}

const fetchPlayers = async (): Promise<IResponse> => {
  try {
    const response = await fetch("https://arenaapi.zapto.org:3000/api/players");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch {
    throw new Error("Failed to fetch players");
  }
};

export default fetchPlayers;
