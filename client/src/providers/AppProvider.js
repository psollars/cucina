import React, { useReducer } from "react";
import { Reducer } from "./../reducers/Reducer";
import { useRetrieveAllRecipes } from "./../hooks/Hooks";

export const Context = React.createContext();

export default props => {
  // This provides access to dispatch actions to the reducer
  // from consuming components within a useEffect hook
  // useEffect(() => {
  //   contextState.dispatch({
  //     type: "SPREAD_ARRAY_INTO_STATE",
  //     data: [{ stuff: "anything" }]
  //   });
  // }, []);
  const [state, dispatch] = useReducer(Reducer, {});

  const recipes = useRetrieveAllRecipes();

  const contextState = { ...state, dispatch, recipes };

  return (
    <Context.Provider value={contextState}>{props.children}</Context.Provider>
  );
};
