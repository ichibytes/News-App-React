import React, { Component } from "react";
import Nav from "../Nav";
import logo from "../../assets/img/news_app_logo256.png";
import "../../styles/components/_head.scss";
class Head extends Component {
  render() {
    return (
      <header className='header'>
        <img className='header-img' src={logo} alt="News App Logo" />
        <div className='header-user'>
        <p>Hola, User!</p>
        </div>
        <Nav />
      </header>
    );
  }
}

export default Head;
