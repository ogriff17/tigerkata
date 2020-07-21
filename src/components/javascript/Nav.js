import React from 'react';
import '../css/Nav.css';
import {Link } from 'react-router-dom';

function Nav () {
  return (
      <nav>
          <ul className="nav-Links">
              <Link to="/"><li>Home</li></Link>
              <Link to="/Signup"><li>Sign Up</li></Link>
              <Link to="/Login"><li>Login</li></Link>
              <Link to="/Quiz"><li>Quiz</li></Link>
              <Link to="/FindFight"><li>Find Fight</li></Link>
              <Link to="/Email"><li>Email</li></Link>
          </ul>
      </nav>
  );

};

export default Nav;