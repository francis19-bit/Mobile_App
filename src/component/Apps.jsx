import React from "react";
import "../Styles/apps.css";
import FixedCard from "./FixedCard";
import ClickableLink from "./ClickableLink";
import SoloText from "./SoloText";
import Home from "../Home";

const Apps = () => {
  return (
    <>
      <div className="main_body">
        <div className="main_grid_first">
          <div className="grid_first_main">
            <FixedCard />
          </div>
          <div
            className="grid_second_main"
            style={{
              display: "flex",
              placeItems: "center",
              justifyContent: "center",
            }}
          >
            <SoloText />
          </div>
          <div className="grid_third_main">
            <div>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  placeItems: "center",
                  padding: "10px",
                }}
              >
                <li>
                  {" "}
                  <ClickableLink />
                </li>
                <li>
                  {" "}
                  <ClickableLink />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main_grid_second"></div>
        <div className="main_grid_third">
          {" "}
          <Home />{" "}
        </div>
      </div>
    </>
  );
};

export default Apps;
