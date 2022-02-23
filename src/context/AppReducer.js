// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'ADD_DOG':
      return {
        dogs: [action.payload, ...state.dogs]
      };
      //-----------------------------------------------------
    case 'DELETE_DOG':
      return {
        dogs: state.dogs.filter(dog => {
          return dog.id !== action.payload })
      };
      // --------------------------------------------------
    case 'EDIT_DOG':
      return {
        ...state,
        dogs: state.dogs.map(dog => {
          if (dog.id === action.id) {
            return {
              ...dog,
              ...action.updates
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
