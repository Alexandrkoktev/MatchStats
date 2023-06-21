import React, { useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import { Player } from "../../../types/matchTypes";
import PlayerInfoTooltip from "./PlayerInfoTooltip";
import { Colors } from "../../../types/colors";

type TeamContainerProps = {
  player: Player;
  isSecondTeam?: boolean;
};

type CellProps = Pick<Player, "name" | "score"> & {
  isSecondTeam?: boolean;
};

const PLAYER_CELLS = [
  ({ name, isSecondTeam }: CellProps) => (
    <TableCell
      align={isSecondTeam ? "right" : "left"}
      sx={{
        height: "auto !important",
      }}
    >
      {name}
    </TableCell>
  ),
  ({ score, isSecondTeam }: CellProps) => (
    <TableCell
      align={isSecondTeam ? "left" : "right"}
      sx={{
        height: "auto !important",
      }}
    >
      {score}
    </TableCell>
  ),
];

const PlayerRow = ({ isSecondTeam, player }: TeamContainerProps) => {
  const rowColor = player.isAlive ? Colors.GREEN.rgb : Colors.RED.rgb;
  const [isSelected, setIsSelected] = useState(false);
  const rowBackground = `linear-gradient(to ${
    !isSecondTeam ? "right" : "left"
  }, rgba(${rowColor},1), rgba(${rowColor},0))`;
  const playerCells = isSecondTeam ? [...PLAYER_CELLS].reverse() : PLAYER_CELLS;

  return (
    <PlayerInfoTooltip
      player={player}
      isSecondTeam={isSecondTeam}
      onChange={setIsSelected}
    >
      <TableRow
        sx={{
          background: rowBackground,
          height: "10px",
          filter: isSelected ? "brightness(50%)" : null,
        }}
      >
        {playerCells.map((Cell) => (
          <Cell {...player} isSecondTeam={isSecondTeam} />
        ))}
      </TableRow>
    </PlayerInfoTooltip>
  );
};

export default PlayerRow;
