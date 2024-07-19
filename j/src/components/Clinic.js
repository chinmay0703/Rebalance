import React from 'react';
import './clinic.css';
import pic from './images/56567.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Clinic = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = "https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore";
  }

  return (
    <div className='conainer' style={{ padding: '20px', backgroundColor: '#eee' }}>
      <div className='position-relative rounded' style={{ borderRadius: '30px', overflow: 'hidden' }}>
        <img
          className='img-fluid'
          src={pic}
          alt="Your_image"
          style={{ width: "100%", height: "auto", borderRadius: '30px' }}
        />
        <div className='overlay my-3 text-center'>
          <b className='d-block d-md-none'><h4 className='text-white poppins-bold'>We give solution</h4></b>
          <b className='d-none d-md-block'><h1 className='text-white poppins-bold'>We give solution</h1></b>
          <h3 className='text-white poppins-semibold d-none d-md-block '>To your pain</h3>
          <h6 className='text-white poppins-semibold d-block d-md-none '>To your pain</h6>
          <button onClick={handleClick} className='fancy-btn my-2 px-4 py-2 my-3'>
            Book now <i className="fas fa-arrow-right"></i>
          </button>
        </div>

      </div>
    </div>

  );
};

export default Clinic;
