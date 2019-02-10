import React from "react";
import { Button } from "@material-ui/core";

export default function(props) {
  const { history } = props;

  return (
    <>
      <Button onClick={() => history.goBack()}>Back</Button>
      <h1>test</h1>
      <h2>test</h2>
      <h3>test</h3>
      <h4>test</h4>
      <h5>test</h5>
      <h6>test</h6>
      <p>test</p>
    </>
  );
}
