import React, { Component } from "react";
import "./styles/Welcome.scss";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome f-center">
        <div className="welcome__container">
          <h1 className="welcome__title">Smocza Pamięć</h1>
          <div className="welcome__options">
            <ul className="welcome-menu">
              <li className="welcome-menu__item">
                <Link to="/gra">Start</Link>
              </li>
              <li className="welcome-menu__item">
                <Link to="/legenda">Legenda</Link>
              </li>
              <li className="welcome-menu__item">
                <Link to="/ustawienia">Ustawienia</Link>
              </li>
              <li className="welcome-menu__item">
                <Link to="/ustawienia">Wyjdź</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
