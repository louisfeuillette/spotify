import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import AlbumsPage from './pages/Albums';
import TracksPage from './pages/Tracks';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/:id/albums" component={AlbumsPage} />
        <Route exact path="/:id/tracks" component={TracksPage} />
      </Switch>
    </Router>
  );
}

export default App;
