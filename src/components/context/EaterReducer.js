const eaterReducer = (state, action) => {
  switch (action.type) {
    case 'GET_FOODS':
      return {
        ...state,
        foods: action.payLoad,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_INSTRUCTION':
      return {
        ...state,
        loading: false,
        instruction: action.payLoad,
      };
    case 'SET_INGREDIENT':
      return {
        ...state,
        loading: false,
        ingredient: action.payLoad,
      };

    default:
      return state;
  }
};

export default eaterReducer;
