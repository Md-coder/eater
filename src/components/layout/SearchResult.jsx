import React, { useContext } from 'react';
import Spinner from '../assets/Spinner';
import EaterContext from '../context/EaterContex';
import SearchItem from './SearchItem';

const SearchResult = () => {
  const { foods, loading } = useContext(EaterContext);
  if (!loading) {
    return (
      <>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {foods.map((food, index) => (
            <li className='list-none' key={index}>
              <SearchItem food={food} />
            </li>
          ))}
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default SearchResult;
