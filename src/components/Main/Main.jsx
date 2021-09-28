import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Form from "../Form";
import ListNews from "../ListNews";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/formulary" component={Form} />
          <Route path="/news" component={ListNews} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default Main;
