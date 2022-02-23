import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const initialState = {
  dogs: [
    { id: 1, name: "Fido", age: 3, breed: "Labrador", goals: randomNumber().toString() },
    { id: 2, name: "Bruno", age: 6, breed: "Jack Russell", goals: randomNumber().toString() },
    { id: 3, name: "Silva", age: 4, breed: "Labrador", goals: randomNumber().toString() },
    { id: 4, name: "Boppy", age: 5, breed: "Poodle", goals: randomNumber().toString() },
    { id: 5, name: "Pook", age: 7, breed: "Chihuahua", goals: randomNumber().toString() },
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addDog(dog) {
    dispatch({
      type: "ADD_DOG",
      payload: dog
    });
  }

  function deleteDog(id) {
    dispatch({
      type: "DELETE_DOG",
      payload: id
    });
  }

  function editDog(id, dog) {
    dispatch({
      type: "EDIT_DOG",
      payload: { id, dog }
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        dogs: state.dogs,
        addDog,
        deleteDog,
        editDog
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
