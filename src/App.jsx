import React from "react";
import { useEffect, useState } from "react";
import "./jeff.css";
import Home from "./Home";
import BasicMenu from "./Menu";
import NestedModal from "./component/Modal";
import ReactCarousel from "./component/Carousel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import DisableElevation from "./component/Btn";
import ListDividers from "./component/ListDivider";
import VerticalDividerText from "./component/VerticalText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import TextCarousel from "./component/TextCarousel";

// import TextCarousel from "./component/TextCarousel";

function App() {
  // contains all meals including nulls
  var [allMeals, setallMeals] = useState([]);

  // contains all food without nulls
  var [no_Null_Meals, setGroupfoodNum] = useState([]);

  // const temp = no_Null_Meals;

  // **********************USEEFFECT
  useEffect(() => {
    const fetchAllMeals = async () => {
      const meals = [];
      for (let i = 97; i < 123; i++) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${String.fromCharCode(
              i
            )}`
          );

          const data = await response.json();
          meals.push(data.meals);
        } catch (error) {
          console.log("Error:", error);
        }
      }
      // console.log(item);

      var filterAll = meals
        .filter((data) => data !== null)
        .flatMap((data) => data.map((item) => item));

      setallMeals(meals);
      setGroupfoodNum(filterAll);
    };
    fetchAllMeals();
  }, []);

  const change = {
    color: "green",
  };

  const press = () => {
    console.log(setapi);
  };

  const homeclick = (e) => {
    console.log("hello world", e);
  };

  const [name, setName] = useState("");

  console.log(no_Null_Meals);
  // CAROUSEL SETTINGS
  const [temp, setTemp] = useState("");
  const handleAreaName = (para) => {
    setTemp(para);
  };

  const [tmp, setTmp] = useState("");
  const handleIdName = (value) => {
    setTmp(value);
  };

  useEffect(() => {
    // setName("Jeff");
    console.log(tmp, "PName");
  }, [tmp]);

  return (
    <>
      {/* =======================================Header======================== */}

      <div className="body">
        <div className="header">
          <div className="head-containerI">
            <div className="container nav_container">
              <h2 className="chill">
                Chill<span onClick={press}>Effect</span>
              </h2>
              <ul
                className="menu nav_menu"
                // style={{
                //   display: menuVal % 2 == 0 ? "none" : "block",
                //   zIndex: "10000",
                // }}
              >
                <li className="btn">
                  <BasicMenu menuname={"Jeff"} />
                </li>
              </ul>
            </div>
          </div>
          <div className="head-containerII">
            <div>
              <div className="template">
                <div className="temp">
                  <h1 style={{ color: "#8f8f8f" }}>
                    {" "}
                    Welcome <small>To</small> Chill
                    <span style={{ color: "rgb(70, 70, 145)" }}>Effect</span>
                  </h1>
                  <p>
                    <h3 style={{ color: "#8f8f8f" }}>
                      {" "}
                      Your <span>Go-Stop</span>{" "}
                      <p
                        style={{
                          color: "rgb(70, 70, 145)",
                          fontVariant: "small-caps",
                        }}
                      >
                        CAFE & HEALTHY FOODS{" "}
                      </p>{" "}
                      <br /> And <br /> MANYmore
                    </h3>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="head-containerIII">
            <div className="Input_list">
              <div className="ul">
                <ul>
                  <li>
                    <NestedModal />
                  </li>
                  <li className="inputbox">
                    <input type="text" required="required" />
                    <span style={{ color: "#8f8f8f" }}>Search Food</span>
                    <i></i>
                  </li>
                  <li>
                    {" "}
                    <BasicMenu />{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================Main======================== */}

        <div className="main">
          <div className="main-containerI">
            <div className="works">
              <div>
                <div className="work_list">
                  <h3 style={{ fontSize: "30px", color: "#8f8f8f" }}>
                    How it{" "}
                    <span style={{ color: "rgb(70, 70, 145)" }}>Works?</span>
                  </h3>
                  <ul>
                    <li>
                      <div>
                        {" "}
                        <InsertCommentRoundedIcon
                          style={{
                            border: "2px solid white",
                            borderRadius: "50%",
                            width: "50px",
                            height: "3vh",
                            color: "orange",
                          }}
                        />{" "}
                      </div>
                      <div style={{ textAlign: "center", color: "#8f8f8f" }}>
                        Sign In & Choose From
                        <br />
                        Our Weekly Menu{" "}
                      </div>
                    </li>
                    <li>
                      <div>
                        <LocalShippingIcon
                          style={{
                            border: "2px solid white",
                            borderRadius: "50%",
                            width: "50px",
                            height: "3vh",
                            color: "orange",
                          }}
                        />
                      </div>
                      <div style={{ textAlign: "center", color: "#8f8f8f" }}>
                        We Will Deliver Your <br />
                        Purchase{" "}
                      </div>
                    </li>
                    <li>
                      <div>
                        {" "}
                        <RestaurantRoundedIcon
                          style={{
                            border: "2px solid white",
                            borderRadius: "50%",
                            width: "50px",
                            height: "3vh",
                            color: "orange",
                          }}
                        />{" "}
                      </div>
                      <div style={{ textAlign: "center", color: "#8f8f8f" }}>
                        Enjoy Our Tasty <br />
                        Organic Food!{" "}
                      </div>
                    </li>
                  </ul>
                  <button>
                    {" "}
                    <DisableElevation />{" "}
                  </button>
                  <div>
                    {" "}
                    <ul style={{ display: "flex", justifyContent: "center" }}>
                      <li style={{ fontSize: "40px", color: "#8f8f8f" }}>
                        From Our{" "}
                        <span style={{ color: "rgb(70, 70, 145)" }}>Menu</span>:
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-containerII">
            <div>
              <ReactCarousel
                idName={handleIdName}
                image={no_Null_Meals}
                countryName={handleAreaName}
              />
            </div>
            <div className="view" style={{ padding: "30px" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#8f8f8f",
                    fontSize: "20px",
                  }}
                >
                  View This Week's Full Menu{" "}
                  <ChevronRightIcon style={{ color: " rgb(70, 70, 145)" }} />
                </div>
              </div>
              <div>
                <ListDividers mealName={tmp} address={temp} />
              </div>
            </div>
          </div>
          <div className="main-containerIII">
            <VerticalDividerText />{" "}
          </div>
          <div className="main-containerIIII">{/* <ListDividers /> */}</div>
        </div>
        <div className="footer">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
