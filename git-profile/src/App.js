import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import HomeProfile from '../src/component/HomeProfile';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeProfile} {...props}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
