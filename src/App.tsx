import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import Assessment from './pages/Assessment';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
        <Route path="/" exact component={Assessment} />
        </Switch>

      </div>
    );
  }
}

export default App;
