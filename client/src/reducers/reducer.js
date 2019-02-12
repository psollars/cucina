import { RETRIEVE_RECIPES } from "../actions/actionTypes";

const INITIAL_STATE = {
  recipes: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RETRIEVE_RECIPES:
      return retrieveRecipes(state, action);
    default:
      return state;
  }
}

function retrieveRecipes(state, action) {
  return { ...state, recipes: action.recipes };
}
