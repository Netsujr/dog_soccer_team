import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { getRandomImage, getBreedsData } from '../api';
const dogNames = require('dog-names');


const initialState = {
  dogs: [
    { id: 1, name: `${dogNames.allRandom()}`, age: "", breed: "", goals: "", image: '' },
    { id: 2, name: `${dogNames.allRandom()}`, age: 6, breed: "Jack Russell", goals: '', image: getRandomImage('').message },
    { id: 3, name: `${dogNames.allRandom()}`, age: 4, breed: "Labrador", goals: '', image: getRandomImage('').message },
    { id: 4, name: `${dogNames.allRandom()}`, age: 5, breed: "Poodle", goals: '', image: getRandomImage('').message },
    ]
};

// add dogs to state
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addDog= (dog) => {
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
