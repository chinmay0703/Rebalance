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
    <div className='contaier' style={{ padding: '30px', backgroundColor: '#eee' }} >
      <div className='position-relative' style={{ borderRadius: '30px' }}>
        <img
          className='img-fluid'
          src={pic}
          alt="Your_image"
          style={{ width: "100%", height: "auto", borderRadius: '30px' }}
        />
        <div className='overlay' style={{ paddingTop: '50px' }}>
          <b> <h1 className='text-white poppins-bold'>We give solution</h1></b>
          <h2 className='text-white poppins-semibold'>To your pain</h2>
          {/* <Link className='my-3' to={"https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore"}>

          </Link> */}
          <button onClick={handleClick} className=' fancy-btn my-2 px-4 py-2 my-3'>
            Book now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
