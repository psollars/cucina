import React from "react";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Theme from "./styles/Theme";
import AppRouter from "./router/AppRouter";

const AppCore = function() {
  return (
    <MuiThemeProvider theme={Theme}>
      <AppRouter />
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
