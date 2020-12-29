// setup data layer
//we use this for keep track of basket

import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

// BUILD A PROVIDER

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how it use inside a component

export const useStateValue = () => useContext(StateContext);
