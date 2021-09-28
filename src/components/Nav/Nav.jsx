import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import "../../styles/components/_nav.scss";
class Nav extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return (
      <nav className="nav">
        <Menu right>
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
        </Menu>
      </nav>
    );
  }
}

export default Nav;
