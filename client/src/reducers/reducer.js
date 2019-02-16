import { RECEIVE_RECIPES, RECEIVE_RECIPE } from "../actions/ActionTypes";

const INITIAL_STATE = [];

export function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_RECIPES:
      return [...action.data];
    case RECEIVE_RECIPE:
      return [...action.data];
    default:
      throw new Error();
  }
}
