import React from 'react';
import './clinic.css';
import pic from './images/56567.png';
import { Link } from 'react-router-dom';

const Clinic = () => {
  return (
    <div className='containr'>
      <div className='position-relative'>
        <img
          className='img-fluid'
          src={pic}
          alt="Your_image"
          style={{ width: "100%", height: "auto" }}
        />
        <div className='overlay'>
          <b> <h2 className='text-white'>We give solution</h2></b>
          <h4 className='text-white'>To your pain</h4>
          <Link to={"https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore/calendar"}>  <button className='btn btn-primaryy my-2'>Book now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
