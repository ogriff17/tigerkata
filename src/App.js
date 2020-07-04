import React from 'react';
import './App.css';
import Nav from './components/javascript/Nav'
import Login from './components/javascript/Login'
import Home from './components/javascript/Home'
import {BrowseRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
    <Nav/>
    <Switch>
      <Route path ="/" exact component={Home}/>
      <Route path ="/Login" exact component={Login}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
