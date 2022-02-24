import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const randomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

export const initialState = {
  dogs: []
};

// add dogs to state
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addDog = (dog) => {
    dispatch({
      type: "ADD_DOG",
      payload: dog
    });
  }
  //-----------------------------------------------------
  const deleteDog = (id) => {
    dispatch({
      type: "DELETE_DOG",
      payload: id
    });
  }
  //-----------------------------------------------------
  const editDog = (dog) => {
    dispatch({
      type: "EDIT_DOG",
      payload: dog
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        dogs: state.dogs,
        addDog,
        deleteDog,
        editDog
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
