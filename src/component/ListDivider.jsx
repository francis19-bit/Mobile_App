import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: "center",
  bgcolor: "rgb(70, 70, 145)",
};

export default function ListDividers({ mealName, address }) {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem className="inbox" style={{ textAlign: "center" }}>
        <ListItemText primary={mealName == "" ? "Food Name" : mealName} />
      </ListItem>
      <Divider />
      <ListItem divider className="inbox" style={{ textAlign: "center" }}>
        <ListItemText primary={address == "" ? "Country Food Name" : address} />
      </ListItem>
      <ListItem className="inbox" style={{ textAlign: "center" }}>
        <ListItemText primary="read" />
      </ListItem>
      <Divider light />
      <ListItem className="inbox" style={{ textAlign: "center" }}>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
