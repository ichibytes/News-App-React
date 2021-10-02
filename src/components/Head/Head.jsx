import React, { Component } from "react";
import Nav from "../Nav";
import logo from "../../assets/img/news_app_logo256.png";
import "../../styles/components/_head.scss";
import { userContext } from "../../Contexts/newsContext";
import { Link } from "react-router-dom";
class Head extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <Link to="/">
          <img className="header-img" src={logo} alt="News App Logo" />
        </Link>
        <div className="header-user">
          <userContext.Consumer>
            {({ name }) => (name ? <p> Hola, {name}</p> : null)}
          </userContext.Consumer>
        </div>
        <Nav />
      </header>
    );
  }
}

export default Head;
