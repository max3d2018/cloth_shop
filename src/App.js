import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
