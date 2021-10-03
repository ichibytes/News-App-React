import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import { userContext } from "./Contexts/newsContext";
import Head from "./components/Head";
import Main from "./components/Main";
import "./styles/styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: "" },
    };
  }

  newName = (name) => {
    this.setState({
      user: { name: name },
    });
  };
  render() {
    const user = {
      name: this.state.user.name,
      newName: this.newName,
    };
    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={user}>
            <Head />
            <Main />
          </userContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}
