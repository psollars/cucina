import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes";

import Home from "../components/Home";

export default function() {
  return (
    <Router>
      <>
        <Route key={"home"} exact path={"/"} component={Home} />
        {Routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </>
    </Router>
  );
}
