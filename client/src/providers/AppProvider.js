import React, { useReducer } from "react";
import { Reducer } from "./../reducers/Reducer";
import { useRetrieveAllRecipes } from "./../hooks/Hooks";

export const Context = React.createContext();

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, []);
  const recipes = useRetrieveAllRecipes();

  return (
    <Context.Provider value={{ state, dispatch, recipes }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
