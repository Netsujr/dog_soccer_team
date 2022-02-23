import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const randomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const initialState = {
  dogs: [
    { id: 1, name: "Fido", age: 3, breed: "Labrador", goals: randomNumber().toString(), image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/119509859/original/a4b4d447d4d4223232912ba81768f00177de6565/do-animal-dog-cat-pet-illustration-cartoon-caricature.png" },
    { id: 2, name: "Bruno", age: 6, breed: "Jack Russell", goals: randomNumber().toString(), image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/119509859/original/a4b4d447d4d4223232912ba81768f00177de6565/do-animal-dog-cat-pet-illustration-cartoon-caricature.png" },
    { id: 3, name: "Silva", age: 4, breed: "Labrador", goals: randomNumber().toString(), image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/119509859/original/a4b4d447d4d4223232912ba81768f00177de6565/do-animal-dog-cat-pet-illustration-cartoon-caricature.png" },
    { id: 4, name: "Boppy", age: 5, breed: "Poodle", goals: randomNumber().toString(), image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/119509859/original/a4b4d447d4d4223232912ba81768f00177de6565/do-animal-dog-cat-pet-illustration-cartoon-caricature.png" },
    { id: 5, name: "Pook", age: 7, breed: "Chihuahua", goals: randomNumber().toString(), image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/119509859/original/a4b4d447d4d4223232912ba81768f00177de6565/do-animal-dog-cat-pet-illustration-cartoon-caricature.png" },
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
