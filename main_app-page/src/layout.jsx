import React from "react";
import Flux from "react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pizza from "./Pizza.js";

export default class Layout extends Flux.View {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/pizza" component={Pizza} />
              <Route render={() => <h1>Not found!</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}