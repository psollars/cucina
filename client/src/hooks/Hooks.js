import { useEffect, useReducer } from "react";
import { Reducer } from "./../reducers/Reducer";
import { receiveRecipe } from "./../actions/Actions";
import { fetchRecipeById } from "./../requests/Requests";

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
