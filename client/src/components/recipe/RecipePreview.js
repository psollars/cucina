import React from "react";
import Link from "./../utilities/Link";
import RecipePreviewButton from "./../utilities/RecipePreviewButton";

import Title from "./Title";
import Description from "./Description";

export default function(props) {
  const { id, title, description } = props;

  return (
    <Link to={`/recipe/${id}`}>
      <RecipePreviewButton fullWidth>
        <Title title={title} />
        <Description description={description} />
      </RecipePreviewButton>
    </Link>
  );
}
