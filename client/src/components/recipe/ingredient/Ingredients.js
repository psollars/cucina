import React from "react";
import Ingredient from "./Ingredient";

export default function(props) {
  const { ingredients } = props;

  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map(ingredient => {
          return (
            <Ingredient
              key={ingredient.id}
              quantity={ingredient.quantity}
              unit={ingredient.unit ? ingredient.unit : ""}
              description={ingredient.description}
            />
          );
        })}
      </ul>
    </>
  );
}
