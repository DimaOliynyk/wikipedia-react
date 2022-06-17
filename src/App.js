import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';

class App extends Component{
  render(){
    return(
      <>
        <Route exact path="/" component={Home} />

      </>
    )
  }
}

export default App;
