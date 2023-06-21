export type Player = {
  id: number;
  name: string;
  isAlive: boolean;
  deaths: number;
  kills: number;
  score: number;
  isFriend: boolean;
};

export type Team = {
  players: Player[];
};

export enum Winner {
  FIRST_TEAM = "FIRST_TEAM",
  SECOND_TEAM = "SECOND_TEAM",
}

export type Match = {
  id: number;
  firstTeam: Team;
  secondTeam: Team;
  winner: Winner;
};
