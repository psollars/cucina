import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const localTheme = createMuiTheme();

export default function Test(props) {
  return (
    <MuiThemeProvider theme={localTheme}>
      <h1>test</h1>
      <h2>test</h2>
      <h3>test</h3>
      <h4>test</h4>
      <h5>test</h5>
      <h6>test</h6>
      <p>test</p>
    </MuiThemeProvider>
  );
}
