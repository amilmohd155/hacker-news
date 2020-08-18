import React from "react";
import logo from "./y18.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <center>
        <table style={{width:"65%", backgroundColor:"#f6f6ef"}}>
          <tbody>
            <tr className="header-tr">
              <td>
                <table className="header-table">
                  <tbody>
                    <tr>
                      <td className="logo-td">
                        <a href="#">
                          <img className="logo" src={logo} width={18}/>
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
