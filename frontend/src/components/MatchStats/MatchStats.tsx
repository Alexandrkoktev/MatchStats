import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getMatchStats } from "../../services/matchStats/matchStatsService";
import { Match, Winner } from "../../types/matchTypes";
import TeamContainer from "./TeamContainer/TeamContainer";
import { Colors } from "../../types/colors";

const MatchStats = () => {
  const [match, setMatch] = useState<null | Match>(null);
  useEffect(() => {
    getMatchStats(1).then((a) => setMatch(a));
  }, []);
  if (!match) return null;
  const { winner } = match;
  const isFirstTeamWin = winner === Winner.FIRST_TEAM;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: isFirstTeamWin ? "flex-start" : "flex-end",
          background: `linear-gradient(to ${
            isFirstTeamWin ? "left" : "right"
          }, rgba(${Colors.GREEN.rgb},0), rgba(${Colors.GREEN.rgb},1))`,
          mb: "10px",
          padding: "0px 10px 0px 10px",
        }}
      >
        <Typography variant="h4">{`${
          isFirstTeamWin ? "First" : "Second"
        } team victory`}</Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          gap: "100px",
        }}
      >
        <TeamContainer team={match.firstTeam} />
        <TeamContainer team={match.secondTeam} isSecondTeam />
      </Box>
    </>
  );
};

export default MatchStats;
