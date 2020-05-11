import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import GlobalStyle from "./theme/globalStyle";
import Home from './pages/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>        
        <GlobalStyle />
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        </Switch>

      </div>
    );
  }
}

export default App;
