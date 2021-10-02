import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../../styles/components/_nav.scss";
class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <nav className="nav">
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          right
        >
          <ul>
            <li className="nav__nav-element">
              <Link to="/" onClick={() => this.closeMenu()}>
                Home
              </Link>
            </li>
            <li className="nav__nav-element">
              <Link to="/formulary" onClick={() => this.closeMenu()}>Inputs</Link>
            </li>
            <li className="nav__nav-element">
              <Link to="/news" onClick={() => this.closeMenu()}>News</Link>
            </li>
          </ul>
        </Menu>
      </nav>
    );
  }
}

export default Nav;
