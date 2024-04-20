import React from "react";
import "./App.css";
import GameList from "./components/GameList";
import { MyContextProvider } from "./hooks/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameId from "./components/GameId";
import Genre from "./components/Genre";

function App() {
  return (
    <MyContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <GameList />
            </Route>
            <Route path="/games/:gameId">
              <GameId />
            </Route>
            <Route path="/genres/:gameGenre">
              <Genre />
            </Route>
          </Switch>
        </div>
      </Router>
    </MyContextProvider>
  );
}

export default App;
