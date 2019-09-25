import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import TweetsPage from './components/tweets/TweetsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact path="/" to="/tweets" />
          <Route path="/tweets" component={TweetsPage} />
        </Switch>
      </Router>

    )
  }
}

export default App;
