// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
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
    // create edit case
    case 'EDIT_DOG':
      return {
        ...state,
        dogs: state.dogs.map(dog => {
          if (dog.id === action.payload.id) {
            return {
              ...dog,
              ...action.payload.dog
            };
          } else {
            return dog;
          }
        })
      };
    default:
      return state;
  }
};

      // const updateDog = action.payload;
      // const updatedDogs = state.dogs.map(dog => {
      //   if (dog.id === updateDog.id) {
      //     return updateDog;
      //   }
      // });
      // return {
      //   ...state,
      //   dogs: updatedDogs
      // };
      //     default:
      // return state;
