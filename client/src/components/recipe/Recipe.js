import React from "react";
import { Button } from "@material-ui/core";
import Link from "./../utilities/Link";
import { useRetrieveRecipeById } from "./../../hooks/Hooks";

import Title from "./Title";
import Description from "./Description";
import Ingredients from "./ingredient/Ingredients";
import Instructions from "./instruction/Instructions";

export default function(props) {
  const {
    match: { params }
  } = props;
  const recipe = useRetrieveRecipeById(params.id);
  const { title, description, ingredients, instructions } = recipe;

  return (
    <>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Title title={title} />
      <Description description={description} />
      <Ingredients ingredients={ingredients} />
      <Instructions instructions={instructions} />
    </>
  );
}
