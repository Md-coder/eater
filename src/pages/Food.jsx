import React, { useContext } from 'react';
import EaterContext from '../components/context/EaterContex';

const Food = () => {
  const { ingredient, instruction } = useContext(EaterContext);
  return (
    <div className='card glass  mt-5 text-center   p-10'>
      <div className='card-body text-white'>
        <h2 className='card-title'>Ingredients</h2>
        <p className='mb-3'>{ingredient}</p>
        <h2 className='card-title'>Instructions</h2>
        <p>{instruction}</p>
      </div>
    </div>
  );
};

export default Food;
