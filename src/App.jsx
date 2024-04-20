import React from "react";
import "./App.css";
import Game from "./components/Game";
import GameList from "./components/GameList";
import { MyContextProvider } from "./hooks/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameId from "./components/GameId";

function App() {
  return (
    <MyContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <GameList />
            </Route>
            <Route path="/:gameId">
              <GameId />
            </Route>
          </Switch>
        </div>
      </Router>
    </MyContextProvider>
  );
}

export default App;
