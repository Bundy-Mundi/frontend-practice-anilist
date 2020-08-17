import React, { createContext, useReducer } from "react";
import tailwind from "../styles/tailwind";
import reducer, { INITIAL_STATE } from "../_reducers/reducer";

export const Context = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ 
        tailwind,
        state,
        dispatch
      }}>
      { children }
    </Context.Provider>
  )
}