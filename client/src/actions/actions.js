import { RECEIVE_RECIPES, RECEIVE_RECIPE } from "../actions/ActionTypes";

export const receiveRecipe = recipe => {
  return { type: RECEIVE_RECIPE, data: recipe };
};

export const receiveRecipes = recipes => {
  return { type: RECEIVE_RECIPES, data: recipes };
};
