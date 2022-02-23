// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'ADD_DOG':
      return {
        ...state,
        dogs: [...state.dogs, action.dog]
      };
    case 'DELETE_DOG':
      return {
        ...state,
        dogs: state.dogs.filter(dog => dog.id !== action.id)
      };
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
}
