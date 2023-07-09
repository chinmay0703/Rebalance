
import React from 'react';
import './clinic.css';
import pic from './images/photw.jpg';

const Clinic = () => {
  return (
    <div className="container">
      <img
        className='responsive-image'
        src={pic}
        alt="Your_image"
      />
    </div>
  );
};

export default Clinic;



