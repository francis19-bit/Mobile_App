import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const Grid = styled(MuiGrid)(({ theme }) => ({
  background: "rgb(70, 70, 145)",
  height: "20vh",
  color: "#8f8f8f",
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 1),
  },
}));

export default function VerticalDividerText() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <Grid container>
      <Grid item xs>
        {content}
      </Grid>
      <Divider orientation="vertical" flexItem>
        VERTICAL
      </Divider>
      <Grid item xs>
        {content}
      </Grid>
    </Grid>
  );
}
