import { StatsClient } from "../axios";
import { Match } from "../../types/matchTypes";

export const getMatchStats = async (id: number) => {
  const { data } = await StatsClient.get<Match>(`matches/${id}`);
  return data;
};
