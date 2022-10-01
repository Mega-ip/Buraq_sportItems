import React from "react";
import "./Leftbar.css";
import PanToolIcon from "@mui/icons-material/PanTool";
import { IconButton } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function Leftbar() {
  return (
    <div className="leftbar__container">
      <LightTooltip title="Add" placement="right">
        <IconButton>
          <PanToolIcon />
        </IconButton>
      </LightTooltip>

      <LightTooltip title="Add" placement="right">
        <IconButton>
          <PanToolIcon />
        </IconButton>
      </LightTooltip>

      <LightTooltip title="Add" placement="right">
        <IconButton>
          <PanToolIcon />
        </IconButton>
      </LightTooltip>
      <LightTooltip title="Add" placement="right">
        <IconButton>
          <PanToolIcon />
        </IconButton>
      </LightTooltip>
      <LightTooltip title="Add" placement="right">
        <IconButton>
          <PanToolIcon />
        </IconButton>
      </LightTooltip>
    </div>
  );
}

export default Leftbar;
