import React from "react";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Theme from "./styles/Theme";
import Styles from "./styles/styles.css";

import Root from "./components/Root";

function AppCore() {
  return (
    <MuiThemeProvider theme={Theme} sheetsManager={Styles}>
      <Root />
    </MuiThemeProvider>
  );
}

export default AppCore;
