import React, { Component } from "react";
import "./styles/Welcome.scss";
import { Link } from "react-router-dom";
import logo from "./styles/IMG/logo.png";

class Welcome extends Component {
  state = {
    level: "Średni"
  };

  changeLevel = () => {
    const { level } = this.state;
    switch (level) {
      case "Łatwy":
        return this.setState({ level: "Średni" });
      case "Średni":
        return this.setState({ level: "Trudny" });
      case "Trudny":
        return this.setState({ level: "Łatwy" });
      default:
        return this.setState({ level: "Średni" });
    }
  };
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
                <Link to={`/gra/${this.state.level}`}>Start</Link>
              </li>
              <li className="welcome-menu__item">
                <a href="#!" onClick={this.changeLevel}>
                  Poziom: {this.state.level}
                </a>
              </li>
              <li className="welcome-menu__item">
                <Link to="/legenda">Legenda</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
