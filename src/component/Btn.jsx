import * as React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function DisableElevation() {
  return (
    <Button variant="contained" disableElevation>
      Subscribe <ArrowForwardIosRoundedIcon />
    </Button>
  );
}
