import React from 'react';
import '../css/Nav.css';
import {Link } from 'react-router-dom';

function Nav () {
  return (
      <nav>
          <h3>Logo</h3>
          <ul className="nav-Links">
              <Link to="/"><li>Home</li></Link>
              <Link to="/Login"><li>Login</li></Link>
          </ul>
      </nav>
  );

};

export default Nav;