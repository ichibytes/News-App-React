import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Form from "../Form";
import News from "../News";
import "../../styles/components/_main.scss";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  addRecord = (newRecord) => {
    this.setState({ news: [...this.state.news, newRecord] });
  };

  render() {
    return (
      <main className="main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/formulary"
            component={() => <Form addRecord={this.addRecord} />}
          />
          <Route
            path="/news"
            component={() => <News record={this.state.news} />}
          />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default Main;
