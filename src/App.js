import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Game from "./components/Game";
import Legend from "./components/Legend";

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route path="/gra/:level" component={Game}></Route>
          <Route path="/legenda" component={Legend}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
