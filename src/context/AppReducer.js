// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "CAPITALIZE_NAME":
      return {
        ...state,
        dogs: state.dogs.map(dog => {
          if (dog.id === action.payload.id) {
            return {
              ...dog,
              name: action.payload.name.toUpperCase()
            };
          } else {
            return dog;
          }
        })
      };
    //-----------------------------------------------------
    case 'ADD_DOG':
      return {
        ...state,
        dogs: [action.payload, ...state.dogs]
      };
    //-----------------------------------------------------
    case 'DELETE_DOG':
      return {
        ...state,
        dogs: state.dogs.filter(dog => {
          return dog.id !== action.payload;
        })
      };
    // --------------------------------------------------
    case "EDIT_DOG":
      const updatedDog = action.payload;
      console.log(updatedDog);
      const updatedDogs = state.dogs.map((dog) => {
        if (dog.id === updatedDog.id) {
          console.log(updatedDog);
          return updatedDog;
        }
        return dog;
      });
      return {
        ...state,
        dogs: updatedDogs,
      };
    default:
      return state;
  }
};
