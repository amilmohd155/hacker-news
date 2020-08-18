import React from "react";
import logo from "./y18.gif";
import "./App.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function App() {
  return (
    <div className="App">
      <center>
        <table style={{ width: "65%", backgroundColor: "#f6f6ef" }}>
          <tbody>
            <tr className="header-tr">
              <td>
                <table className="header-table">
                  <tbody>
                    <tr>
                      <td className="logo-td">
                        <a href="#">
                          <img className="logo" src={logo} width={18} />
                        </a>
                      </td>
                      <td>
                        <span>
                          <b>
                            <a href="#">Hacker News</a>
                          </b>
                        </span>
                      </td>
                      <td className="login-td">
                        <span>
                          <a href="#">Login</a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1"></td>
                      <td>
                        <span className="subtitle">
                          <a href="#">New</a>
                        </span>
                        <span className="subtitle">
                          <a href="#">Past</a>
                        </span>
                        <span className="subtitle">
                          <a href="#">Comments</a>
                        </span>
                        <span className="subtitle">
                          <a href="#">Ask</a>
                        </span>
                        <span className="subtitle">
                          <a href="#">Show</a>
                        </span>
                        <span className="subtitle">
                          <a href="#">Jobs</a>
                        </span>
                        <span className="subtitle">
                          <a href="#">Show</a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="space10"></tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span style={{padding: "2px"}}>1</span>
                      </td>
                      <td style={{width: "100%"}}>
                        <span>
                          <a href="#">
                            I fear App Review is getting too powerful (2015)
                            [pdf]
                          </a>
                          <span style={{color: "#9E9E9E"}}>
                            {" ("}
                            <a href="#" style={{color: "#9E9E9E"}}>
                              <span>house.gov</span>
                            </a>
                            {") "}
                          </span>
                        </span>
                      </td>
                      <td>
                        <center>
                          <a href="">
                            <div className="upvote"/>
                          </a>
                        </center>
                      </td>
                    </tr>
                    <tr className="subtext">
                      <td colSpan="1"></td>
                      <td>
                        {"by "}
                        <a href="">atarian</a>
                        <span>
                          <a href="">11 hours ago</a>
                        </span>
                        {" | "}
                        <span className="hide-span">
                          <a href="">hide</a>
                        </span>
                        {" | "}
                        <span>
                          <a href="">274&nbsp;comments</a>
                        </span>
                      </td>
                      <td>
                        <span>817</span>
                      </td>
                    </tr>
                    <tr className="space5"></tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
