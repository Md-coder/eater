import React from 'react';

const Footer = () => {
  const recentDate = new Date().getFullYear();
  return (
    <div>
      <footer className='footer footer-center p-4 bg-base-300 text-base-content mt-5'>
        <div>
          <p>Copyright &copy; {recentDate} - All right reserved by Eater Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
