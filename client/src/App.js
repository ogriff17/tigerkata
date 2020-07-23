import React from 'react';
import './App.css';
import Nav from './components/javascript/Nav'
import Login from './components/javascript/Login'
import Home from './components/javascript/Home'
import Signup from './components/javascript/Signup'
import Quiz from './components/javascript/Quiz'
import FindFight from './components/javascript/FindFight'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Email from './components/javascript/Email'
import ContactForm from './components/javascript/ContactForm'

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
      <Route path ="/FindFight" exact component={FindFight}/>
      <Route path ="/Email" exact component={Email}/>
      <Route path ="/ContactForm" exact component ={ContactForm}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
