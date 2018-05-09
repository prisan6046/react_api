import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
