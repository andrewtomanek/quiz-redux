import React, { Component } from "react";
import { Route, Switch } from "react-router";
import GlobalStyle from "./theme/globalStyle";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
