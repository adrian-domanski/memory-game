import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route path="/gra" component={Game}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
