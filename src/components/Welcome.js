import React, { Component } from "react";
import "./styles/Welcome.scss";
import { Link } from "react-router-dom";
import logo from "./styles/IMG/logo.png";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome f-center">
        <div className="welcome__container">
          <div className="welcome__title">
            <img src={logo} alt="Smocza Pamięć" />
          </div>
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
