import * as React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "../Styles/input.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          name="text"
          class="input"
          placeholder="Write a message"
        />
      </div>
    </>
  );
}
