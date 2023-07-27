import React from "react";
import { useState } from "react";
import "./Hombase.css";

const Home = () => {
  const [names, setName] = useState("x");
  // let names = "Emi";

  const handle = () => {
    setName("Joy,tea");

    // names = "joy";
    // console.log(names);
  };
  return (
    <>
      {/* <p>{names}</p>
      <button onClick={handle}>Click me</button> */}

      <div className="footer-container">
        <div className="container">
          <div>
            <h2 className="subscribe">Subscribe for our newsletter</h2>
          </div>
          <div>
            <div className="input-group">
              <input
                type="email"
                className="input"
                id="Email"
                name="Email"
                placeholder="User Email"
                autoComplete="off"
              />
              <input className="button--submit" value="Submit" type="submit" />
            </div>
            <div>
              <div className="foot">
                <ul>
                  <li>
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
                        clip-rule="evenodd"
                      ></path>
                      <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5Zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 3a2 2 0 0 1 2 2v3h6a2 2 0 1 1 0 4h-6v2a3 3 0 0 0 3 3h3a2 2 0 1 1 0 4h-3a7 7 0 0 1-7-7V5a2 2 0 0 1 2-2Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"></path>
                    </svg>
                  </li>
                </ul>
                <div>
                  <div className="copy">
                    <b>Copyright © 2020 Vincent. All Rights Reserved.</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
