import React, { useState } from "react";
import { Tooltip, Box, Typography, IconButton } from "@mui/material";
import { Player } from "../../../types/matchTypes";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

type PlayerInfoTooltipProps = {
  children: JSX.Element;
  player: Player;
  isSecondTeam?: boolean;
  onChange: (isOpen: boolean) => void;
};

const PlayerInfoTooltip = ({
  player,
  children,
  isSecondTeam,
  onChange,
}: PlayerInfoTooltipProps) => {
  const { kills, deaths } = player;
  const [isFriend, setIsFriend] = useState(player.isFriend);

  return (
    <Tooltip
      onOpen={() => onChange(true)}
      onClose={() => onChange(false)}
      title={
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Box>
            <Typography>{`Kills: ${kills}`}</Typography>
            <Typography>{`Deaths: ${deaths}`}</Typography>
          </Box>

          <IconButton
            onClick={() => {
              setIsFriend((isFriend) => !isFriend);
            }}
            disabled={isFriend}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: 3,
            }}
          >
            {isFriend ? <PersonIcon /> : <PersonAddIcon />}
          </IconButton>
        </Box>
      }
      placement={isSecondTeam ? "left" : "right"}
    >
      {children}
    </Tooltip>
  );
};

export default PlayerInfoTooltip;
