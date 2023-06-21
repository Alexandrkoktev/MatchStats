import React from "react";
import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";
import { Team } from "../../../types/matchTypes";
import PlayerRow from "./PlayerRow";

type TeamContainerProps = {
  team: Team;
  isSecondTeam?: boolean;
};

const HEADER_CELLS = [
  ({ isSecondTeam }: { isSecondTeam?: boolean }) => (
    <TableCell align={isSecondTeam ? "right" : "left"}>{"Nickname"}</TableCell>
  ),
  ({ isSecondTeam }: { isSecondTeam?: boolean }) => (
    <TableCell align={isSecondTeam ? "left" : "right"}>{"Score"}</TableCell>
  ),
];

const TeamContainer = ({ isSecondTeam, team }: TeamContainerProps) => {
  const headerCells = isSecondTeam ? [...HEADER_CELLS].reverse() : HEADER_CELLS;

  return (
    <Box
      sx={{
        width: "fit-content",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: isSecondTeam ? "flex-end" : "flex-start",
        gap: 1,
        flexGrow: 1,
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} size="small">
          <TableHead>
            <TableRow>
              {headerCells.map((Cell) => (
                <Cell isSecondTeam={isSecondTeam} />
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {team.players.map((player) => (
              <PlayerRow player={player} isSecondTeam={isSecondTeam} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TeamContainer;
