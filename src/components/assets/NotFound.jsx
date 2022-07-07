import React from 'react';
import { Link } from 'react-router-dom';
// import error from './error.gif';

const NotFound = () => {
  return (
    <div className='grid place-content-center'>
      <h1 className='text-white text-8xl font-bold mb-8'>!Ooops</h1>
      <p className='text-white text-5xl mb-8'>food not found</p>
      <Link to='/'>
        <button className='btn btn-primary'>Let's take you home</button>
      </Link>
    </div>
  );
};

export default NotFound;
