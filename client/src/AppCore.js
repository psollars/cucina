import React from "react";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Theme from "./styles/Theme";
import AppProvider from "./providers/AppProvider";
import Router from "./router/Router";

const AppCore = function() {
  return (
    <MuiThemeProvider theme={Theme}>
      <AppProvider>
        <Router />
      </AppProvider>
    </MuiThemeProvider>
  );
};

export default withStyles({
  "@global": {
    body: {
      ...Theme.typography.body1
    }
  }
})(AppCore);
