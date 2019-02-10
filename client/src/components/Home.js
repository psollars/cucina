import React from "react";
import Button from "@material-ui/core/Button";
import Link from "./Link";

export default function() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/recipe">
        <Button color="primary">Recipe</Button>
      </Link>
      <Button>
        <Link to="/test">Test Component</Link>
      </Button>
    </>
  );
}
