import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="header--nav">
        <ul>
          <li className="header--nav-element">
            <Link to="/">Home</Link>
          </li>
          <li className="Header--nav-element">
            <Link to="/formulary">Formulary</Link>
          </li>
          <li className="Header--nav-element">
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
