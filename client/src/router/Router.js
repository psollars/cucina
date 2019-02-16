import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./Routes";
import Home from "../components/Home";

export default function() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
