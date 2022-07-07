import eaterReducer from './EaterReducer';
import { useReducer } from 'react';

const { createContext } = require('react');

const EaterContext = createContext();

const RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
const RECIPE_HOST = process.env.REACT_APP_RECIPE_HOST;

export const EaterProvider = ({ children }) => {
  const initialState = {
    foods: [],
    loading: false,
    instruction: '',
    ingredient: '',
  };
  const [state, dispatch] = useReducer(eaterReducer, initialState);

  const getFood = async (text) => {
    setLoading();
    const response = await fetch(
      `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${text}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': RECIPE_API_KEY,
          'X-RapidAPI-Host': RECIPE_HOST,
        },
      }
    );

    if (response.status === 404) {
      window.location = '/notFound';
    } else {
      const data = await response.json();
      if (data.length === 0) {
        window.location = '/notFound';
      } else {
        console.log(data);
        // save data in a state
        dispatch({
          type: 'GET_FOODS',
          payLoad: data,
        });
      }
    }
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  const setInstructions = (instructions) => {
    dispatch({
      type: 'SET_INSTRUCTION',
      payLoad: instructions,
    });
  };

  const setIngredient = (ingredient) => {
    dispatch({
      type: 'SET_INGREDIENT',
      payLoad: ingredient,
    });
  };

  return (
    <EaterContext.Provider
      value={{
        ...state,
        getFood,
        setInstructions,
        setIngredient,
      }}
    >
      {children}
    </EaterContext.Provider>
  );
};

export default EaterContext;
