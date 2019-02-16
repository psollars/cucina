import React from "react";
import { useRetrieveAllRecipes } from "./../../hooks/Hooks";

import RecipePreview from "./RecipePreview";

export default function() {
  const recipes = useRetrieveAllRecipes();

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
