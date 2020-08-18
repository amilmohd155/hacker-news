import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img src={logo}/>
                      </a>
                    </td>
                    <td>
                      <span>
                        <b>
                          <a href="#">Hacker News</a>
                        </b>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
