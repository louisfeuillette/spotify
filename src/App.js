import React, { useState, useEffect } from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import AlbumsPage from './pages/Albums';
import TracksPage from './pages/Tracks';

function App() {

  const [token, setToken] = useState(undefined) 

  // Helper function to get tokens from URL 
  // function found here https://youtu.be/G_WFk4wg9fk?t=803
  const getReturnsParams = (hash) => {
    const string = hash.substring(1);
    const paramsInUrl = string.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
      return paramsSplitUp;
  };

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnsParams(
          window.location.hash
      );
  
      // Sending token in local storage
      localStorage.clear();
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expires_in", expires_in);
      localStorage.setItem("token_type", token_type);
  
      access_token ? setToken(access_token) : setToken(undefined);
  
    }
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component= {token ? Home : Login} />
        <Route exact path="/:id/albums" component={AlbumsPage} />
        <Route exact path="/:id/tracks" component={TracksPage} />
      </Switch>
    </Router>
  );
}

export default App;
