import React from 'react';
import '../css/Nav.css';
import {Link } from 'react-router-dom';
import { If } from "rc-if-else";

function Nav () {
  return (
      <nav>
          <ul className="nav-Links">
              <Link to="/" className="Home"><li>Home</li></Link>
              <Link to="/Signup" className="Home"><li>Sign Up</li></Link>
              <Link to="/Login" className="Home"><li>Login</li></Link>
              <If condition={window.$Login}>
              <Link to="/Quiz" className="Home"><li>Quiz</li></Link>
              <Link to="/FindFight" className="Home"><li>Find Fight</li></Link>
              <Link to="/ContactForm" className="Home" ><li>Contact</li></Link>
              </If>
          </ul>
      </nav>
  );

};

export default Nav;