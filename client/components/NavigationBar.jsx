import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="" className="nav-bar-brand">Red Dice</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-na navbar-right">
            <li>
              <Link to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};