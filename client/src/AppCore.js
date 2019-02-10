import React from "react";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Theme from "./styles/Theme";
import Styles from "./styles/styles.css";

import Router from "./router/Router";

export default function() {
  return (
    // <MuiThemeProvider theme={Theme} sheetsManager={Styles}>
    <Router />
    // </MuiThemeProvider>
  );
}
