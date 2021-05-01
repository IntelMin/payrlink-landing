import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "../pages/landing";
import Presale from "../pages/preSale";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/pre-sale" component={Presale} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
