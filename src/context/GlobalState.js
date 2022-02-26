import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { getBreedsData } from '../api';
const dogNames = require('dog-names');
const age = Math.floor(Math.random() * 20) + 1;
const goals = Math.floor(Math.random() * 20) + 1;
const random = Math.floor(Math.random() * 80) + 1;

getBreedsData().then(data => {
  console.log(Object.keys(data)[random])});

  function randomAge() {
    return Math.floor(Math.random() * 20) + 1;
  }


const initialState = {
  dogs: [
    { id: 1, name: `${dogNames.allRandom()}`, age: "", breed: "", goals: "", image: '' },
    { id: 2, name: `${dogNames.allRandom()}`, age: randomAge(), breed: "Jack Russell", goals: goals, image: '' },
    { id: 3, name: `${dogNames.allRandom()}`, age: age, breed: "Labrador", goals: goals, image: '' },
    { id: 4, name: `${dogNames.allRandom()}`, age: age, breed: "Poodle", goals: goals, image: '' },
  ]
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
