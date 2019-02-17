import React, { useContext } from "react";
import { Context } from "./../../providers/AppProvider";
import RecipePreview from "./RecipePreview";

export default function() {
  const { recipes } = useContext(Context);

  return (
    <>
      <h1>Recipes</h1>
      {recipes.map(recipe => {
        return (
          <RecipePreview
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
          />
        );
      })}
    </>
  );
}
