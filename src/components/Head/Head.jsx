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
        <>
      <header className="header">
        <Link to="/">
          <img className="header-img" src={logo} alt="News App Logo" />
        </Link>
        <Nav />
          <userContext.Consumer>
            {({ name }) => (name ? <div className="header__user"><hr /><p> <i className='fa fa-user'></i> Hola, {name}</p></div>: null)}
          </userContext.Consumer>
      </header>
        </>
    );
  }
}


export default Head;
