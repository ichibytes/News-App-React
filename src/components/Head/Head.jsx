import React, { Component } from "react";
import Nav from "../Nav";
import logo from "../../assets/img/news_app_logo256.png";
class Head extends Component {
  render() {
    return (
      <header>
        This is the header
        <img src={logo} alt="News App Logo" />
        <Nav />
      </header>
    );
  }
}

export default Head;
