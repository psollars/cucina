import { useEffect, useReducer } from "react";
import { Reducer } from "./../reducers/Reducer";
import { receiveRecipe, receiveRecipes } from "./../actions/Actions";
import { fetchRecipeById, fetchAllRecipes } from "./../requests/Requests";

export function useRetrieveRecipeById(id) {
  const [state, dispatch] = useReducer(Reducer, [
    {
      title: "",
      description: "",
      ingredients: [],
      instructions: []
    }
  ]);

  useEffect(() => {
    fetchRecipeById(id).then(data => {
      dispatch(receiveRecipe(data));
    });
  }, []);

  return state[0];
}

export function useRetrieveAllRecipes() {
  const [state, dispatch] = useReducer(Reducer, []);

  useEffect(() => {
    fetchAllRecipes().then(data => {
      dispatch(receiveRecipes(data));
    });
  }, []);

  return state;
}
