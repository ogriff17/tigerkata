import React from 'react';
import './App.css';
import Nav from './components/javascript/Nav'
import Login from './components/javascript/Login'
import Home from './components/javascript/Home'
import Signup from './components/javascript/Signup'
import Quiz from './components/javascript/Quiz'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
    <Nav/>
    <Switch>
      <Route path ="/" exact component={Home}/>
      <Route path ="/Signup" exact component={Signup}/>
      <Route path ="/Login" exact component={Login}/>
      <Route path ="/Quiz" exact component={Quiz}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
