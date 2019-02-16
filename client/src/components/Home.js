import React from "react";
import { Button } from "@material-ui/core";
import Link from "./utilities/Link";

import Recipes from "./recipe/Recipes";

export default function() {
  const recipes = [];

  return (
    <>
      <h1>Home</h1>
      <Link to="/recipe/1">
        <Button>A Single Recipe</Button>
      </Link>

      <Recipes recipes={recipes} />
    </>
  );
}
