import React from "react";

import Recipe from "./Recipe";

export default function(props) {
  let { recipes } = props;
  recipes = recipes ? recipes : [];

  return (
    <>
      <h1>Recipes</h1>
      {recipes.map(recipe => {
        return (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        );
      })}
    </>
  );
}
