import React, { useReducer, useEffect } from "react";
import { Button } from "@material-ui/core";
import Link from "./utilities/Link";

import Recipes from "./recipe/Recipes";

import { RETRIEVE_RECIPES } from "../actions/actionTypes";
import reducer from "./../reducers/reducer";

export default function() {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(
    () => dispatch({ type: RETRIEVE_RECIPES, recipes: initialState }),
    []
  );

  const { recipes } = state;

  return (
    <>
      <h1>Home</h1>
      <Link to="/recipes">
        <Button>Recipes</Button>
      </Link>
      <Link to="/recipe/1">
        <Button>A Single Recipe</Button>
      </Link>
      <Button
        onClick={() =>
          dispatch({ type: RETRIEVE_RECIPES, recipes: initialState })
        }
      >
        Retrieve Recipes
      </Button>
      <Link to="/test">
        <Button>Test Component</Button>
      </Link>
      <Recipes recipes={recipes} />
    </>
  );
}

const initialState = [
  {
    id: 1,
    title: "Triple Ginger Cookies",
    description: `Yes, here it is, for you to have. THE recipe! I've never been secretive
  about it, actually. Below are the measurements for a single batch. I
  almost always make a triple batch, but I've got the larger KitchenAid
  stand mixer, so it can handle it. Note that these are NOT Ginger
  "Snaps", because while they are "snappy" with ginger and spice, they are
  *soft* cookies, not thin, hard ones. Those have their place, but they
  are not these!`,
    ingredients: [
      {
        id: 1,
        quantity: "2 ¼",
        unit: "cup",
        description: "unbleached flour"
      },
      {
        id: 2,
        quantity: "1",
        unit: "cup",
        description: "dark brown sugar"
      },
      {
        id: 3,
        quantity: "1 ½",
        unit: "sticks",
        description: "real butter"
      },
      { id: 4, quantity: "1/4", unit: "cup", description: "molasses" },
      { id: 5, quantity: "1", unit: null, description: "egg" },
      { id: 6, quantity: "1", unit: "tsp", description: "baking soda" },
      { id: 7, quantity: "1", unit: "tsp", description: "ground ginger" },
      {
        id: 8,
        quantity: "1",
        unit: "tsp",
        description: "ground cinnamon (freshly ground is best)"
      },
      {
        id: 9,
        quantity: "1",
        unit: "tsp",
        description: "fresh ginger, peeled, and grated or chopped"
      },
      {
        id: 10,
        quantity: "1",
        unit: "tsp",
        description: "ginger preserve or chopped crystallized ginger"
      },
      {
        id: 11,
        quantity: "½",
        unit: "tsp",
        description: "ground cloves (freshly ground is best)"
      },
      {
        id: 12,
        quantity: "½",
        unit: "cup",
        description: "granulated sugar"
      }
    ],

    instructions: [
      { order: 1, instruction: "Preheat oven to 350° F." },
      {
        order: 2,
        instruction:
          "In a large mixing bowl, combine half the flour, and the brown sugar, butter, molasses, egg, soda, gingers, cinnamon, and cloves."
      },
      {
        order: 3,
        instruction: "Beat with electric mixer until thoroughly combined."
      },
      { order: 4, instruction: "Beat in remaining flour." },
      { order: 5, instruction: 'Shape dough into 1" balls.' },
      {
        order: 6,
        instruction:
          'Roll each in granulated sugar and place 2" apart on ungreased cookie sheets.'
      },
      {
        order: 7,
        instruction:
          "Bake at 350° on top rack for 7-10 minutes or until set and tops are crackled. Cool on racks."
      },
      { order: 8, instruction: "Makes about 3 dozen." }
    ]
  }
];
