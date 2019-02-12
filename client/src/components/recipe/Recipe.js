import React from "react";

import Title from "./Title";
import Description from "./Description";
import Ingredients from "./ingredient/Ingredients";
import Instructions from "./instruction/Instructions";

export default function(props) {
  const { title, description, ingredients, instructions } = props;

  return (
    <>
      <Title title={title} />
      <Description description={description} />
      <Ingredients ingredients={ingredients} />
      <Instructions instructions={instructions} />
    </>
  );
}
