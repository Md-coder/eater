import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className='w-100 mt-20 grid place-content-center'>
      <iframe
        title='loading'
        src={spinner}
        width='480'
        height='407'
        frameBorder='0'
        className='giphy-embed'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Spinner;
