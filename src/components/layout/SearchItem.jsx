import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import EaterContext from '../context/EaterContex';

const SearchItem = ({ food }) => {
  const { setInstructions, setIngredient } = useContext(EaterContext);
  const handleInstructionPage = () => {
    setIngredient(food.ingredients);
    setInstructions(food.instructions);
  };
  return (
    <div className='card glass hover:animate-bounce  mt-5 text-center  text-white   p-10'>
      <Link to={`/food/${food.title}`} onClick={handleInstructionPage}>
        <h2 className='card-title '>{food.title}</h2>
        <p>{food.servings}</p>
      </Link>
    </div>
  );
};

export default SearchItem;
