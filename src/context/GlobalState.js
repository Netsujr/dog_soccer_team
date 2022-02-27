import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const dogNames = require('dog-names');
// import { getBreedsData } from '../api';
// const random = Math.floor(Math.random() * 80) + 1;

function randomAge() {
  return (Math.floor(Math.random() * 20) + 1).toString();
}

function randomGoals() {
  return (Math.floor(Math.random() * 15) + 1).toString();
}

// getBreedsData().then(data => {
//   console.log(Object.keys(data)[random]);
// });


const initialState = {
  dogs: [
    { id: 1, name: `${dogNames.allRandom()}`, age: "", breed: "", goals: "", image: '' },
    { id: 2, name: `${dogNames.allRandom()}`, age: randomAge(), breed: '', goals: randomGoals(), image: '' },
    { id: 3, name: `${dogNames.allRandom()}`, age: randomAge(), breed: '', goals: randomGoals(), image: '' },
    { id: 4, name: `${dogNames.allRandom()}`, age: randomAge(), breed: "Poodle", goals: randomGoals(), image: '' },
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
  //-----------------------------------------------------
  // const capitalizeName = (name) => {
  //   dispatch({
  //     type: "CAPITALIZE_NAME",
  //     payload: name
  //   });
  // }
  //-----------------------------------------------------

  return (
    <GlobalContext.Provider
      value={{
        dogs: state.dogs,
        addDog,
        deleteDog,
        editDog,
        // capitalizeName
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
