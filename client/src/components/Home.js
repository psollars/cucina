import React from "react";
import { Button } from "@material-ui/core";
import Link from "./utilities/Link";

export default function() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/recipe">
        <Button>Recipe</Button>
      </Link>
      <Link to="/test">
        <Button>Test Component</Button>
      </Link>
    </>
  );
}
