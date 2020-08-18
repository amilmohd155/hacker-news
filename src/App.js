import React, { useState, useEffect } from "react";
import logo from "./y18.gif";
import "./App.css";
import ListItem from "./ListItem";

function App() {
  const [items, setItems] = useState({ hits: [] });
  const [page, setpage] = useState(0);

  const fetchData = async (i) => {
    const apiCall = await fetch(
      "https://cors-anywhere.herokuapp.com/http://hn.algolia.com/api/v1/search?page=" +
        i,
      {
        method: "GET",
        dataType: "JSON",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    setItems(await apiCall.json());
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

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
                        <a href="https://news.ycombinator.com/news">
                          <img className="logo" src={logo} width={18} />
                        </a>
                      </td>
                      <td>
                        <span>
                          <b>
                            <a href="https://news.ycombinator.com/news">
                              Hacker News
                            </a>
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
                  <ListItem items={items.hits}/>
                </table>
              </td>
            </tr>
            <tr className="space5"></tr>
            <tr>
              <td
                onClick={() => {
                  setpage(page + 1);
                  fetchData(page);
                }}
                style={{ padding: "0px 25px", color: "#BDBDBD" }}
              >
                More
              </td>
            </tr>
            <tr className="space10" />
            <tr>
              <td>
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "#ff6600" }}></td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <center>
                  <span class="yclinks">
                    <a href="newsguidelines.html">Guidelines</a>|{" "}
                    <a href="newsfaq.html">FAQ</a>|{" "}
                    <a href="mailto:hn@ycombinator.com">Support</a>|{" "}
                    <a href="https://github.com/HackerNews/API">API</a>|{" "}
                    <a href="security.html">Security</a>|{" "}
                    <a href="lists">Lists</a>|{" "}
                    <a href="bookmarklet.html" rel="nofollow">
                      Bookmarklet
                    </a>
                    | <a href="http://www.ycombinator.com/legal/">Legal</a>|{" "}
                    <a href="http://www.ycombinator.com/apply/">Apply to YC</a>|{" "}
                    <a href="mailto:hn@ycombinator.com">Contact</a>
                  </span>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
