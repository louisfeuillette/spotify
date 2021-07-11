import React from 'react';

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Albums from './pages/Albums';



function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Albums} />
        {/* <Route exact path="/" component={Player} /> */}
      </Switch>
    </Router>
  );
}

export default App;
