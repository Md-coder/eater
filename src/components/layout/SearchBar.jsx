import React, { useContext, useState } from 'react';
import EaterContext from '../context/EaterContex';

const SearchBar = () => {
  const [text, setText] = useState('');
  const { getFood } = useContext(EaterContext);

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    getFood(text);
    console.log(text);
    setText('');
  };
  return (
    <div className='mt-5'>
      <h2 className='mb-5 text-white text-5xl'>Enter your desired meal</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <div className='relative'>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              placeholder='search'
              value={text}
              onChange={handleChange}
            />
            <button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg' type='submit'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
